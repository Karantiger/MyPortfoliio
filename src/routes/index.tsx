import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Smartphone,
  Cloud,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const skills = ["HTML5", "CSS", "Javascript", "Node.js", "React", "Git", "Github"];

const services = [
  { icon: Code2, title: "Website Development" },
  { icon: Smartphone, title: "App Development" },
  { icon: Cloud, title: "Website Hosting" },
];

const stats = [
  { value: "120", label: "Completed\nProjects" },
  { value: "95", label: "Client\nsatisfaction", suffix: "%" },
  { value: "10", label: "Years of\nexperience" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12 grid lg:grid-cols-2 gap-10 items-center"
      >
        <div className="relative">
          <div className="absolute -left-6 top-24 w-12 h-px bg-primary" />
          <h2 className="text-2xl font-semibold">
            Hello<span className="text-primary">.</span>
          </h2>
          <p className="mt-6 text-2xl pl-8">I'm Jensen</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight">
            Software Developer
          </h1>
          <div className="mt-10 flex gap-4">
            <a
              href="#contacts"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              Got a project?
            </a>
            <Link
              to="/resume"
              className="px-6 py-3 rounded-md border border-primary text-sm font-medium hover:bg-primary/10 transition"
            >
              My resume
            </Link>
          </div>
        </div>

        {/* Portrait with animated glow */}
        <div className="relative flex justify-center items-center">
          <ChevronLeft className="absolute left-0 md:left-4 w-10 h-10 text-primary/60 z-10" />
          <div className="relative w-[320px] md:w-[420px] aspect-square">
            {/* Animated glow layers */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-portrait-pulse" />
            <div className="absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,transparent,var(--color-primary),transparent_60%)] animate-portrait-spin opacity-70" />
            <div className="absolute inset-1 rounded-full bg-background" />
            <div className="absolute inset-2 rounded-full border border-primary/40 animate-portrait-ring" />
            <div className="absolute inset-6 rounded-full border border-dashed border-primary/25 animate-portrait-ring-slow" />
            <img
              src={heroPortrait}
              alt="Jensen Omega"
              width={480}
              height={480}
              className="relative w-full h-full rounded-full object-cover"
            />
          </div>
          <ChevronRight className="absolute right-0 md:right-4 w-10 h-10 text-primary/60 z-10" />
        </div>
      </section>

      {/* SKILLS STRIP */}
      <div className="bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-wrap justify-between items-center gap-6 text-muted-foreground text-sm">
          {skills.map((s) => (
            <span key={s} className="hover:text-foreground transition">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-14"
      >
        <div className="space-y-8">
          {services.map((s) => (
            <div key={s.title} className="flex items-center gap-6 relative pl-6">
              <span className="absolute left-0 top-0 bottom-0 w-px bg-primary/60" />
              <span
                className="absolute -left-1 top-1/2 w-2 h-2 rounded-full bg-primary"
                style={{ transform: "translateY(-50%)" }}
              />
              <div className="w-12 h-12 flex items-center justify-center rounded-md border border-border">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl font-bold">About me</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-md">
            I started my software journey from photography. Through that, I learned to love the
            process of creating from scratch. Since then, this has led me to software development
            as it fulfills my love for learning and building things.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((st) => (
              <div key={st.label}>
                <div className="flex items-start gap-1">
                  <span className="text-4xl font-bold">{st.value}</span>
                  <span className="text-2xl text-primary font-bold">{st.suffix ?? "+"}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground whitespace-pre-line">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Projects</h2>
          <div className="mx-auto mt-4 w-px h-12 bg-primary" />
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group rounded-lg border border-border bg-surface overflow-hidden hover:border-primary/60 transition block"
            >
              <div className="aspect-[16/10] overflow-hidden bg-background">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <span className="text-xs uppercase tracking-wider text-primary">{p.tag}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                </div>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacts" className="bg-surface mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold">Let's work together</h2>
            <p className="mt-4 text-muted-foreground text-sm max-w-md">
              Have a project in mind? Drop a message and I'll get back to you within 24 hours.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" /> hello@jensenomega.dev
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" /> Remote — worldwide
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:border-primary hover:text-primary transition"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:border-primary hover:text-primary transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:border-primary hover:text-primary transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Your name"
              className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
            <input
              placeholder="Your email"
              type="email"
              className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              Send message
            </button>
          </form>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
