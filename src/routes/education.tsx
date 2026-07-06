import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  CalendarDays,
  BookOpen,
  Award,
  Code2,
  Database,
  Network,
  MonitorCog,
  Braces,
  Layers3,
  Globe2,
  Boxes,
  BrainCircuit,
  Coffee,
  Laptop,
  Sparkles,
  Star,
  Clock,
  Target,
  Trophy,
  Zap,
  ChevronRight,
  Heart,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      {
        title: "Education - Karan Kumar Bind",
      },
      {
        name: "description",
        content:
          "Academic background and educational journey of Karan Kumar Bind, currently pursuing a B.Tech in Computer Science.",
      },
      {
        property: "og:title",
        content: "Education - Karan Kumar Bind",
      },
      {
        property: "og:description",
        content:
          "B.Tech in Computer Science, academic background, and relevant coursework.",
      },
    ],
  }),

  component: EducationPage,
});

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
};

const education = [
  {
    type: "Undergraduate",
    institution: "Indrashil University",
    degree: "Bachelor of Technology in Computer Science",
    period: "2023 — June 2027",
    status: "Currently Pursuing",
    scoreLabel: "CGPA",
    score: "8.35 / 10",
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

const coursework = [
  { name: "Data Structures & Algorithms", icon: Layers3 },
  { name: "Object-Oriented Programming", icon: Braces },
  { name: "Database Management Systems", icon: Database },
  { name: "Operating Systems", icon: MonitorCog },
  { name: "Computer Networks", icon: Network },
  { name: "Software Engineering", icon: Code2 },
  { name: "Web Development", icon: Globe2 },
  { name: "Java Programming", icon: Coffee },
];

const academicFocus = [
  { name: "Core Java", icon: Coffee },
  { name: "Object-Oriented Programming", icon: Boxes },
  { name: "Data Structures", icon: Network },
  { name: "Database Management", icon: Database },
  { name: "Problem Solving", icon: BrainCircuit },
  { name: "Web Development", icon: Code2 },
  { name: "Software Development", icon: Laptop },
];

function EducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      <PageHeader
        eyebrow="Education"
        title="My learning journey"
        description="My academic journey and the educational foundation that continues to shape my growth as a software developer."
      />


      {/* EDUCATION TIMELINE */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-12">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent sm:block" />

          <div className="space-y-10 sm:space-y-12">
            {education.map((item, index) => (
              <article
                key={`${item.degree}-${item.institution}`}
                className="relative sm:pl-16 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-0 z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-primary bg-background sm:flex">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    <GraduationCap className="h-5 w-5 text-primary relative" />
                  </div>
                </div>

                {/* Education Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Card Header */}
                  <div className="relative border-b border-border/50 p-5 sm:p-7">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      {/* Logo + Info */}
                      <div className="flex items-start gap-4 sm:gap-5">
                        {/* Institution Logo */}
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-background/50 p-1 sm:h-20 sm:w-20">
                          <img
                            src={item.logo}
                            alt={`${item.institution} logo`}
                            loading="lazy"
                            className="h-full w-full rounded-lg object-contain"
                          />
                        </div>

                        {/* Education Info */}
                        <div className="min-w-0">
                          {/* Type Badge */}
                          <div className="mb-2 flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                              <BookOpen className="h-3.5 w-3.5 text-primary" />
                            </span>
                            <span className="text-xs font-medium uppercase tracking-wider text-primary">
                              {item.type}
                            </span>
                            {item.status === "Currently Pursuing" && (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-0.5 text-[10px] text-green-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>

                          {/* Degree */}
                          <h2 className="text-xl font-bold sm:text-2xl group-hover:text-primary transition-colors">
                            {item.degree}
                          </h2>

                          {/* Institution */}
                          <p className="mt-2 text-sm font-medium text-primary sm:text-base">
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="relative p-5 sm:p-7">
                    {/* Description */}
                    <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {item.detail}
                    </p>

                    {/* Score + Status */}
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      {/* Score */}
                      <div className="group/stat flex items-center gap-4 rounded-xl border border-border/50 bg-background/50 p-4 transition-all hover:border-primary/40 hover:bg-primary/5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover/stat:bg-primary group-hover/stat:text-primary-foreground">
                          <Award className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.scoreLabel}</p>
                          <p className="mt-1 font-semibold">{item.score}</p>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="group/stat flex items-center gap-4 rounded-xl border border-border/50 bg-background/50 p-4 transition-all hover:border-primary/40 hover:bg-primary/5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <span
                            className={`h-3 w-3 rounded-full bg-primary ${
                              item.status === "Currently Pursuing" ? "animate-pulse" : ""
                            }`}
                          />
                        </span>
                        <div>
                          <p className="text-xs text-muted-foreground">Status</p>
                          <p className="mt-1 font-semibold">{item.status}</p>
                        </div>
                      </div>

                      {/* Highlights */}
                      {item.highlights && (
                        <div className="group/stat flex items-center gap-4 rounded-xl border border-border/50 bg-background/50 p-4 transition-all hover:border-primary/40 hover:bg-primary/5">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Trophy className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-xs text-muted-foreground">Highlights</p>
                            <p className="mt-1 text-sm font-semibold">
                              {item.highlights.join(" • ")}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COURSEWORK */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-12 lg:pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-surface/30 p-6 backdrop-blur-sm transition-all hover:border-primary/30 sm:p-8 lg:p-10">
          {/* Decorative */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative">
            {/* Header */}
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                    Academic Foundation
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  Relevant Coursework
                  <span className="text-primary">.</span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  Core Computer Science subjects that have strengthened my
                  understanding of programming, data structures, databases,
                  computer systems, networks, and software development.
                </p>
              </div>

              {/* Subject Count */}
              <div className="flex shrink-0 items-center gap-3 rounded-xl border border-border/50 bg-background/50 px-4 py-3 backdrop-blur-sm">
                <span className="text-2xl font-bold text-primary">
                  {coursework.length}
                </span>
                <div>
                  <p className="text-xs font-medium text-foreground">Core Subjects</p>
                  <p className="text-[11px] text-muted-foreground">Academic coursework</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-gradient-to-r from-primary/30 to-transparent" />

            {/* Coursework Grid */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {coursework.map((subject, index) => {
                const Icon = subject.icon;

                return (
                  <article
                    key={subject.name}
                    className="group relative flex min-h-20 items-center gap-4 overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  >
                    {/* Index */}
                    <span className="absolute right-3 top-2 text-[10px] font-medium text-muted-foreground/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Subject */}
                    <div className="min-w-0 pr-5">
                      <span className="text-sm font-semibold leading-5 text-foreground group-hover:text-primary transition-colors">
                        {subject.name}
                      </span>
                    </div>

                    {/* Hover Line */}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 group-hover:w-full" />
                  </article>
                );
              })}
            </div>

            {/* Footer Note */}
            <div className="mt-7 flex items-start gap-3 rounded-xl border border-border/50 bg-background/50 p-4 backdrop-blur-sm">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-xs leading-6 text-muted-foreground sm:text-sm">
                These subjects form the academic foundation of my programming,
                problem-solving, database, system, and software development knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC FOCUS */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-12 lg:pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-surface/30 p-6 backdrop-blur-sm transition-all hover:border-primary/30 sm:p-8 lg:p-10">
          {/* Decorative */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-0">
            {/* Left Content */}
            <div className="md:pr-10 lg:pr-14">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                  Current Focus
                </span>
              </div>

              <h2 className="mt-5 max-w-md text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Strengthening the skills behind
                <span className="text-primary"> better software.</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                Alongside my Computer Science studies, I focus on strengthening
                programming fundamentals, problem-solving skills, and practical
                development through consistent learning and hands-on projects.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-medium text-muted-foreground">
                  Learning · Building · Improving
                </span>
                <Zap className="h-4 w-4 text-primary" />
              </div>
            </div>

            {/* Right Content */}
            <div className="relative md:border-l md:border-border/50 md:pl-10 lg:pl-14">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold">Areas I'm currently working on</h3>
                <span className="hidden text-xs text-muted-foreground sm:block">
                  {academicFocus.length} areas
                </span>
              </div>

              {/* Focus Grid */}
              <div className="grid gap-3 sm:grid-cols-2">
                {academicFocus.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.name}
                      className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                    >
                      {/* Number */}
                      <span className="absolute right-3 top-2 text-[10px] font-medium text-muted-foreground/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/10 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Name */}
                      <span className="pr-5 text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        {item.name}
                      </span>

                      {/* Bottom Hover Line */}
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 group-hover:w-full" />
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Decorative */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-4 py-2 backdrop-blur-sm">
            <Heart className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs text-muted-foreground">Always learning, always growing</span>
            <Heart className="h-3.5 w-3.5 text-primary" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}