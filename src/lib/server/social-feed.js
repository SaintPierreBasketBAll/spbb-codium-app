import { env } from "$env/dynamic/private";

const DEFAULT_PROFILE_URL = "https://www.instagram.com/saintpierrebasketball/";
const POSTS_LIMIT = 5;
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

function normalizeEnvValue(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/^['"]|['"]$/g, "");
}

function parseEnvBoolean(value) {
  return normalizeEnvValue(value).toLowerCase() === "true";
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
    updatedAt: new Date().toISOString()
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

function resolveInstagramMediaUrls(accessToken, igUserId) {
  const urls = [];

  if (igUserId) {
    urls.push(buildMediaUrl(`https://graph.facebook.com/v23.0/${igUserId}/media`, accessToken));
  }

  urls.push(buildMediaUrl("https://graph.instagram.com/me/media", accessToken));
  return urls;
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

async function fetchInstagramPosts(fetchFn, accessToken, igUserId, profileUrl) {
  const apiUrls = resolveInstagramMediaUrls(accessToken, igUserId);
  let lastError = null;

  for (const apiUrl of apiUrls) {
    try {
      const response = await fetchFn(apiUrl, {
        headers: { Accept: "application/json" }
      });

      if (!response.ok) {
        throw new Error(`instagram-api-${response.status}`);
      }

      const payload = await response.json();
      const media = Array.isArray(payload?.data) ? payload.data : [];
      const posts = media
        .map((item) => normalizeInstagramPost(item, profileUrl))
        .filter(Boolean)
        .slice(0, POSTS_LIMIT);

      if (posts.length) {
        return posts;
      }
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

  if (isDisabled) {
    return buildFallbackFeed(profileUrl, "disabled");
  }

  if (!accessToken) {
    return buildFallbackFeed(profileUrl, "missing-token");
  }

  try {
    const posts = await fetchInstagramPosts(fetchFn, accessToken, igUserId, profileUrl);

    if (!posts.length) {
      return buildFallbackFeed(profileUrl, "empty");
    }

    return {
      posts,
      profileUrl,
      source: "instagram-api",
      isFallback: false,
      reason: null,
      updatedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error("[social-feed] Instagram API unavailable, fallback enabled:", error);
    return buildFallbackFeed(profileUrl, "api-error");
  }
}
