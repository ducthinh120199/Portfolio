"use client";

import { skillGroups } from "@/data/skills";
import { useLanguage } from "@/lib/language";
import SectionHeading from "./SectionHeading";
import SkillIcon from "./SkillIcon";

const spanClass: Record<string, string> = {
  Frontend: "lg:col-span-2",
  "Backend & Database": "lg:col-span-1 lg:row-span-2",
  "D365 & ERP": "lg:col-span-1",
  "Cloud & DevOps": "lg:col-span-1",
  "AI Tools": "lg:col-span-2",
  Design: "lg:col-span-1",
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="reveal border-y border-line/60 bg-paper-raised/75 backdrop-blur-xl">
      <div className="mx-auto max-w-280 px-6 py-16 sm:px-16 sm:py-20">
        <SectionHeading index="03" label={t.skills.label} title={t.skills.title} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`group relative flex flex-col overflow-hidden rounded-xl border border-line bg-paper p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
                spanClass[group.category] ?? ""
              }`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-ember/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
              />

              <div className="relative flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ember-soft text-ember">
                  <SkillIcon icon={group.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-ink">
                  {group.category}
                </h3>
              </div>

              <ul className="relative mt-4 flex flex-wrap gap-2">
                {group.items.map((item, index) => (
                  <li
                    key={item}
                    className={
                      index === 0
                        ? "rounded-full bg-ember px-3 py-1 font-mono text-xs font-medium text-white"
                        : "rounded-full bg-ember-soft px-3 py-1 font-mono text-xs text-ember"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
