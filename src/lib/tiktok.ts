export type TikTokEmbed = {
  url: string;
  id: string;
  playerUrl: string;
};

// TikTok's oEmbed endpoint no longer returns thumbnail_url/title/author_name —
// only the player iframe — so we embed the official player directly from the
// video ID parsed out of the URL. No network call needed.
export function getTikTokEmbeds(urls: string[]): TikTokEmbed[] {
  return urls.flatMap((url) => {
    const id = url.match(/\/video\/(\d+)/)?.[1];
    if (!id) return [];
    return [
      {
        url,
        id,
        playerUrl: `https://www.tiktok.com/player/v1/${id}?music_info=1&description=1&rel=0`,
      },
    ];
  });
}
