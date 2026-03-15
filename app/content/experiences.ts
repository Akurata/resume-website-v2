/**
 * Professional experience data for Alex Kurata's resume site.
 *
 * Each entry maps to a role from Alex's career, ordered reverse-chronologically.
 * Descriptions are concise, impact-focused bullet points written in third-person
 * professional tone — suitable for a public portfolio.
 */

export interface ExperienceProps {
  companyName: string;
  jobTitle: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  link?: { url: string; label: string };
  tags: string[];
}

/* ------------------------------------------------------------------ */
/*  IBM — Band 7                                                       */
/* ------------------------------------------------------------------ */
const IBMBand7: ExperienceProps = {
  companyName: "IBM",
  jobTitle: "Hybrid Cloud Software Engineer — Band 7",
  location: "Armonk, NY",
  startDate: "July 2023",
  endDate: "Present",
  highlights: [
    "Promoted to Band 7 to lead complex backend architecture initiatives for IBM's hybrid cloud platform, driving reliability and scale across a globally distributed infrastructure.",
    "Architected and implemented a suite of Kubernetes operators for distributed workload placement and scheduling, enabling cost-effective utilization of multi-datacenter infrastructure at scale.",
    "Became the recognized Golang and Kubernetes subject-matter expert (SME) for the team, mentoring peers and establishing best practices for operator development.",
    "Served as a technical consultant across multiple IBM divisions, accelerating delivery of services requiring specialized hybrid cloud expertise.",
    "Specialized in triaging high-severity production issues — consistently deconstructing complex problems, coordinating cross-functional resolution, and driving incidents to closure.",
  ],
  link: { url: "https://www.ibm.com/", label: "ibm.com" },
  tags: ["Golang", "Kubernetes", "OpenShift", "Docker", "Python", "Rust", "Argo", "Tekton"],
};

/* ------------------------------------------------------------------ */
/*  IBM — Band 6                                                       */
/* ------------------------------------------------------------------ */
const IBMBand6: ExperienceProps = {
  companyName: "IBM",
  jobTitle: "Hybrid Cloud Software Engineer — Band 6",
  location: "Armonk, NY",
  startDate: "July 2021",
  endDate: "July 2023",
  highlights: [
    "Full-stack engineer for a multi-tenant hybrid cloud platform built on OpenShift, serving thousands of IBM engineers and enterprise clients worldwide.",
    "Built and maintained a React portal backed by a Node.js reverse proxy and Golang microservice architecture, delivering an intuitive interface for container orchestration and VM management.",
    "Developed Kubernetes operators with kubebuilder and operator-sdk to automate workload lifecycle management, including KubeVirt-based VM hosting for client environments.",
    "Designed and maintained CI/CD pipelines with Tekton and managed GitOps-driven deployments using Argo CD, ensuring zero-downtime releases across multi-cluster environments.",
    "Drove integration initiatives — onboarding partner teams into the platform portal, planning optimization sprints in response to customer feedback, and reducing median page load time by 40%.",
  ],
  link: { url: "https://www.ibm.com/", label: "ibm.com" },
  tags: [
    "React",
    "TypeScript",
    "Golang",
    "Kubernetes",
    "OpenShift",
    "Docker",
    "Tekton",
    "Argo",
    "KubeVirt",
    "Node.js",
  ],
};

/* ------------------------------------------------------------------ */
/*  Voterlabs                                                          */
/* ------------------------------------------------------------------ */
const Voterlabs: ExperienceProps = {
  companyName: "Voterlabs Inc.",
  jobTitle: "Full Stack Developer",
  location: "Branford, CT",
  startDate: "August 2020",
  endDate: "July 2021",
  highlights: [
    "Sole developer responsible for re-engineering and optimizing the client-facing API and Angular dashboard for a machine learning consumer analytics platform.",
    "Designed and deployed a distributed architecture comprising two Flask APIs with PostgreSQL, an Angular frontend, and dual Celery worker queues consuming from a Redis broker for large-scale batch processing.",
    "Established robust CI/CD pipelines with Jenkins, containerized the full stack in Docker, and deployed across AWS EC2 instances, cutting deployment time from hours to minutes.",
    "Navigated a sprawling codebase spanning Python, Java, and TypeScript as the sole engineer, developing deep proficiency in each while maintaining 50+ parameterized ML algorithms.",
  ],
  link: { url: "https://www.voterlabs.ai/", label: "voterlabs.ai" },
  tags: ["Python", "Java", "TypeScript", "Angular", "PostgreSQL", "Docker", "AWS", "Redis", "Celery"],
};

/* ------------------------------------------------------------------ */
/*  SPARK Business Academy                                             */
/* ------------------------------------------------------------------ */
const Spark: ExperienceProps = {
  companyName: "SPARK Business Academy",
  jobTitle: "Lead Software Engineer",
  location: "Remote",
  startDate: "July 2019",
  endDate: "April 2021",
  highlights: [
    "Built the company's entire technical foundation from scratch — replacing spreadsheets and Word documents with a full-stack platform that digitized all internal operations.",
    "Evolved the stack through two major versions: from a Pug-templated Node.js monolith to an Angular SPA backed by a refactored API, MySQL database, and Nginx reverse proxy — all containerized with Docker and deployed to Google Cloud via CI/CD.",
    "Transitioned responsibility by interviewing, hiring, and training a replacement developer, ensuring seamless continuity of the technical platform.",
  ],
  link: { url: "https://www.sparkbusinessacademy.com/", label: "sparkbusinessacademy.com" },
  tags: ["TypeScript", "Angular", "Node.js", "MySQL", "Docker", "Nginx", "Google Cloud"],
};

