import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Briefcase } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getProject, projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Jensen Omega` },
          { name: "description", content: loaderData.project.desc },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.desc },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <p className="mt-4 text-muted-foreground">This project doesn't exist.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-12">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
        >
          <ArrowLeft className="w-4 h-4" /> All projects
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-8 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">{project.tag}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{project.desc}</p>

        <div className="mt-8 rounded-xl overflow-hidden border border-border bg-surface">
          <img
            src={project.image}
            alt={project.title}
            width={1280}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{project.overview}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Key features</h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((f: string) => (
                <li key={f} className="flex gap-3 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Tech stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs rounded-md border border-border bg-surface text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              <ExternalLink className="w-4 h-4" /> Live preview
            </a>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-primary text-sm font-medium hover:bg-primary/10 transition"
            >
              <Github className="w-4 h-4" /> Source code
            </a>
          </div>
        </div>

        <aside className="rounded-xl border border-border bg-surface p-6 h-fit space-y-5 text-sm">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" /> Year
            </div>
            <p className="mt-1 font-medium">{project.year}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
              <User className="w-3.5 h-3.5" /> Client
            </div>
            <p className="mt-1 font-medium">{project.client}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" /> Role
            </div>
            <p className="mt-1 font-medium">{project.role}</p>
          </div>
        </aside>
      </section>

      {others.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-border">
          <h2 className="text-2xl font-bold">More projects</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group rounded-lg border border-border bg-surface overflow-hidden hover:border-primary/60 transition block"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wider text-primary">{p.tag}</span>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
