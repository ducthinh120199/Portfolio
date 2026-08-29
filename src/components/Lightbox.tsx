"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type LightboxProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

const ZOOM_STEP = 0.5;
const ZOOM_MIN = 1;
const ZOOM_MAX = 3;

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(ZOOM_MIN);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (zoom === ZOOM_MIN) return;
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--zoom-x", `${x}%`);
    el.style.setProperty("--zoom-y", `${y}%`);
  }

  function zoomIn(e: React.MouseEvent) {
    e.stopPropagation();
    setZoom((z) => Math.min(ZOOM_MAX, z + ZOOM_STEP));
  }

  function zoomOut(e: React.MouseEvent) {
    e.stopPropagation();
    setZoom((z) => Math.max(ZOOM_MIN, z - ZOOM_STEP));
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed top-5 right-5 z-101 rounded-full bg-paper-raised px-4 py-2 text-sm font-medium text-ink shadow-lg transition-colors hover:bg-ember hover:text-white"
      >
        Close ✕
      </button>

      <div className="fixed top-20 right-5 z-101 flex flex-col items-center gap-1 rounded-2xl bg-paper-raised p-1.5 shadow-lg">
        <button
          type="button"
          onClick={zoomIn}
          disabled={zoom === ZOOM_MAX}
          aria-label="Zoom in"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-ember-soft hover:text-ember disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path
              d="M21 21l-4.3-4.3M11 8v6M8 11h6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <span className="text-center font-mono text-[11px] text-ink-muted">
          {Math.round(zoom * 100)}%
        </span>
        <button
          type="button"
          onClick={zoomOut}
          disabled={zoom === ZOOM_MIN}
          aria-label="Zoom out"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-ember-soft hover:text-ember disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.3-4.3M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        ref={frameRef}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={handleMouseMove}
        className={`relative max-h-[95vh] max-w-[95vw] overflow-hidden rounded-lg shadow-2xl ${
          zoom > ZOOM_MIN ? "cursor-move" : ""
        }`}
        style={{ ["--zoom-x" as string]: "50%", ["--zoom-y" as string]: "50%" }}
      >
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1600}
          sizes="95vw"
          className="block h-auto max-h-[95vh] w-auto max-w-[95vw] object-contain transition-transform duration-200 ease-out"
          style={{ transform: `scale(${zoom})`, transformOrigin: "var(--zoom-x) var(--zoom-y)" }}
        />
      </div>
    </div>,
    document.body,
  );
}