/* ------------------------------------------------------------------ */
/*  Copeland Media                                                     */
/* ------------------------------------------------------------------ */
const CopelandMedia: ExperienceProps = {
  companyName: "Copeland Media",
  jobTitle: "Full Stack Developer",
  location: "Remote",
  startDate: "July 2020",
  endDate: "October 2020",
  highlights: [
    "Partnered with NFL player Brandon Copeland to design and deploy a professional web platform showcasing his personal brand, speaking engagements, and youth financial education programs.",
    "Delivered a custom Angular frontend, Node.js API, and PostgreSQL database — containerized with Docker, proxied through Nginx, and served on a Google Cloud VM with SSL via Let's Encrypt.",
    "Copeland was featured in Forbes 30 Under 30 shortly after the site launched, drawing significant traffic to the new platform.",
  ],
  link: { url: "https://www.brandoncopeland.com/", label: "brandoncopeland.com" },
  tags: ["TypeScript", "Angular", "Node.js", "PostgreSQL", "Docker", "Nginx", "Google Cloud"],
};

/* ------------------------------------------------------------------ */
/*  Research Assistant                                                  */
/* ------------------------------------------------------------------ */
const ResearchAssistant: ExperienceProps = {
  companyName: "Marist University — Verifikado Research",
  jobTitle: "Student Researcher & Developer",
  location: "Poughkeepsie, NY",
  startDate: "August 2019",
  endDate: "May 2020",
  highlights: [
    "Developed NLP and sentiment analysis algorithms to detect misleading language patterns in digitally published news articles, contributing to Verifikado-funded disinformation research.",
    "Built a full-stack research interface (Bootstrap frontend, Flask API, PostgreSQL) to surface algorithmic results and batch-process scraped article data — containerized and deployed on Google Cloud.",
  ],
  tags: ["Python", "NLP", "Flask", "PostgreSQL", "Docker", "Google Cloud"],
};

/* ------------------------------------------------------------------ */
/*  Senior Capping Project                                             */
/* ------------------------------------------------------------------ */
const CappingProject: ExperienceProps = {
  companyName: "Marist University — Senior Capstone",
  jobTitle: "Web Developer",
  location: "Poughkeepsie, NY",
  startDate: "August 2019",
  endDate: "December 2019",
  highlights: [
    "Led a five-person agile team to deliver archival record-management software for the Greene County Historical Society, digitizing visitor logs and research workflows for the Vedder Research Library.",
    "Engineered a full-stack application (Bootstrap frontend, Node.js API, PostgreSQL) containerized in Docker, designed to run on the library's specialized OS environment.",
    "Authored comprehensive technical documentation that enabled successor capstone teams to continue and extend the project with additional features.",
  ],
  tags: ["JavaScript", "Node.js", "PostgreSQL", "Docker", "Nginx", "Google Cloud"],
};

/* ------------------------------------------------------------------ */
/*  Marist Web Services                                                */
/* ------------------------------------------------------------------ */
const MaristWebServices: ExperienceProps = {
  companyName: "Marist University — Web Services",
  jobTitle: "Web Developer",
  location: "Poughkeepsie, NY",
  startDate: "December 2017",
  endDate: "May 2019",
  highlights: [
    "Contributed to the migration and relaunch of marist.edu on a new Liferay CMS, working within a team of 7–15 developers to deliver a modern, content-managed university web presence.",
    "Developed campus utility applications for facilities management and prototyped an Alexa Skill with OAuth integration to the university's CAS single sign-on system.",
  ],
  link: { url: "https://www.marist.edu/", label: "marist.edu" },
  tags: ["JavaScript", "Node.js", "React", "HTML", "CSS"],
};

/* ------------------------------------------------------------------ */
/*  Zentific                                                           */
/* ------------------------------------------------------------------ */
const Zentific: ExperienceProps = {
  companyName: "TBNG Zentific",
  jobTitle: "UX/UI Developer Intern",
  location: "Milford, CT",
  startDate: "June 2017",
  endDate: "August 2017",
  highlights: [
    "First professional engineering role — built React components and pages for a cloud security dashboard protecting RPC protocols.",
    "Established foundational development practices including Git workflows, agile communication, and code review processes under close mentorship.",
  ],
  tags: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
};

/* ------------------------------------------------------------------ */
/*  Ordered export (reverse-chronological)                             */
/* ------------------------------------------------------------------ */
export const EXPERIENCE_LIST: ExperienceProps[] = [
  IBMBand7,
  IBMBand6,
  Voterlabs,
  Spark,
  CopelandMedia,
  ResearchAssistant,
  CappingProject,
  MaristWebServices,
  Zentific,
];
