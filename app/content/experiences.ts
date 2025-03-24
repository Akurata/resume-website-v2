import type {Skill} from "app/content/skills";

import VoterLabsLogo from "app/content/logos/voterlabslogo.png";
import CopelandMediaLogo from "app/content/logos/brandonlogo.png";
import MaristLogo from "app/content/logos/maristlogo.png";
import GCHSLogo from "app/content/logos/gchslogo.png";
import SparkLogo from "app/content/logos/sparklogo.png";
import ZentificLogo from "app/content/logos/zentificlogo.png";

interface ExperienceProps {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string[];
  link?: ExpLink;
  logo?: string;
  tags: Skill[];
}

interface ExpLink {
  url: string;
  label: string;
}

const Voterlabs: ExperienceProps = {
  companyName: "Voterlabs Inc",
  jobTitle: "Full Stack Developer",
  startDate: "August 2020",
  endDate: "July 2021",
  description: [
    `
    I was originally hired by Voterlabs via UpWork to make a customer-facing API
    and Angular frontend for interacting with their flagship data enhancement service.
    Over time I began working on and engineering various components of their rather large software stack.
    `,
    `
    Voterlabs is a newer company, that created a data enhancement service that
    takes ordinary customer/user data from clients, and through a series of
    microservices: serializes, cleans, and formats their data; then adds
    additional consumer information from their database; and runs machine
    learning models to not just identify data entry errors but add additional
    psychographic identifiers.
    `,
    `
    After starting at Voterlabs I found out I was the only developer on staff.
    The challenge of this project became very exciting to me, it was a lot of
    pressure to learn about so much of a codebase while creating the most complex
    web service I've worked on.
    `,
    `
    This project required me to not only cement my understanding of the codebase but my core understanding of the languages used. This project pushed me out of my comfort zone with most of the languages. Where I usually like making a NodeJS server, or an architecture that relied on around one central location. But now to
    create something lightweight, dynamic, and high performing as the only developer
    made me cautious about my best practices.
    `,
  ],
  logo: VoterLabsLogo,
  link: {
    url: "https://www.voterlabs.ai/",
    label: "voterlabs.ai",
  },
  tags: [
    "Python",
    "Java",
    "TypeScript",
    "HTML",
    "CSS/SCSS",
    "Angular",
    "Postgres",
    "Docker",
    "Nginx",
    "AWS",
  ],
};

const CopelandMedia: ExperienceProps = {
  companyName: "Copeland Media",
  jobTitle: "Full Stack Developer",
  startDate: "July 2020",
  endDate: "October 2020",
  description: [
    `
    I was approached by two friends of mine, a grapic designer and project
    manager that I've previously worked with. They asked for some help
    consulting with a client, possibly designing something.
    After learning that his client is Brandon Copeland, a Patriot's
    player and offseason Penn State professor, I was elated at the opportunity
    to work for him.
    `,
    `
    We met with Brandon and his brother, Chad where they described a
    platform for Brandon to publish e-courses, interact with users, and market
    speaking engagements. We assessed the technical ambitions of a new product
    that they want to make and laid out the limitations and requirements for
    such a platform.
    `,
    `
    We took note of the large scope of the project, so we carefully began
    the iterative process of documenting and designing an appropriate scale
    to cost/benefit analysis. To proactively begin working up to that
    software goal that the brothers had set, my team began redesigning
    and upgrading Brandon's website and social media.
    `,
    `
    Over the next few months, I worked on setting up the proper infrastructure
    to guarentee the website's success with my project manager, while the graphic
    designer provided us with art assets. We regularly met with Brandon and Chad
    to continue to imporove on the frontend design.
    I deployed this site with my usual recipe:
    Take an even blend of docker containers (1 part API, 1 part DB),
    beat in 1 reverse proxy using Nginx, season with LetsEncrypt to taste,
    and served on a Google Cloud VM.
    `,
    `
    Shortly after I was able to get Brandon's website deployed, he went on to
    be featured in the Forbes 40 under 40.
    `,
  ],
  logo: CopelandMediaLogo,
  link: {
    url: "https://www.brandoncopeland.com/",
    label: "brandoncopeland.com",
  },
  tags: [
    "TypeScript",
    "NodeJS",
    "HTML",
    "CSS/SCSS",
    "Angular",
    "Postgres",
    "Docker",
    "Nginx",
    "Google Cloud",
  ],
};

