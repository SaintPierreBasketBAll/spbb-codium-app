import { json } from "@sveltejs/kit";
import { getSocialFeed } from "$lib/server/social-feed";

export async function GET({ fetch }) {
  const socialFeed = await getSocialFeed(fetch);
  const cacheControl = socialFeed.isFallback
    ? "public, max-age=300, stale-while-revalidate=300"
    : "public, max-age=0, s-maxage=900, stale-while-revalidate=3600";

  return json(socialFeed, {
    headers: {
      "cache-control": cacheControl
    }
  });
}
