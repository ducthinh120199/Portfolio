"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/language";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function Nav() {
  const { locale, toggleLocale, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#feedback", label: t.nav.feedback },
    { href: "#tiktok", label: t.nav.tiktok },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto max-w-280">
        <div className="flex items-center justify-between gap-3 rounded-3xl border border-line bg-paper-raised/90 px-4 py-3 shadow-sm backdrop-blur-xl sm:rounded-full sm:px-4 sm:py-2 sm:pl-4">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 rounded-full border border-line/60 bg-paper px-3 py-1.5 font-display text-sm font-semibold tracking-tight text-ink"
          >
            {site.handle}
          </a>

          <ul className="hidden min-w-0 items-center gap-5 sm:flex">
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

          <div className="flex shrink-0 items-center gap-2">
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
              className="hidden rounded-full bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-ember sm:inline-block"
            >
              {t.nav.contact}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line/60 text-ink transition-colors hover:border-ember hover:text-ember sm:hidden"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-nav-menu"
            className="mt-2 rounded-3xl border border-line bg-paper-raised/95 p-3 shadow-sm backdrop-blur-xl sm:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm text-ink-muted transition-colors hover:bg-paper hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 block rounded-xl bg-ink px-3 py-2.5 text-center text-sm text-paper transition-colors hover:bg-ember"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