const ResearchAssistant: ExperienceProps = {
  companyName: "Research Assistant",
  jobTitle: "Researcher and Developer",
  startDate: "August 2019",
  endDate: "May 2020",
  description: [
    `
    In college, I tried to take the opportunity to apply for a research grant.
    I didn't receive the grant, but a professor I had sought help with on drafting
    my proposal had offered me a position as a research assistant and developer
    for a similar project he had been designing.
    `,
    `
    The project as a whole is one of the more badass things I've worked on.
    By using natural language processing and semantic analysis algorithms,
    parts of speech can be categorized and even abstracted into easily
    comparable data structures. From this we can compare pieces of text to
    other like sentiments, building a means for identifying intentionally
    misleading or otherwise deceptive statements. We used these algorithmic
    concepts to create models from digitally published news articles, in an
    attempt to find "fake news".
    `,
    `
    At the time, my knowledge of the subject matter was barely surface level.
    It was an extraordinary experience to dive into all of the research to try
    and wrap my head around what was even being accomplished. To feel so stumped
    at times was honestly exciting. But with time, and a lot of help from my professor,
    it started to click.
    `,
    `
    I was able to contribute to the
    project by creating a full-stack interface for interacting with this pile
    of algorithms as a service. I stood up a Flask API and a custom bootstrap
    frontend. The API had to host various modules for strategically invoking different
    algorithms we wrote and to automatically batch process scraped news articles.
    The tricky part was configuring a Postgres database to reliably handle a
    lot of transactions. All of this was containerized in Docker and deployed on
    Google Cloud.
    `,
    `
    This project meant a lot to me. It was the first time I felt confident
    about my abilities to make a solid product.
    It pushed me to do my research and ultimately showing me I have a lot to learn.
    `,
  ],
  logo: MaristLogo,
  tags: [
    "Python",
    "JavaScript",
    "HTML",
    "CSS/SCSS",
    "Postgres",
    "Docker",
    "Google Cloud",
  ],
};

const CappingProject: ExperienceProps = {
  companyName: "Senior Capping Project",
  jobTitle: "Web Developer",
  startDate: "August 2019",
  endDate: "December 2019",
  description: [
    `
    For my senior capstone project, I worked on a team of 5 with one project manager, one IT student, and three programmers. Our project was creating a full-stack application for the Greene County Historical Society to digitally log visits, and provide a set of tools for the head archivist to personally interact with the research notes/logs from visitors.
    `,
    `
    What we expected to be a rather daunting project of this size on a short timeframe, turned out fantastic. We built a custom Bootstrap frontend (with mobile compatibility), NodeJS API, and Postgres database, all containerized in docker. The main challenge of the project was the designated runtime environment. We had to take careful considerations with our dependency choices to circumvent the limitations of the specialized OS that our containers had to run on.
    `,
    `
    We ultimately created a nice piece of software that I am incredibly proud of. I've also been told that rising capping groups have been using the documentation that we left behind to continue the project, actually implementing many features we had to cut for time.
    `,
  ],
  logo: GCHSLogo,
  tags: [
    "JavaScript",
    "NodeJS",
    "HTML",
    "CSS/SCSS",
    "Postgres",
    "Docker",
    "Nginx",
    "Google Cloud",
  ],
};

