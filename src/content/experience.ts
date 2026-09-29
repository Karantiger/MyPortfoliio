// Seed/fallback data for the Experience section. Editable in the admin panel (/admin/experience).
export type ExperienceItem = {
  type: string; role: string; company: string; logo: string; period: string; location: string; description: string; points: string[]; technologies: string[];
};

export const experienceSeed: ExperienceItem[] = [
  {
    type: "Internship",

    role: "Java Full Stack Intern",

    company: "NDVTechsys Solution",

    logo: "/ndv.jpg",

    period: "May 2025 — July 2025",

    location: "Remote",

    description:
      "Completed a remote Java Full Stack Development internship, gaining exposure to web application development, REST API concepts, frontend-backend integration, and database management.",

    points: [
      "Worked on web application development concepts using Java, Spring Boot, and MySQL.",
      "Learned RESTful API structure and CRUD operations for application data management.",
      "Participated in development discussions, Agile workflows, and peer code reviews.",
      "Gained exposure to backend development, frontend integration, and relational database management.",
      "Completed technical assignments and project-related development tasks.",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "CRUD",
      "Git",
      "Agile",
    ],
  },

  {
    type: "Work Experience",

    role: "Data Entry Operator",

    company: "World Wide Journals",

    logo: "/wwj.png",

    period: "April 2026 — June 2026",

    location: "Paldi, Ahmedabad",

    description:
      "Worked as a Data Entry Operator for three months, gaining practical experience in accurate data processing, record management, document handling, and maintaining organized digital information.",

    points: [
      "Entered and updated information accurately in digital records and internal systems.",
      "Reviewed data for accuracy and corrected incomplete or inconsistent entries.",
      "Organized and maintained records for efficient access and management.",
      "Completed documentation and data processing tasks within assigned deadlines.",
      "Maintained accuracy, attention to detail, and confidentiality while handling records.",
    ],

    technologies: [
      "Data Entry",
      "MS Excel",
      "MS Word",
      "Documentation",
      "Data Management",
    ],
  },
];
