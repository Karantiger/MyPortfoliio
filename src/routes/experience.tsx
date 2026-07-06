import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      {
        title: "Experience - Karan Kumar Bind",
      },
      {
        name: "description",
        content:
          "Professional experience and Java Full Stack internship journey of Karan Kumar Bind.",
      },
      {
        property: "og:title",
        content: "Experience - Karan Kumar Bind",
      },
      {
        property: "og:description",
        content:
          "Java Full Stack internship and professional work experience.",
      },
    ],
  }),

  component: ExperiencePage,
});

/* =========================================
   EXPERIENCE DATA
========================================= */

const experience = [
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

/* =========================================
   EXPERIENCE PAGE
========================================= */

function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <PageHeader
        eyebrow="Experience"
        title="My professional journey"
        description="My journey includes hands-on exposure to Java Full Stack Development and professional experience in data handling, documentation, and record management."
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-12 lg:pb-24">
        <div className="relative">
          {/* TIMELINE LINE */}

          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-border sm:block" />

          <div className="space-y-10 sm:space-y-12">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="relative sm:pl-16"
              >
                {/* TIMELINE ICON */}

                <div className="absolute left-0 top-0 z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-primary bg-background sm:flex">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>

                {/* EXPERIENCE CARD */}

                <div className="overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                  {/* =========================================
                      CARD HEADER
                  ========================================= */}

                  <div className="border-b border-border p-5 sm:p-7">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      {/* COMPANY INFORMATION */}

                      <div className="flex items-start gap-4 sm:gap-5">
                        {/* COMPANY LOGO */}

                        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-2 sm:h-20 sm:w-20">
                          <img
                            src={item.logo}
                            alt={`${item.company} logo`}
                            loading="lazy"
                            className="h-full w-full object-contain rounded-lg"
                          />
                        </div>

                        {/* ROLE INFORMATION */}

                        <div className="min-w-0">
                          {/* EXPERIENCE TYPE */}

                          <div className="mb-2 flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                              <Briefcase className="h-3.5 w-3.5 text-primary" />
                            </span>

                            <span className="text-xs font-medium uppercase tracking-wider text-primary">
                              {item.type}
                            </span>
                          </div>

                          {/* ROLE */}

                          <h2 className="text-xl font-bold sm:text-2xl">
                            {item.role}
                          </h2>

                          {/* COMPANY */}

                          <p className="mt-1.5 text-sm font-medium text-primary sm:text-base">
                            {item.company}
                          </p>
                        </div>
                      </div>

                      {/* DATE AND LOCATION */}

                      <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 shrink-0 text-primary" />

                          <span>{item.period}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 shrink-0 text-primary" />

                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =========================================
                      CARD BODY
                  ========================================= */}

                  <div className="p-5 sm:p-7">
                    {/* DESCRIPTION */}

                    <p className="max-w-4xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {item.description}
                    </p>

                    {/* RESPONSIBILITIES */}

                    <div className="mt-7">
                      <div className="flex items-center gap-4">
                        <h3 className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] sm:text-sm">
                          {item.type === "Internship"
                            ? "Key Responsibilities & Learning"
                            : "Key Responsibilities"}
                        </h3>

                        <div className="h-px flex-1 bg-border" />
                      </div>

                      <ul className="mt-5 grid gap-4 lg:grid-cols-2">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                            <span className="text-sm leading-6 text-muted-foreground">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* SKILLS */}

                    <div className="mt-8">
                      <div className="flex items-center gap-4">
                        <h3 className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] sm:text-sm">
                          {item.type === "Internship"
                            ? "Technologies & Practices"
                            : "Skills & Tools"}
                        </h3>

                        <div className="h-px flex-1 bg-border" />
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}