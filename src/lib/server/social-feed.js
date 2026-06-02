import { env } from "$env/dynamic/private";

const DEFAULT_PROFILE_URL = "https://www.instagram.com/saintpierrebasketball/";
const POSTS_LIMIT = 5;
const CACHE_TTL_MS = 10 * 60 * 1000;
const MEDIA_FIELDS = [
  "id",
  "caption",
  "media_type",
  "media_url",
  "thumbnail_url",
  "permalink",
  "timestamp"
].join(",");

const FALLBACK_POSTS = [
  {
    id: "fallback-1",
    caption: "Retour en images sur les entrainements de nos jeunes sections.",
    mediaType: "IMAGE",
    imageUrl: "/images/spbb_img1.jpg",
    permalink: DEFAULT_PROFILE_URL,
    timestamp: "2026-03-01T09:00:00.000Z"
  },
  {
    id: "fallback-2",
    caption: "Preparation des equipes avant les matchs du week-end.",
    mediaType: "IMAGE",
    imageUrl: "/images/hero.jpg",
    permalink: DEFAULT_PROFILE_URL,
    timestamp: "2026-02-21T09:00:00.000Z"
  },
  {
    id: "fallback-3",
    caption: "Ambiance club et progression collective tout au long de la saison.",
    mediaType: "IMAGE",
    imageUrl: "/images/spbb_img1.jpg",
    permalink: DEFAULT_PROFILE_URL,
    timestamp: "2026-02-08T09:00:00.000Z"
  },
  {
    id: "fallback-4",
    caption: "Moments forts des rencontres et des actions sur le terrain.",
    mediaType: "IMAGE",
    imageUrl: "/images/hero.jpg",
    permalink: DEFAULT_PROFILE_URL,
    timestamp: "2026-01-26T09:00:00.000Z"
  },
  {
    id: "fallback-5",
    caption: "Vie associative du SPBB et accompagnement de tous les licencies.",
    mediaType: "IMAGE",
    imageUrl: "/images/spbb_img1.jpg",
    permalink: DEFAULT_PROFILE_URL,
    timestamp: "2026-01-10T09:00:00.000Z"
  }
];

let feedCache = null;

