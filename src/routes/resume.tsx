import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Jensen Omega" },
      { name: "description", content: "Downloadable resume of Jensen Omega, software developer." },
      { property: "og:title", content: "Resume — Jensen Omega" },
      { property: "og:description", content: "Resume and CV of Jensen Omega." },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHeader
        eyebrow="Resume"
        title="Curriculum vitae"
        description="A quick snapshot of my professional profile. Prefer the full PDF? Grab it below."
      />

      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-6 flex flex-wrap gap-3">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
        >
          <Download className="w-4 h-4" /> Download PDF
        </a>
        <Link
          to="/"
          hash="contacts"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-primary text-sm font-medium hover:bg-primary/10 transition"
        >
          Contact me
        </Link>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-16">
        <div className="rounded-xl border border-border bg-surface p-8 space-y-10">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-6 border-b border-border pb-6">
            <div>
              <h2 className="text-3xl font-bold">Jensen Omega</h2>
              <p className="mt-1 text-primary">Software Developer</p>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary" /> hello@jensenomega.dev
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" /> +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" /> Remote — worldwide
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary">Summary</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Software developer with 10+ years shipping delightful web and mobile products.
              Comfortable across the stack, with a bias toward great UX, clean systems and
              measurable outcomes.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary">Experience</h3>
            <div className="mt-4 space-y-6">
              {[
                {
                  role: "Senior Software Developer, Northwind Labs",
                  period: "2022 — Present",
                  desc: "Led frontend for a fintech analytics platform; migrated legacy React app to TS.",
                },
                {
                  role: "Full-stack Developer, Halcyon Studio",
                  period: "2019 — 2022",
                  desc: "Shipped 20+ marketing and e-commerce sites with Next.js and Sanity.",
                },
                {
                  role: "Frontend Engineer, Bright Pixel",
                  period: "2016 — 2019",
                  desc: "Built the first design system and onboarding flow for the flagship SaaS.",
                },
              ].map((r) => (
                <div key={r.role}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{r.role}</span>
                    <span className="text-muted-foreground">{r.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary">Education</h3>
            <div className="mt-4 flex justify-between text-sm">
              <span className="font-medium">B.Sc. Computer Science, University of Technology</span>
              <span className="text-muted-foreground">2012 — 2016</span>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary">Core skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React","TypeScript","Next.js","Node.js","TailwindCSS","PostgreSQL","React Native","AWS"].map(
                (s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs rounded-md border border-border text-muted-foreground"
                  >
                    {s}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
