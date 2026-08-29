"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type BulletinScrollerProps = {
  src: string;
  alt: string;
  onExpand: () => void;
};

const SPEED_PX_PER_SEC = 22;

export default function BulletinScroller({ src, alt, onExpand }: BulletinScrollerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame: number;
    let last = performance.now();
    // Keep the scroll position in a float accumulator instead of reading
    // track.scrollTop back each frame — the browser rounds scrollTop to an
    // integer, so re-reading it drops the sub-pixel remainder every frame
    // and the animation effectively stalls.
    let position = track.scrollTop;

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused) {
        const maxScroll = track.scrollHeight - track.clientHeight;
        if (maxScroll > 0) {
          position += SPEED_PX_PER_SEC * dt;
          if (position >= maxScroll) position = 0;
          track.scrollTop = position;
        }
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <div
      className="relative"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="h-105 w-full overflow-y-auto bg-ember-soft sm:h-130"
        style={{ scrollBehavior: "auto" }}
      >
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={2400}
          sizes="(max-width: 640px) 100vw, 900px"
          className="h-auto w-full object-contain"
          priority={false}
        />
      </div>

      <button
        type="button"
        onClick={onExpand}
        aria-label={`${alt} — expand`}
        className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-paper-raised/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-ember hover:text-white"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
          <path
            d="M9 4H4v5M15 4h5v5M4 15v5h5M20 15v5h-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="pointer-events-none absolute top-0 right-0 left-0 h-8 bg-linear-to-b from-paper-raised/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-8 bg-linear-to-t from-paper-raised/80 to-transparent" />
    </div>
  );
}
