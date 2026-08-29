"use client";

import Script from "next/script";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/language";
import SectionHeading from "./SectionHeading";

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

        {tiktok.videoUrls.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {tiktok.videoUrls.map((url) => (
              <blockquote key={url} className="tiktok-embed" cite={url} data-video-id="">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </blockquote>
            ))}
            <Script async src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
          </div>
        ) : (
          // TODO: cần link video TikTok muốn nhúng — xem PLAN.md mục 6
          <div className="mt-8 rounded-lg border border-line bg-paper-raised p-6 font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">
            {t.tiktok.pendingVideos}
          </div>
        )}
      </div>
    </section>
  );
}
