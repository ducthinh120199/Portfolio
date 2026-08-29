"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/language";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_120%_80%_at_80%_-10%,var(--color-ember-soft),transparent_60%)]"
    >
      <div className="mx-auto max-w-280 px-6 pt-16 pb-20 sm:px-16 sm:pt-20 sm:pb-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-ember">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[58px] lg:leading-[1.05]">
              {site.name}
            </h1>
            <p className="mt-2 text-lg text-ink-muted">{t.hero.role}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink sm:text-xl">
              {t.hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-ember px-5 py-3 text-sm font-medium text-white shadow-md shadow-ember/20 transition-all hover:-translate-y-0.5 hover:bg-ink hover:shadow-lg"
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href={site.cvUrl}
                className="rounded-full border border-line bg-paper-raised px-5 py-3 text-sm font-medium text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-md"
              >
                {t.hero.ctaCv}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line bg-paper-raised px-5 py-3 text-sm font-medium text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-md"
              >
                {t.hero.ctaContact}
              </a>
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.04em] text-ink-muted">
              {t.hero.quickFacts}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-4 -bottom-4 aspect-[4/5] w-full rounded-xl bg-ember/25"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-line bg-paper-raised shadow-xl">
              {site.portraitSrc ? (
                <Image
                  src={site.portraitSrc}
                  alt={t.hero.portraitAlt}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                // TODO: cần ảnh chân dung thật (4:5) — xem PLAN.md mục 7.2
                <div className="flex h-full w-full items-center justify-center bg-ember-soft">
                  <span className="font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">
                    Portrait coming soon
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