function normalizeEnvValue(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/^['"]|['"]$/g, "");
}

function parseEnvBoolean(value) {
  return normalizeEnvValue(value).toLowerCase() === "true";
}

function nowIso() {
  return new Date().toISOString();
}

function buildFeedCacheKey({ accessToken, igUserId, isDisabled, profileUrl }) {
  return JSON.stringify({
    hasToken: Boolean(accessToken),
    tokenLength: accessToken.length,
    tokenPrefix: accessToken.slice(0, 4),
    tokenSuffix: accessToken.slice(-4),
    igUserId,
    isDisabled,
    profileUrl
  });
}

function getCachedFeed(cacheKey) {
  if (!feedCache || feedCache.cacheKey !== cacheKey) {
    return null;
  }

  if (Date.now() >= feedCache.expiresAt) {
    return null;
  }

  return feedCache.feed;
}

function setCachedFeed(cacheKey, feed) {
  feedCache = {
    cacheKey,
    feed,
    expiresAt: Date.now() + CACHE_TTL_MS
  };
}

function buildFallbackFeed(profileUrl, reason = "fallback") {
  const posts = FALLBACK_POSTS.map((post) => ({
    ...post,
    permalink: profileUrl
  }));

  return {
    posts,
    profileUrl,
    source: "fallback",
    isFallback: true,
    reason,
    updatedAt: nowIso()
  };
}

function buildMediaUrl(baseUrl, accessToken) {
  const params = new URLSearchParams({
    fields: MEDIA_FIELDS,
    limit: String(POSTS_LIMIT),
    access_token: accessToken
  });

  return `${baseUrl}?${params.toString()}`;
}

function resolveInstagramMediaUrls(accessToken) {
  const urls = [];

  urls.push(buildMediaUrl("https://graph.instagram.com/me/media", accessToken));
  return urls;
}

function sanitizeInstagramUrl(apiUrl) {
  const url = new URL(apiUrl);
  url.searchParams.set("access_token", "<hidden>");
  return url.toString();
}

function normalizeMetaError(status, payload, apiUrl) {
  const error = payload?.error || {};

  return {
    status,
    endpoint: sanitizeInstagramUrl(apiUrl),
    message: error.message || "Instagram API request failed",
    type: error.type || null,
    code: error.code || null,
    error_subcode: error.error_subcode || null
  };
}

function createMetaError(metaError) {
  const error = new Error(`instagram-api-${metaError.status}`);
  error.meta = metaError;
  return error;
}

function logSocialFeedError(error) {
  const metaError = error?.meta;

  if (metaError) {
    console.error("[social-feed] Instagram API unavailable, fallback enabled:", metaError);
    return;
  }

  console.error("[social-feed] Instagram API unavailable, fallback enabled:", {
    message: error?.message || "Unknown Instagram API error"
  });
}

function resolveImageUrl(media) {
  if (media.media_type === "VIDEO") {
    return media.thumbnail_url || "";
  }

  return media.media_url || media.thumbnail_url || "";
}

function normalizeCaption(caption) {
  if (typeof caption !== "string") {
    return "";
  }

  return caption.trim();
}

function normalizeInstagramPost(media, profileUrl) {
  const imageUrl = resolveImageUrl(media);
  if (!imageUrl) {
    return null;
  }

  return {
    id: String(media.id),
    caption: normalizeCaption(media.caption),
    mediaType: media.media_type || "IMAGE",
    imageUrl,
    permalink: media.permalink || profileUrl,
    timestamp: media.timestamp || null
  };
}

async function fetchInstagramPosts(fetchFn, accessToken, profileUrl) {
  const apiUrls = resolveInstagramMediaUrls(accessToken);
  let lastError = null;

  for (const apiUrl of apiUrls) {
    try {
      const response = await fetchFn(apiUrl, {
        headers: { Accept: "application/json" }
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw createMetaError(normalizeMetaError(response.status, payload, apiUrl));
      }

      const payload = await response.json();
      const media = Array.isArray(payload?.data) ? payload.data : [];
      const posts = media
        .map((item) => normalizeInstagramPost(item, profileUrl))
        .filter(Boolean)
        .slice(0, POSTS_LIMIT);

      return posts;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("instagram-api-empty");
}

export async function getSocialFeed(fetchFn) {
  const profileUrl = normalizeEnvValue(env.INSTAGRAM_PROFILE_URL) || DEFAULT_PROFILE_URL;
  const isDisabled = parseEnvBoolean(env.SPBB_SOCIAL_FEED_DISABLED);
  const accessToken = normalizeEnvValue(env.INSTAGRAM_ACCESS_TOKEN);
  const igUserId = normalizeEnvValue(env.INSTAGRAM_IG_USER_ID);
  const cacheKey = buildFeedCacheKey({ accessToken, igUserId, isDisabled, profileUrl });
  const cachedFeed = getCachedFeed(cacheKey);

  if (cachedFeed) {
    return cachedFeed;
  }

  if (isDisabled) {
    const feed = buildFallbackFeed(profileUrl, "disabled");
    setCachedFeed(cacheKey, feed);
    return feed;
  }

  if (!accessToken) {
    const feed = buildFallbackFeed(profileUrl, "missing-token");
    setCachedFeed(cacheKey, feed);
    return feed;
  }

  try {
    const posts = await fetchInstagramPosts(fetchFn, accessToken, profileUrl);

    if (!posts.length) {
      const feed = {
        posts,
        profileUrl,
        source: "instagram-api",
        isFallback: false,
        reason: null,
        updatedAt: nowIso()
      };

      setCachedFeed(cacheKey, feed);
      return feed;
    }

    const feed = {
      posts,
      profileUrl,
      source: "instagram-api",
      isFallback: false,
      reason: null,
      updatedAt: nowIso()
    };

    setCachedFeed(cacheKey, feed);
    return feed;
  } catch (error) {
    logSocialFeedError(error);
    const feed = buildFallbackFeed(profileUrl, error?.meta?.code === 190 ? "oauth-error" : "api-error");
    setCachedFeed(cacheKey, feed);
    return feed;
  }
}
