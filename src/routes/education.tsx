import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Jensen Omega" },
      { name: "description", content: "Academic background and certifications of Jensen Omega." },
      { property: "og:title", content: "Education — Jensen Omega" },
      { property: "og:description", content: "Academic background and certifications." },
    ],
  }),
  component: EducationPage,
});

const education = [
  {
    school: "University of Technology",
    degree: "B.Sc. in Computer Science",
    period: "2012 — 2016",
    detail:
      "Focus on distributed systems and human-computer interaction. Graduated with First Class Honours.",
  },
  {
    school: "Coastal Secondary School",
    degree: "High School Diploma",
    period: "2008 — 2012",
    detail: "STEM track. President of the coding club; built the school's first internal portal.",
  },
];

const certs = [
  { name: "AWS Certified Developer — Associate", year: "2024" },
  { name: "Meta Frontend Developer Professional", year: "2023" },
  { name: "Google UX Design Certificate", year: "2022" },
];

function EducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHeader
        eyebrow="Education"
        title="Learning journey"
        description="Formal education and certifications that shaped how I build software."
      />

      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-12">
        <ol className="relative border-l border-border ml-3">
          {education.map((e) => (
            <li key={e.school} className="ml-8 pb-12 relative">
              <span className="absolute -left-[42px] top-1 w-8 h-8 rounded-full bg-surface border border-primary flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary" />
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{e.degree}</h3>
                <span className="text-xs text-muted-foreground">{e.period}</span>
              </div>
              <p className="mt-1 text-sm text-primary">{e.school}</p>
              <p className="mt-3 text-sm text-muted-foreground">{e.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-16">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {certs.map((c) => (
            <div
              key={c.name}
              className="rounded-lg border border-border bg-surface p-5 flex items-start justify-between gap-4"
            >
              <span className="text-sm font-medium">{c.name}</span>
              <span className="text-xs text-primary">{c.year}</span>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
