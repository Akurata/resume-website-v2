/**
 * Technical skills organized by category.
 *
 * Each skill includes a label and an optional devicon class name for rendering
 * the corresponding technology icon. Categories are ordered by relevance
 * to Alex's current role.
 */

export interface SkillItem {
  label: string;
  /** Devicon class (e.g. "devicon-react-original") for icon rendering. */
  devicon?: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { label: "Golang", devicon: "devicon-go-original-wordmark" },
      { label: "TypeScript", devicon: "devicon-typescript-plain" },
      { label: "JavaScript", devicon: "devicon-javascript-plain" },
      { label: "Python", devicon: "devicon-python-plain" },
      { label: "Rust", devicon: "devicon-rust-original" },
      { label: "Java", devicon: "devicon-java-plain" },
      { label: "Scala", devicon: "devicon-scala-plain" },
      { label: "C/C++", devicon: "devicon-cplusplus-plain" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { label: "React", devicon: "devicon-react-original" },
      { label: "Angular", devicon: "devicon-angular-plain" },
      { label: "HTML", devicon: "devicon-html5-plain" },
      { label: "CSS/SCSS", devicon: "devicon-css3-plain" },
      { label: "Tailwind CSS", devicon: "devicon-tailwindcss-original" },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { label: "Node.js", devicon: "devicon-nodejs-plain" },
      { label: "PostgreSQL", devicon: "devicon-postgresql-plain" },
      { label: "MySQL", devicon: "devicon-mysql-plain" },
      { label: "Redis", devicon: "devicon-redis-plain" },
      { label: "Nginx", devicon: "devicon-nginx-original" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { label: "Kubernetes", devicon: "devicon-kubernetes-plain" },
      { label: "Docker", devicon: "devicon-docker-plain" },
      { label: "AWS", devicon: "devicon-amazonwebservices-plain-wordmark" },
      { label: "Google Cloud", devicon: "devicon-googlecloud-plain" },
      { label: "OpenShift" },
      { label: "Argo" },
      { label: "Tekton" },
    ],
  },
];

/** Flat list of all skill labels (useful for tag matching). */
export const ALL_SKILLS: string[] = SKILL_CATEGORIES.flatMap((cat) =>
  cat.skills.map((s) => s.label),
);
