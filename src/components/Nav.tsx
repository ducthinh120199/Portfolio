"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/language";

export default function Nav() {
  const { locale, toggleLocale, t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#feedback", label: t.nav.feedback },
    { href: "#tiktok", label: t.nav.tiktok },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto flex max-w-280 flex-wrap items-center gap-x-4 gap-y-3 rounded-3xl border border-line bg-paper-raised/90 px-4 py-3 shadow-sm backdrop-blur-xl sm:flex-nowrap sm:justify-between sm:rounded-full sm:px-4 sm:py-2 sm:pl-4">
        <a
          href="#top"
          className="order-1 flex shrink-0 items-center gap-2 rounded-full border border-line/60 bg-paper px-3 py-1.5 font-display text-sm font-semibold tracking-tight text-ink"
        >
          {site.handle}
        </a>

        <div className="order-2 ml-auto flex shrink-0 items-center gap-2 sm:order-3 sm:ml-0">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-[0.06em] text-ink-muted transition-colors hover:text-ink"
          >
            <span className={locale === "en" ? "text-ink" : undefined}>EN</span>
            <span className="mx-1 text-line">/</span>
            <span className={locale === "vi" ? "text-ink" : undefined}>VI</span>
          </button>
          <Link
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-ember"
          >
            {t.nav.contact}
          </Link>
        </div>

        <ul className="order-3 flex min-w-0 basis-full items-center gap-5 overflow-x-auto sm:order-2 sm:basis-auto">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
