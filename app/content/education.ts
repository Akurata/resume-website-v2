/**
 * Education data for Alex Kurata's resume site.
 */

export interface EducationProps {
  school: string;
  degree: string;
  location: string;
  graduationYear: string;
  details: string[];
}

export const EDUCATION: EducationProps[] = [
  {
    school: "Marist University",
    degree: "Bachelor of Science in Computer Science",
    location: "Poughkeepsie, NY",
    graduationYear: "2020",
    details: [
      "Minor in Information Technology",
      "Minor in Information Systems",
    ],
  },
];
