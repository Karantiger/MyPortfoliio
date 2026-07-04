import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Jensen Omega" },
      { name: "description", content: "Professional experience of Jensen Omega — software developer." },
      { property: "og:title", content: "Experience — Jensen Omega" },
      { property: "og:description", content: "Roles, companies and highlights." },
    ],
  }),
  component: ExperiencePage,
});

const experience = [
  {
    role: "Senior Software Developer",
    company: "Northwind Labs",
    period: "2022 — Present",
    location: "Remote",
    points: [
      "Led a 5-person frontend team building a fintech analytics platform.",
      "Migrated legacy React app to TypeScript, cutting runtime errors by 60%.",
      "Introduced design system + tokens shared across 3 product surfaces.",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "Halcyon Studio",
    period: "2019 — 2022",
    location: "Berlin, DE",
    points: [
      "Shipped 20+ marketing and e-commerce sites with Next.js + Sanity.",
      "Built internal CMS tooling that cut client turnaround time in half.",
      "Owned CI/CD, edge deployment and Lighthouse performance budgets.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Bright Pixel",
    period: "2016 — 2019",
    location: "Remote",
    points: [
      "Built the first design system for the flagship SaaS product.",
      "Partnered with product to design and ship the onboarding flow.",
      "Mentored two junior engineers through structured 1:1s.",
    ],
  },
];

function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHeader
        eyebrow="Experience"
        title="Where I've worked"
        description="A decade of shipping products across fintech, e-commerce and creative agencies."
      />
      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-16">
        <ol className="relative border-l border-border ml-3">
          {experience.map((e) => (
            <li key={e.role + e.company} className="ml-8 pb-12 relative">
              <span className="absolute -left-[42px] top-1 w-8 h-8 rounded-full bg-surface border border-primary flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{e.role}</h3>
                <span className="text-xs text-muted-foreground">{e.period}</span>
              </div>
              <p className="mt-1 text-sm text-primary">
                {e.company} · <span className="text-muted-foreground">{e.location}</span>
              </p>
              <ul className="mt-4 space-y-2">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
      <SiteFooter />
    </div>
  );
}
