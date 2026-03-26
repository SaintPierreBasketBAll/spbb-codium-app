import { getSocialFeed } from "$lib/server/social-feed";

export async function load({ fetch }) {
  const socialFeed = await getSocialFeed(fetch);

  return {
    socialFeed
  };
}
