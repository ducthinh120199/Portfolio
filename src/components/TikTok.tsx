"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/language";
import SectionHeading from "./SectionHeading";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.75-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

export default function TikTok() {
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

        {tiktok.videos.length > 0 ? (
          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 py-2 -mx-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:py-0 lg:grid-cols-3">
            {tiktok.videos.map((video) => (
              <a
                key={video.url}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${video.title} — ${t.tiktok.watchOnTikTok}`}
                className="group relative aspect-9/16 w-60 shrink-0 snap-center overflow-hidden rounded-2xl border border-line bg-black shadow-sm sm:w-full sm:max-w-80 sm:shrink"
              >
                <Image
                  src={video.cover}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 240px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/10" />

                <span className="absolute top-3 left-3 rounded-full bg-black/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-white backdrop-blur-sm">
                  TikTok
                </span>
                <span className="absolute top-3 right-3 rounded-full bg-black/50 px-2 py-1 font-mono text-[10px] text-white backdrop-blur-sm">
                  {video.duration}
                </span>

                <span className="absolute inset-0 flex items-center justify-center text-white">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/45 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-ember">
                    <PlayIcon />
                  </span>
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="line-clamp-2 text-sm leading-snug font-medium text-white">
                    {video.title}
                  </p>
                  <p className="mt-1.5 font-mono text-xs text-white/70">
                    {tiktok.handle} · {t.tiktok.watchOnTikTok} ↗
                  </p>
                </div>
              </a>
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
