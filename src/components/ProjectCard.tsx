"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/language";

const COLLAPSED_HIGHLIGHTS = 4;

function ProjectMedia({
  project,
  videoClassName = "h-full w-full object-cover",
}: {
  project: Project;
  videoClassName?: string;
}) {
  const { t } = useLanguage();
  const [videoFailed, setVideoFailed] = useState(false);

  const attachVideoErrorHandler = useCallback((node: HTMLVideoElement | null) => {
    node?.addEventListener("error", () => setVideoFailed(true));
  }, []);

  if (project.videoSrc && !videoFailed) {
    return (
      <video
        ref={attachVideoErrorHandler}
        src={project.videoSrc}
        className={videoClassName}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  if (project.imageSrc) {
    return (
      <Image
        src={project.imageSrc}
        alt={`Screenshot — ${project.title}`}
        fill
        className="object-cover"
      />
    );
  }

  // TODO: cần ảnh/video demo của project này — xem PLAN.md mục 5/6
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-ink-muted">
      <span className="font-mono text-xs uppercase tracking-[0.06em]">{t.projects.placeholder}</span>
    </div>
  );
}

function ProjectLinks({ project, hideLive }: { project: Project; hideLive?: boolean }) {
  const { t } = useLanguage();

  const showLive = project.liveUrl && !hideLive;
  if (!project.githubUrl && !showLive) return null;

  return (
    <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-1">
      {showLive && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-ember hover:text-ink"
        >
          {t.projects.live} →
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-ember hover:text-ink"
        >
          {t.projects.github} →
        </a>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const highlights = project.highlights ?? [];
  const visibleHighlights = expanded ? highlights : highlights.slice(0, COLLAPSED_HIGHLIGHTS);
  const hasMore = highlights.length > COLLAPSED_HIGHLIGHTS;

  return (
    <article className="grid overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-sm lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
      {project.videoSrc ? (
        // Video demo — framed like a device mockup at its real aspect ratio (~9:19.5)
        // instead of stretched into a landscape box, which left large empty letterbox bars.
        <div className="flex items-center justify-center bg-paper p-6 sm:p-8 lg:h-full">
          <div className="relative aspect-9/19.5 w-full max-w-56 overflow-hidden rounded-2xl bg-black shadow-lg ring-1 ring-ink/10">
            <ProjectMedia project={project} videoClassName="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      ) : (
        <div className="relative aspect-4/5 w-full max-w-md overflow-hidden bg-ember-soft lg:max-w-none">
          <ProjectMedia project={project} />
        </div>
      )}

      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{project.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
          {project.description[locale]}
        </p>

        {visibleHighlights.length > 0 && (
          <ul className="space-y-2 text-sm leading-relaxed text-ink-muted">
            {visibleHighlights.map((highlight, index) => (
              <li key={index} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                <span>{highlight[locale]}</span>
              </li>
            ))}
          </ul>
        )}

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="self-start text-sm font-medium text-ember hover:text-ink"
          >
            {expanded ? t.projects.viewLess : t.projects.viewMore} {expanded ? "↑" : "→"}
          </button>
        )}

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech} className="rounded-full bg-ember-soft px-3 py-1 font-mono text-xs text-ember">
              {tech}
            </li>
          ))}
        </ul>

        <ProjectLinks project={project} hideLive={Boolean(project.videoSrc)} />
      </div>
    </article>
  );
}
