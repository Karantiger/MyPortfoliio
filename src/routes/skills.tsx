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
  type LucideIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { skillGroupsSeed as skillGroups, conceptsSeed as concepts } from "@/content/skills";

const iconMap: Record<string, LucideIcon> = {
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
};

const getIcon = (name: string): LucideIcon => iconMap[name] ?? Code2;

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
            const GroupIcon = getIcon(group.icon);

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
                    const Icon = getIcon(skill.icon);

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
                          hover:bg-primary/3
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
              const Icon = getIcon(concept.icon);

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