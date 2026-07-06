import { createFileRoute } from "@tanstack/react-router";
import {
  Braces,
  Brain,
  Code2,
  Coffee,
  Database,
  Github,
  Globe2,
  Layers3,
  Layout,
  MonitorSmartphone,
  Network,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TerminalSquare,
  Zap,
  Boxes,
  Cloud,
  Workflow,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      {
        title: "Skills & Tech Stack - Karan Kumar Bind",
      },
      {
        name: "description",
        content:
          "Technical skills of Karan Kumar Bind including HTML, CSS, JavaScript, TypeScript, React, React Native, Expo, Core Java, SQLite, Supabase, and Firebase.",
      },
      {
        property: "og:title",
        content: "Skills & Tech Stack - Karan Kumar Bind",
      },
      {
        property: "og:description",
        content:
          "Frontend development, mobile application development, Java programming, databases, and development tools.",
      },
    ],
  }),

  component: SkillsPage,
});

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building clean, responsive, and interactive user interfaces for modern web applications.",
    icon: MonitorSmartphone,

    skills: [
      {
        name: "HTML5",
        description:
          "Semantic markup, forms, page structure, accessibility fundamentals, and reusable content structure.",
        icon: Layout,
      },
      {
        name: "CSS3",
        description:
          "Responsive layouts using Flexbox, Grid, media queries, animations, and modern styling techniques.",
        icon: Palette,
      },
      {
        name: "JavaScript",
        description:
          "DOM manipulation, events, functions, arrays, objects, ES6+ concepts, and asynchronous programming fundamentals.",
        icon: Braces,
      },
      {
        name: "React",
        description:
          "Component-based interfaces, reusable UI patterns, state handling, props, and frontend application development.",
        icon: Code2,
      },
    ],
  },

  {
    title: "Programming & Java",
    description:
      "Developing programming fundamentals through Java, OOP concepts, data structures, and regular problem-solving practice.",
    icon: Coffee,

    skills: [
      {
        name: "Core Java",
        description:
          "Java syntax, classes, methods, collections, exception handling, and application logic.",
        icon: Coffee,
      },
      {
        name: "Object-Oriented Programming",
        description:
          "Practical understanding of encapsulation, inheritance, polymorphism, and abstraction.",
        icon: Boxes,
      },
      {
        name: "Data Structures",
        description:
          "Understanding and practicing arrays, strings, collections, stacks, queues, and fundamental algorithms.",
        icon: Layers3,
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

const concepts = [
  {
    name: "HTML5",
    icon: Layout,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: Palette,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: Braces,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: Code2,
    color: "#3178C6",
  },
  {
    name: "React",
    icon: Code2,
    color: "#61DAFB",
  },
  {
    name: "React Native",
    icon: Smartphone,
    color: "#61DAFB",
  },
  {
    name: "Expo",
    icon: Smartphone,
    color: "#FFFFFF",
  },
  {
    name: "Core Java",
    icon: Coffee,
    color: "#F89820",
  },
  {
    name: "OOP",
    icon: Boxes,
    color: "#6DB33F",
  },
  {
    name: "Responsive Design",
    icon: Globe2,
    color: "#4CAF50",
  },
  {
    name: "Flexbox",
    icon: Layers3,
    color: "#61DAFB",
  },
  {
    name: "CSS Grid",
    icon: Layout,
    color: "#00B4D8",
  },
  {
    name: "DOM",
    icon: TerminalSquare,
    color: "#9B59B6",
  },
  {
    name: "SQLite",
    icon: Database,
    color: "#003B57",
  },
  {
    name: "Supabase",
    icon: Database,
    color: "#3ECF8E",
  },
  {
    name: "Firebase",
    icon: Cloud,
    color: "#FFCA28",
  },
  {
    name: "Java Collections",
    icon: Database,
    color: "#4479A1",
  },
  {
    name: "Exception Handling",
    icon: ShieldCheck,
    color: "#E74C3C",
  },
  {
    name: "Encapsulation",
    icon: ShieldCheck,
    color: "#3498DB",
  },
  {
    name: "Inheritance",
    icon: Network,
    color: "#2ECC71",
  },
  {
    name: "Polymorphism",
    icon: Workflow,
    color: "#E67E22",
  },
  {
    name: "Abstraction",
    icon: Boxes,
    color: "#9B59B6",
  },
  {
    name: "Git & GitHub",
    icon: Github,
    color: "#F05032",
  },
  {
    name: "Problem Solving",
    icon: Brain,
    color: "#E74C3C",
  },
  {
    name: "Data Structures",
    icon: Layers3,
    color: "#1ABC9C",
  },
  {
    name: "Algorithms",
    icon: Code2,
    color: "#FE6652",
  },
  {
    name: "REST API Concepts",
    icon: Server,
    color: "#00B4D8",
  },
];

function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <PageHeader
        eyebrow="Skills"
        title="Skills & Technologies"
        description="Technologies, programming languages, tools, and development concepts I have learned and applied through projects, practice, and technical training."
      />

      {/* PRIMARY SKILLS */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-12 lg:pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <article
                key={group.title}
                className="
                  group/card
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:shadow-xl
                  sm:p-7
                "
              >
                {/* SUBTLE DECORATION */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-primary/5
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover/card:bg-primary/10
                  "
                />

                {/* GROUP HEADER */}
                <div className="relative flex items-start gap-4 border-b border-border pb-5">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-primary/20
                      bg-primary/10
                      text-primary
                      transition-all
                      duration-300
                      group-hover/card:bg-primary
                      group-hover/card:text-primary-foreground
                    "
                  >
                    <GroupIcon className="h-6 w-6" />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold sm:text-xl">
                      {group.title}
                    </h2>

                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* SKILL ITEMS */}
                <div className="relative mt-5 space-y-3">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="
                          group/skill
                          flex
                          items-start
                          gap-4
                          rounded-xl
                          border
                          border-border
                          bg-background/70
                          p-4
                          transition-all
                          duration-300
                          hover:border-primary/40
                          hover:bg-primary/[0.03]
                        "
                      >
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-primary/10
                            text-primary
                            transition-all
                            duration-300
                            group-hover/skill:bg-primary
                            group-hover/skill:text-primary-foreground
                          "
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <h3
                            className="
                              font-semibold
                              transition-colors
                              group-hover/skill:text-primary
                            "
                          >
                            {skill.name}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* KNOWLEDGE AREAS */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-12 lg:pb-24">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-surface
            p-5
            sm:p-7
            lg:p-9
          "
        >
          {/* BACKGROUND DECORATION */}
          <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

          {/* HEADER */}
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <Sparkles className="h-5 w-5" />
              </span>

              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Knowledge Areas
                </span>

                <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                  Concepts & Fundamentals
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Programming concepts, tools, and development fundamentals
                  learned through academic study, technical training,
                  projects, and regular practice.
                </p>
              </div>
            </div>
          </div>

          {/* CONCEPTS */}
          <div className="relative mt-7 flex flex-wrap gap-2.5">
            {concepts.map((concept) => {
              const Icon = concept.icon;

              return (
                <div
                  key={concept.name}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2.5
                    rounded-full
                    border
                    border-border
                    bg-background
                    px-3.5
                    py-2
                    text-xs
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-primary/50
                    hover:shadow-sm
                    sm:text-sm
                  "
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-surface
                    "
                    style={{
                      color: concept.color,
                    }}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>

                  <span className="transition-colors group-hover:text-primary">
                    {concept.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* LEARNING STATUS */}
          <div className="relative mt-8 border-t border-border pt-6">
            <div
              className="
                flex
                flex-col
                gap-4
                rounded-xl
                border
                border-primary/15
                bg-primary/5
                p-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary/10
                    text-primary
                  "
                >
                  <Zap className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-sm font-medium">
                    Continuous Learning
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Strengthening development skills through projects,
                    practice, and real-world problem solving.
                  </p>
                </div>
              </div>

              <span
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-primary/20
                  bg-background
                  px-3
                  py-1.5
                  text-xs
                  text-primary
                "
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

                Currently Learning
              </span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}