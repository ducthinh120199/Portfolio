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
            aria-pressed={locale === "vi"}
            aria-label="Toggle language"
            className="relative inline-flex h-8 w-18 shrink-0 items-center rounded-full bg-ink p-1 transition-colors"
          >
            <span className="flex w-full items-center justify-between px-2 font-mono text-[10px] tracking-[0.06em] text-paper/50 uppercase">
              <span>EN</span>
              <span>VI</span>
            </span>
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute top-1 left-1 flex h-6 w-8 items-center justify-center rounded-full bg-paper font-mono text-[10px] font-semibold tracking-[0.06em] text-ink uppercase shadow-sm transition-transform duration-300 ${
                locale === "vi" ? "translate-x-8" : "translate-x-0"
              }`}
            >
              {locale}
            </span>
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
