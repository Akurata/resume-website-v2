/**
 * Experience section — renders a vertical timeline of professional roles.
 * Inspired by the jess-resume timeline pattern but adapted for a dark space theme.
 */

import { EXPERIENCE_LIST } from "app/content/experiences";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6">
      <SectionHeading title="Experience" />

      <div className="relative ml-4 border-l border-white/10 pl-8 sm:ml-6 sm:pl-10">
        {EXPERIENCE_LIST.map((exp, i) => (
          <article key={i} className="group relative pb-12 last:pb-0">
            {/* Timeline dot */}
            <div className="absolute -left-[calc(2rem+4.5px)] top-1 h-[9px] w-[9px] rounded-full border-2 border-blue-400 bg-gray-950 transition-colors group-hover:bg-blue-400 sm:-left-[calc(2.5rem+4.5px)]" />

            {/* Header row */}
            <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-white/90">
                {exp.jobTitle}
              </h3>
              <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-white/35">
                {exp.startDate} — {exp.endDate}
              </span>
            </div>

            {/* Company & location */}
            <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
              {exp.link ? (
                <a
                  href={exp.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-400/80 transition-colors hover:text-blue-300"
                >
                  {exp.companyName}
                </a>
              ) : (
                <span className="font-medium text-blue-400/80">{exp.companyName}</span>
              )}
              <span className="text-white/25">·</span>
              <span className="text-white/40">{exp.location}</span>
            </div>

            {/* Highlights */}
            <ul className="space-y-2">
              {exp.highlights.map((item, j) => (
                <li
                  key={j}
                  className="relative pl-4 text-sm leading-relaxed text-white/55 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-white/25"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/45 transition-colors hover:border-white/20 hover:text-white/65"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared heading component (used across sections)                    */
/* ------------------------------------------------------------------ */
export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-10">
      <h2 className="inline-block border-b-2 border-blue-400/60 pb-2 text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
