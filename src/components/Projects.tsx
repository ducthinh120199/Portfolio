"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/language";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { locale, t } = useLanguage();
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  const activeProject = projects.find((project) => project.slug === activeSlug) ?? projects[0];

  return (
    <section id="projects" className="reveal bg-paper/75 backdrop-blur-xl">
      <div className="mx-auto max-w-280 px-6 py-16 sm:px-16 sm:py-20">
        <SectionHeading index="04" label={t.projects.label} title={t.projects.title} />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[3fr_7fr] lg:gap-6">
          <ul className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {projects.map((project, index) => {
              const isActive = project.slug === activeProject.slug;
              return (
                <li key={project.slug} className="shrink-0 lg:shrink lg:w-full">
                  <button
                    type="button"
                    onClick={() => setActiveSlug(project.slug)}
                    aria-pressed={isActive}
                    className={`w-64 shrink-0 rounded-xl border p-4 text-left transition-colors lg:w-full ${
                      isActive
                        ? "border-ember bg-ember-soft"
                        : "border-line bg-paper-raised hover:border-ember/50"
                    }`}
                  >
                    <span className="font-mono text-xs text-ember">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                      {project.description[locale]}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>

          <ProjectCard key={activeProject.slug} project={activeProject} />
        </div>
      </div>
    </section>
  );
}
