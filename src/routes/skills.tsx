import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tech Stack — Jensen Omega" },
      { name: "description", content: "Languages, frameworks and tools I use every day." },
      { property: "og:title", content: "Skills — Jensen Omega" },
      { property: "og:description", content: "Tech stack and tooling." },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "React Native", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git & GitHub", level: 95 },
      { name: "TailwindCSS", level: 90 },
      { name: "Vercel / Cloudflare", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
];

const tags = [
  "React","Next.js","TypeScript","Node.js","TailwindCSS","PostgreSQL","Prisma",
  "Supabase","Vite","Framer Motion","Zustand","TanStack Query","Playwright","Vitest",
  "Docker","GitHub Actions","Figma","Sanity",
];

function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHeader
        eyebrow="Skills"
        title="Tech stack"
        description="The tools I reach for to design, build and ship products end to end."
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-12 grid md:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold">{g.title}</h3>
            <div className="mt-6 space-y-5">
              {g.items.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm">
                    <span>{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-background overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <h2 className="text-2xl font-bold">Also familiar with</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 text-xs rounded-md border border-border bg-surface text-muted-foreground hover:border-primary/60 hover:text-foreground transition"
            >
              {t}
            </span>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
