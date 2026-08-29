"use client";

import { useState } from "react";
import Image from "next/image";
import type { Feedback } from "@/data/feedback";
import { useLanguage } from "@/lib/language";
import Lightbox from "./Lightbox";
import BulletinScroller from "./BulletinScroller";

export default function FeedbackCard({ feedback }: { feedback: Feedback }) {
  const { locale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const isBulletin = feedback.kind === "bulletin";
  const caption = feedback.caption[locale];

  return (
    <figure
      className={`group flex flex-col overflow-hidden rounded-xl border border-line bg-paper-raised shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
        isBulletin ? "sm:col-span-2 lg:col-span-3" : ""
      }`}
    >
      {isBulletin ? (
        feedback.imageSrc ? (
          <BulletinScroller src={feedback.imageSrc} alt={caption} onExpand={() => setIsOpen(true)} />
        ) : (
          // TODO: cần ảnh poster bản tin nội bộ — xem PLAN.md mục 7.2
          <div className="flex h-105 w-full items-center justify-center bg-ember-soft text-ink-muted sm:h-130">
            <span className="font-mono text-xs uppercase tracking-[0.06em]">
              {t.feedback.placeholder}
            </span>
          </div>
        )
      ) : (
        <button
          type="button"
          onClick={() => feedback.imageSrc && setIsOpen(true)}
          disabled={!feedback.imageSrc}
          aria-label={feedback.imageSrc ? `${caption} — enlarge` : caption}
          className={`relative aspect-5/9 w-full bg-ember-soft ${
            feedback.imageSrc ? "cursor-zoom-in" : "cursor-default"
          }`}
        >
          {feedback.imageSrc ? (
            <>
              <Image src={feedback.imageSrc} alt={caption} fill className="object-contain p-3" />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 text-sm font-medium text-white opacity-0 transition-all group-hover:bg-ink/30 group-hover:opacity-100">
                Enlarge ↗
              </span>
            </>
          ) : (
            // TODO: cần ảnh screenshot feedback từ hệ thống Aspiration — xem PLAN.md mục 7.2
            <div className="flex h-full w-full items-center justify-center text-ink-muted">
              <span className="font-mono text-xs uppercase tracking-[0.06em]">
                {t.feedback.placeholder}
              </span>
            </div>
          )}
        </button>
      )}

      <figcaption className="border-t border-line px-4 py-3 text-xs font-medium text-ink-muted">
        {caption}
      </figcaption>

      {isOpen && feedback.imageSrc && (
        <Lightbox src={feedback.imageSrc} alt={caption} onClose={() => setIsOpen(false)} />
      )}
    </figure>
  );
}
