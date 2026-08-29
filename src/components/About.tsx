"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/language";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t, locale } = useLanguage();

  return (
    <section id="about" className="reveal bg-paper/75 backdrop-blur-xl">
      <div className="mx-auto max-w-280 px-6 py-16 sm:px-16 sm:py-20">
        <SectionHeading index="02" label={t.about.label} title={t.about.title} />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <p className="max-w-2xl text-base leading-relaxed text-ink sm:text-lg">
            {t.about.paragraph}
          </p>
          <ol className="flex flex-col gap-4 border-l border-line pl-6">
            {site.timeline.map((item) => (
              <li key={item.org} className="relative">
                <span
                  className="absolute top-1.5 -left-6.75 h-2 w-2 rounded-full bg-ember"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">
                  {item.period[locale]}
                </p>
                <p className="font-display text-lg font-semibold text-ink">{item.org}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
