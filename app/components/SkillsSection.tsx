/**
 * Skills section — renders categorized technical skills with optional devicon icons.
 * Uses the Devicons CDN for technology logos.
 */

import { SKILL_CATEGORIES } from "app/content/skills";
import { SectionHeading } from "app/components/ExperienceSection";

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6">
      <SectionHeading title="Skills" />

      <div className="grid gap-8 sm:grid-cols-2">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.category}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/35">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/60 transition-colors hover:border-white/20 hover:text-white/80"
                >
                  {skill.devicon && (
                    <i
                      className={`${skill.devicon} text-base`}
                      aria-hidden="true"
                    />
                  )}
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
