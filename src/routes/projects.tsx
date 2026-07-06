import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <PageHeader
        eyebrow="Portfolio"
        title="All Projects"
        description="A collection of projects showcasing my skills in frontend development, Java programming, and modern web technologies."
      />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-12">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to="/projects/$slug"
              params={{
                slug: project.slug,
              }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-primary">
                    {project.tag}
                  </span>

                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-primary" />
                </div>

                <h2 className="mt-4 text-xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {project.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}