"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/language";

export default function Contact() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const whatsappHref = `https://wa.me/${site.whatsapp.vn.replace("+", "")}`;

  return (
    <footer id="contact" className="reveal bg-ink text-paper">
      <div className="mx-auto max-w-280 px-6 py-16 sm:px-16 sm:py-20">
        <span className="font-mono text-xs tracking-[0.08em] text-ember uppercase">
          07 / {t.contact.label}
        </span>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          {t.contact.title}
        </h2>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-paper/80">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-ember">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ember"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ember"
              >
                GitHub
              </a>
            </li>
          </ul>
          <a
            href={site.cvUrl}
            className="w-fit rounded-full bg-ember px-5 py-3 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-white hover:text-ink"
          >
            {t.contact.downloadCv}
          </a>
        </div>
        <p className="mt-12 font-mono text-xs text-paper/50">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
