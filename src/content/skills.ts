// Seed/fallback data for the Skills section. Editable in the admin panel (/admin/skills).
// Icons are stored as lucide-react icon names (see src/lib/icons.ts).
export type SkillItem = { name: string; description: string; icon: string };
export type SkillGroup = { title: string; description: string; icon: string; skills: SkillItem[] };
export type ConceptItem = { name: string; icon: string; color: string };

export const skillGroupsSeed: SkillGroup[] = [
  {
    title: "Frontend Development",
    description:
      "Building clean, responsive, and interactive user interfaces for modern web applications.",
    icon: "MonitorSmartphone",

    skills: [
      {
        name: "HTML5",
        description:
          "Semantic markup, forms, page structure, accessibility fundamentals, and reusable content structure.",
        icon: "Layout",
      },
      {
        name: "CSS3",
        description:
          "Responsive layouts using Flexbox, Grid, media queries, animations, and modern styling techniques.",
        icon: "Palette",
      },
      {
        name: "JavaScript",
        description:
          "DOM manipulation, events, functions, arrays, objects, ES6+ concepts, and asynchronous programming fundamentals.",
        icon: "Braces",
      },
      {
        name: "React",
        description:
          "Component-based interfaces, reusable UI patterns, state handling, props, and frontend application development.",
        icon: "Code2",
      },
    ],
  },

  {
    title: "Programming & Java",
    description:
      "Developing programming fundamentals through Java, OOP concepts, data structures, and regular problem-solving practice.",
    icon: "Coffee",

    skills: [
      {
        name: "Core Java",
        description:
          "Java syntax, classes, methods, collections, exception handling, and application logic.",
        icon: "Coffee",
      },
      {
        name: "Object-Oriented Programming",
        description:
          "Practical understanding of encapsulation, inheritance, polymorphism, and abstraction.",
        icon: "Boxes",
      },
      {
        name: "Data Structures",
        description:
          "Understanding and practicing arrays, strings, collections, stacks, queues, and fundamental algorithms.",
        icon: "Layers3",
      },
    ],
  },

  // {
  //   title: "Mobile Development",
  //   description:
  //     "Building and exploring cross-platform mobile applications through project-based development.",
  //   icon: Smartphone,

  //   skills: [
  //     {
  //       name: "React Native",
  //       description:
  //         "Building reusable mobile interfaces and cross-platform application screens using React Native.",
  //       icon: Smartphone,
  //     },
  //     {
  //       name: "Expo",
  //       description:
  //         "Developing, testing, and managing React Native applications using the Expo development workflow.",
  //       icon: Zap,
  //     },
  //     {
  //       name: "TypeScript",
  //       description:
  //         "Using typed JavaScript for clearer data structures, reusable components, and maintainable application code.",
  //       icon: Braces,
  //     },
  //   ],
  // },

  // {
  //   title: "Database & Development Tools",
  //   description:
  //     "Working with local storage, cloud services, version control, and application development tools.",
  //   icon: Database,

  //   skills: [
  //     {
  //       name: "SQLite",
  //       description:
  //         "Local structured data storage for mobile applications and offline-oriented application features.",
  //       icon: Database,
  //     },
  //     {
  //       name: "Supabase & Firebase",
  //       description:
  //         "Experience using backend services for authentication, data storage, and application integration.",
  //       icon: Cloud,
  //     },
  //     {
  //       name: "Git & GitHub",
  //       description:
  //         "Version control, repository management, commits, branches, and collaborative development workflows.",
  //       icon: Github,
  //     },
  //   ],
  // },
];

export const conceptsSeed: ConceptItem[] = [
  {
    name: "HTML5",
    icon: "Layout",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: "Palette",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: "Braces",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: "Code2",
    color: "#3178C6",
  },
  {
    name: "React",
    icon: "Code2",
    color: "#61DAFB",
  },
  {
    name: "React Native",
    icon: "Smartphone",
    color: "#61DAFB",
  },
  {
    name: "Expo",
    icon: "Smartphone",
    color: "#FFFFFF",
  },
  {
    name: "Core Java",
    icon: "Coffee",
    color: "#F89820",
  },
  {
    name: "OOP",
    icon: "Boxes",
    color: "#6DB33F",
  },
  {
    name: "Responsive Design",
    icon: "Globe2",
    color: "#4CAF50",
  },
  {
    name: "Flexbox",
    icon: "Layers3",
    color: "#61DAFB",
  },
  {
    name: "CSS Grid",
    icon: "Layout",
    color: "#00B4D8",
  },
  {
    name: "DOM",
    icon: "TerminalSquare",
    color: "#9B59B6",
  },
  {
    name: "SQLite",
    icon: "Database",
    color: "#003B57",
  },
  {
    name: "Supabase",
    icon: "Database",
    color: "#3ECF8E",
  },
  {
    name: "Firebase",
    icon: "Cloud",
    color: "#FFCA28",
  },
  {
    name: "Java Collections",
    icon: "Database",
    color: "#4479A1",
  },
  {
    name: "Exception Handling",
    icon: "ShieldCheck",
    color: "#E74C3C",
  },
  {
    name: "Encapsulation",
    icon: "ShieldCheck",
    color: "#3498DB",
  },
  {
    name: "Inheritance",
    icon: "Network",
    color: "#2ECC71",
  },
  {
    name: "Polymorphism",
    icon: "Workflow",
    color: "#E67E22",
  },
  {
    name: "Abstraction",
    icon: "Boxes",
    color: "#9B59B6",
  },
  {
    name: "Git & GitHub",
    icon: "Github",
    color: "#F05032",
  },
  {
    name: "Problem Solving",
    icon: "Brain",
    color: "#E74C3C",
  },
  {
    name: "Data Structures",
    icon: "Layers3",
    color: "#1ABC9C",
  },
  {
    name: "Algorithms",
    icon: "Code2",
    color: "#FE6652",
  },
  {
    name: "REST API Concepts",
    icon: "Server",
    color: "#00B4D8",
  },
];
