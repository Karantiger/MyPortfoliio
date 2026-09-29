
// Seed/fallback data for the Education section. Editable in the admin panel (/admin/education).
export type EducationItem = {
  type: string; institution: string; degree: string; period: string; status: string; scoreLabel: string; score: string; logo: string; detail: string; highlights: string[];
};

export const educationSeed: EducationItem[] = [
  {
    type: "Undergraduate",
    institution: "Indrashil University",
    degree: "Bachelor of Technology in Computer Science",
    period: "2023 — June 2027",
    status: "Currently Pursuing",
    scoreLabel: "CGPA",
    score: "8.24 / 10",
    logo: "/iu.jpg",
    detail:
      "Currently pursuing a Bachelor of Technology in Computer Science, building a strong foundation in programming, software development, databases, and core computer science concepts.",
    highlights: ["Dean's List", "Academic Excellence"],
  },
  {
    type: "Senior Secondary",
    institution: "Radhakrishna Academy",
    degree: "Senior School — PCM",
    period: "2022",
    status: "Completed",
    scoreLabel: "Percentage",
    score: "65.20%",
    logo: "/rk.jpg",
    detail:
      "Completed Senior Secondary education with Physics, Chemistry, and Mathematics, developing analytical thinking, mathematical reasoning, and problem-solving skills.",
    highlights: ["Science Stream", "Mathematics Focus"],
  },
  {
    type: "Secondary",
    institution: "Manasthali Education Centre",
    degree: "Secondary School",
    period: "2020",
    status: "Completed",
    scoreLabel: "Percentage",
    score: "72.00%",
    logo: "/manas.png",
    detail:
      "Completed Secondary School education with a focus on core academic subjects and foundational learning.",
    highlights: ["All Subjects", "Foundation"],
  },
];
