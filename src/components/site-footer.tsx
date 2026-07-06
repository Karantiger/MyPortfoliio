import { Link } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Heart,
  Sparkles,
  ArrowUp,
  Code2,
  MapPin,
  Phone,
  Send,
  Coffee,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";

export function SiteFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-2xl shadow-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/50 ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
        <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
      </button>

      <footer className="relative mt-20 overflow-hidden bg-gradient-to-b from-background via-surface/30 to-surface">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-float" />
          <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-float-delay" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          {/* Main footer content */}
          <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand section */}
            <div>
              <Link
                to="/"
                className="group inline-flex items-center gap-4"
              >
                {/* PROFILE */}

                <div
                  className="
                    relative
                    h-12
                    w-12
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border
                    border-border
                    bg-background
                    shadow-md
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:border-primary/50
                    group-hover:shadow-lg
                  "
                >
                  <img
                    src="/heroimg.png"
                    alt="Karan Kumar Bind"
                    className="h-full w-full object-cover"
                  />

                  {/* SUBTLE IMAGE OVERLAY */}

                  <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-primary/10" />
                </div>

                {/* NAME */}

                <div>
                  <h2 className="text-base font-bold tracking-tight sm:text-lg">
                    Karan Kumar Bind
                    <span className="text-primary">.</span>
                  </h2>

                  <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                    Computer Science Student
                  </p>
                </div>
              </Link>

              {/* DESCRIPTION */}

              <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                Building clean and responsive web experiences while
                strengthening my programming fundamentals through practical
                projects and continuous learning.
              </p>

              {/* AVAILABILITY */}

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-30" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>

                Open to opportunities
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                <span className="h-px w-4 bg-primary/40" />
                Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/experience", label: "Experience" },
                  { to: "/projects", label: "Projects" },
                  { to: "/skills", label: "Skills" },
                  { to: "/education", label: "Education" },
                  { to: "/resume", label: "Resume" },
                  { to: "/achievements", label: "Achievements" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-all hover:text-primary"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/40 opacity-0 transition-all group-hover:opacity-100 group-hover:scale-150" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}

             <div>
              <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                <span className="h-px w-4 bg-primary/40" />
                Contact
              </h3>

              <div className="mt-5 space-y-4">
                {/* EMAIL */}

                <a
                  href="mailto:Karantiger9369@gmail.com"
                  className="group flex items-start gap-3"
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-background
                      text-primary
                      transition-all
                      duration-300
                    "
                  >
                    <Mail className="h-4 w-4" />
                  </span>

                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs text-muted-foreground">
                      Email
                    </p>

                    <p className="mt-0.5 break-all text-sm text-muted-foreground transition-all group-hover:text-primary">
                      Karantiger9369@gmail.com
                    </p>
                  </div>
                </a>

                {/* PHONE */}

                <a
                  href="tel:+919369851904"
                  className="group flex items-start gap-3"
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-background
                      text-primary
                      transition-all
                      duration-300
                    
                    "
                  >
                    <Phone className="h-4 w-4" />
                  </span>

                  <div className="pt-0.5">
                    <p className="text-xs text-muted-foreground">
                      Phone
                    </p>

                    <p className="mt-0.5 text-sm text-muted-foreground transition-all group-hover:text-primary">
                      +91 9369851904
                    </p>
                  </div>
                </a>

                {/* LOCATION */}

                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>

                  <div className="pt-0.5">
                    <p className="text-xs text-muted-foreground">
                      Location
                    </p>

                    <p className="mt-0.5 text-sm text-muted-foreground transition-all">
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect section */}
            <div>
              <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                <span className="h-px w-4 bg-primary/40" />
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/karantiger", color: "hover:border-[#333]" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/karantiger/", color: "hover:border-[#0A66C2]" },
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/karan.thetiger/", color: "hover:border-[#E4405F]" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`group flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-muted-foreground transition-all hover:-translate-y-2 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-xl hover:shadow-primary/20 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2 text-xs text-primary">
                <Send className="h-3 w-3" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Divider with glow */}
          <div className="relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-md" />
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>
                © {currentYear}{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent font-medium">
                  Karan Kumar Bind
                </span>
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span className="flex items-center gap-1">
                Made with
                <Heart className="h-3 w-3 text-primary animate-pulse" />
                using
                <Code2 className="h-3 w-3 text-primary" />
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <Link
                to="/"
                className="transition-colors hover:text-primary"
              >
                Home
              </Link>
              <span className="h-3 w-px bg-border" />
              <Link
                to="/resume"
                className="transition-colors hover:text-primary"
              >
                Resume
              </Link>
              <span className="h-3 w-px bg-border" />
              <Link
                to="/achievements"
                className="transition-colors hover:text-primary"
              >Achievements</Link>
              <a></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}