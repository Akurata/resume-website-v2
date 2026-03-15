/**
 * Education section — renders academic credentials in a card layout.
 */

import { EDUCATION } from "app/content/education";
import { SectionHeading } from "app/components/ExperienceSection";

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6">
      <SectionHeading title="Education" />

      <div className="space-y-4">
        {EDUCATION.map((edu, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            {/* Top row */}
            <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-white/90">{edu.school}</h3>
              <span className="text-xs font-medium uppercase tracking-wider text-white/35">
                Class of {edu.graduationYear}
              </span>
            </div>

            {/* Degree */}
            <p className="mb-3 text-sm font-medium text-blue-400/80">{edu.degree}</p>

            {/* Details */}
            {edu.details.length > 0 && (
              <ul className="space-y-1">
                {edu.details.map((detail, j) => (
                  <li
                    key={j}
                    className="relative pl-4 text-sm text-white/50 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-white/25"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
