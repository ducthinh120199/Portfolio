"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/language";
import type { TikTokEmbed } from "@/lib/tiktok";
import SectionHeading from "./SectionHeading";

export default function TikTok({ videos }: { videos: TikTokEmbed[] }) {
  const { t } = useLanguage();
  const { tiktok } = site;

  return (
    <section id="tiktok" className="reveal bg-paper/75 backdrop-blur-xl">
      <div className="mx-auto max-w-280 px-6 py-16 sm:px-16 sm:py-20">
        <SectionHeading index="06" label={t.tiktok.label} title={t.tiktok.title} />
        <p className="max-w-xl text-base leading-relaxed text-ink-muted">
          {t.tiktok.description}{" "}
          <a
            href={tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ember hover:text-ink"
          >
            {tiktok.handle} — {t.tiktok.visitChannel} →
          </a>
        </p>

        {videos.length > 0 ? (
          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 py-2 -mx-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:py-0 lg:grid-cols-3">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="relative aspect-9/16 w-64 shrink-0 snap-center overflow-hidden rounded-2xl border border-line bg-black shadow-sm sm:w-full sm:max-w-80 sm:shrink"
              >
                <iframe
                  src={video.playerUrl}
                  title={`TikTok video ${index + 1} — ${tiktok.handle}`}
                  loading="lazy"
                  allow="encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-lg border border-line bg-paper-raised p-6 font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">
            {t.tiktok.pendingVideos}
          </div>
        )}
      </div>
    </section>
  );
}
