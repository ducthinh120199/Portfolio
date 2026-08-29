export type TikTokEmbed = {
  url: string;
  title: string;
  authorName: string;
  thumbnailUrl: string;
};

// Server-only: TikTok's oEmbed thumbnail URLs are signed and expire, so we
// re-fetch periodically instead of hardcoding — see revalidate below.
export async function getTikTokEmbeds(urls: string[]): Promise<TikTokEmbed[]> {
  const results = await Promise.all(
    urls.map(async (url): Promise<TikTokEmbed | null> => {
      try {
        const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`, {
          next: { revalidate: 86400 },
        });
        if (!res.ok) return null;
        const data = (await res.json()) as {
          title?: string;
          author_name?: string;
          thumbnail_url?: string;
        };
        if (!data.thumbnail_url) return null;
        return {
          url,
          title: data.title ?? "",
          authorName: data.author_name ?? "",
          thumbnailUrl: data.thumbnail_url,
        };
      } catch {
        return null;
      }
    }),
  );
  return results.filter((result): result is TikTokEmbed => result !== null);
}