const Spark: ExperienceProps = {
  companyName: "SPARK Business Academy",
  jobTitle: "Lead Software Engineer",
  startDate: "July 2019",
  endDate: "April 2021",
  description: [
    `
    SPARK is a company focused on teaching financial literacy to K-12. Through afterschool and off-season classes, they teach awesome financial concepts. Working for SPARK was an overall joy (not just because I learned about money from adolescent curriculums) but because I never learned financial literacy in school. When I was first hired at SPARK, they were a late startup with little to no technical foundation, and their website was a performance nightmare.
    `,
    `
    I was originally brought on to SPARK to create a new website and help them establish a technical infrastructure. At the time the company was using google spreadsheets and word documents to keep track of their user data. After a very intense Summer of agile work, I stood up a new frontend website, with a NodeJS backend API for securely managing all of their internal operations and a MySQL database server.
    `,
    `
    However, I stayed on after this to continue developing more features for their platform and evolving the technical stack that I stood up for them. In the first iteration, the frontend was written in pug templates and compiled serverside per request. I also naively ran everything through one bash script on a google cloud VM. When I think back about many of these design decisions, it makes me glad to think of how far I've come.
    `,
    `
    After about a year with this old design, I decided to move the project to a new major version and take a much more reliable approach to this stack. This time around I opted for an Angular frontend, refactored the NodeJS API, all served behind an Nginx proxy, with the same MySQL schema. I bundled all of these configurations in docker and deployed them to google cloud using a CICD pipeline.
    `,
    `
    As my focus shifted, I stayed with the company to interview and train a replacement developer who has done fantastic work with SPARK.
    `,
  ],
  logo: SparkLogo,
  link: {
    url: "https://www.sparkbusinessacademy.com/",
    label: "sparkbusinessacademy.com",
  },
  tags: [
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "HTML",
    "CSS/SCSS",
    "Angular",
    "MySQL",
    "Docker",
    "Nginx",
    "Google Cloud",
  ],
};

const MaristWebServices: ExperienceProps = {
  companyName: "Marist College Web Services",
  jobTitle: "Web Developer",
  startDate: "December 2017",
  endDate: "May 2019",
  description: [
    `
    After my Summer internship with Zentific wrapped up, I was able to land
    an interview in my college's Web Services department. Contrast to my
    experiences with Zentific, I was working on a team that fluctuated in size,
    between 7 and 15 people.
    `,
    `
    One of the nice things about working for Marist was the variety in the
    projects. I contributed bits and pieces to many different projects and it
    was always exciting to see what everyone was working on. I got the chance
    to work on several campus utility apps, mostly for staff to micromanage
    various extraneous tools around campus like fire extinguishers, lights
    on the football field, or sprinklers. I designed an Alexa Skill with a neat
    OAuth hook back to the college's CAS, but didn't get the chance to
    implement it.
    `,
    `
    The bulk of the work revolved around the college's website. My team worked on migrating all of the content from the previous iteration of the website to a new Liferay server, which was supposed to make it easier for widespread content management with the various clubs, faculty, and staff. We also worked on responding to tickets for abnormalities and bug fixes.
    `,
    `
    Getting to contribute to a larger project like the Marist.edu website was such an amazing opportunity, I am incredibly proud of every little addition I was able to make.
    `,
  ],
  logo: MaristLogo,
  link: {
    url: "https://www.marist.edu/",
    label: "marist.edu",
  },
  tags: ["JavaScript", "NodeJS", "HTML", "CSS/SCSS", "React"],
};

const Zentific: ExperienceProps = {
  companyName: "TBNG Zentific",
  jobTitle: "Intern UX/UI Developer",
  startDate: "June 2017",
  endDate: "August 2017",
  description: [
    `
    My first job working in a professional environment was with TBNG Zentific in my hometown. After just finishing my freshmen year at college and making the dean's list, I wanted to work on something more significant than classwork.
    `,
    `
    The company is a software group designing security measures for RPC protocols. My job was to create components and pages for their dashboard interface. This was my first hands-on experience with NodeJS, and it very quickly became my favorite runtime to use. The frontend was implemented in React, which helped me get ahead of the JavaScript framework learning curve.
    `,
    `
    Zentific was still very new at the time I worked there, so I was their first and only intern for that Summer. The mentoring I had from Russ and Matt was extraordinarily helpful for establishing a lot of the core developer skills (eg. Git, Workflow management, Agile communication, etc). Although my time with Zentific was very short, I found it to be an invaluable stepping stone.
    `,
  ],
  logo: ZentificLogo,
  tags: ["JavaScript", "NodeJS", "HTML", "CSS/SCSS", "React"],
};

export const EXPERIENCE_LIST: ExperienceProps[] = [
  Voterlabs,
  CopelandMedia,
  ResearchAssistant,
  CappingProject,
  Spark,
  MaristWebServices,
  Zentific,
];
