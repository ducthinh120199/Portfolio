"use client";

import { useState } from "react";
import type { Feedback } from "@/data/feedback";
import FeedbackCard from "./FeedbackCard";

const PAGE_SIZE = 5;

export default function RecognitionCarousel({ items }: { items: Feedback[] }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const pageItems = items.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const center = (pageItems.length - 1) / 2;

  return (
    <div>
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 py-10 sm:justify-center sm:gap-0 sm:overflow-visible sm:px-0">
        {pageItems.map((item, index) => {
          const signedDistance = index - center;
          const distance = Math.abs(signedDistance);
          const fanY = distance * 18;
          const fanScale = 1 - distance * 0.06;
          const fanZ = 50 - Math.round(distance * 10);
          const fanRotate = signedDistance * 4;
          const overlap = index === 0 ? 0 : -76;

          return (
            <div
              key={item.id}
              className="fan-card w-48 shrink-0 snap-center sm:w-56"
              style={
                {
                  "--fan-y": `${fanY}px`,
                  "--fan-scale": fanScale,
                  "--fan-z": fanZ,
                  "--fan-rotate": `${fanRotate}deg`,
                  "--fan-overlap": `${overlap}px`,
                } as React.CSSProperties
              }
            >
              <FeedbackCard feedback={item} />
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous page"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ember hover:text-ember disabled:opacity-30 disabled:hover:border-line disabled:hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                aria-current={i === page}
                className={`h-1.5 rounded-full transition-all ${
                  i === page ? "w-6 bg-ember" : "w-1.5 bg-line hover:bg-ember-soft"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Next page"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ember hover:text-ember disabled:opacity-30 disabled:hover:border-line disabled:hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
