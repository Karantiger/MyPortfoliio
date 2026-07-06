import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Trophy,
  Award,
  Users,
  Clock,
  Zap,
  Star,
  Heart,
  Coffee,
  LayoutTemplate,
  BrainCircuit,
  Code2,
  LoaderCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import heroPortrait from "/heroimg.png";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Karan Kumar Bind - Java Developer",
      },
      {
        name: "description",
        content:
          "Portfolio of Karan Kumar Bind, a Computer Science student and aspiring Full Stack Developer with experience in Java, Spring Boot, MySQL, JavaScript, web development, and mobile application development.",
      },
      {
        property: "og:title",
        content: "Karan Kumar Bind - Java Developer",
      },
      {
        property: "og:description",
        content:
          "Explore my development skills, internship experience, projects, education, and technical journey.",
      },
    ],
  }),

  component: Portfolio,
});

// Type definitions
interface FormErrors {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Skill {
  name: string;
  level: number;
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
}

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

// Animated counter component - FIXED
const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({ 
  target, 
  suffix = "", 
  duration = 2000 
}) => {
  const { ref, isVisible } = useIntersectionObserver();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(eased * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [target, duration, isVisible]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

// Stat Card Component - FIXED
const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label, suffix = "", delay = 0 }) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div 
      ref={ref}
      className={`group rounded-xl border border-border bg-surface p-6 text-center transition-all hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 ${
        isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
        <Icon className="h-7 w-7" />
      </div>
      <div className="mt-4">
        <span className="text-3xl font-bold text-foreground">
          {isVisible ? <AnimatedCounter target={parseInt(value) || 0} suffix={suffix} /> : `0${suffix}`}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

/* =========================================
   DATA
========================================= */

const skills: Skill[] = [
  { name: "HTML5", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "Java", level: 75 },
  { name: "React", level: 15 },
  { name: "Git", level: 82 },
  { name: "GitHub", level: 80 },
];

const services = [
  {
    icon: LayoutTemplate,
    title: "Frontend Development",
    description:
      "Building clean, responsive, and user-friendly interfaces using HTML, CSS, and JavaScript.",
  },
  {
    icon: Coffee,
    title: "Java Programming",
    description:
      "Working with Core Java and OOP concepts to write structured and maintainable programs.",
  },
  {
    icon: BrainCircuit,
    title: "Problem Solving",
    description:
      "Improving logical thinking and programming fundamentals through practice and practical projects.",
  },
  {
    icon: Code2,
    title: "Project Development",
    description:
      "Turning ideas into functional projects while learning implementation, debugging, and clean code practices.",
  },
];


const stats = [
  { icon: Award, value: "5", label: "Projects Completed", suffix: "+" },
  { icon: Users, value: "3", label: "Team Collaborations", suffix: "+" },
  { icon: Clock, value: "6", label: "Months Experience", suffix: "+" },
  { icon: Star, value: "5", label: "Skills Mastered", suffix: "+" },
];

/* =========================================
   COMPONENT
========================================= */

function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  /* =========================================
     FORM CHANGE
  ========================================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setIsSubmitted(false);
  };

  /* =========================================
     VALIDATION
  ========================================= */

  const validateForm = () => {
    const newErrors: FormErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) {
      newErrors.name = "Name is required.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!subject) {
      newErrors.subject = "Subject is required.";
    } else if (subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!message) {
      newErrors.message = "Message is required.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  /* =========================================
     FORM SUBMIT
  ========================================= */

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
) => {
  e.preventDefault();

  setIsSubmitted(false);
  setSubmitError("");

  if (!validateForm()) {
    return;
  }

  try {
    setIsSubmitting(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const contentType = response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      const responseText = await response.text();

      console.error("Non-JSON API response:", responseText);

      throw new Error(
        "API route returned HTML instead of JSON. Check /api/contact configuration.",
      );
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to send message.",
      );
    }

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);

    setSubmitError(
      error instanceof Error
        ? error.message
        : "Something went wrong.",
    );
  } finally {
    setIsSubmitting(false);
  }
};

useEffect(() => {
  if (!isSubmitted) return;

  const timer = setTimeout(() => {
    setIsSubmitted(false);
  }, 5000);

  return () => clearTimeout(timer);
}, [isSubmitted]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      {/* =========================================
          HERO
      ========================================= */}

      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 pt-10 sm:px-6 md:pb-20 lg:min-h-[680px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 lg:py-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* HERO CONTENT */}

        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Open to opportunities
          </div>

          <p className="mt-7 text-lg font-medium sm:text-xl">
            Hello, I'm
          </p>

          <h1 className="mt-2 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Karan Kumar
            <span className="block text-primary">
              Bind.
            </span>
          </h1>

          <h2 className="mt-5 max-w-xl text-xl font-semibold leading-relaxed text-muted-foreground sm:text-2xl">
            Computer Science Student{" "}
            <span className="text-muted-foreground">&</span>{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/50 bg-clip-text font-bold text-transparent">
              Java Developer
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            I craft digital experiences with clean code, thoughtful design, and a focus on building practical, user-friendly solutions.
          </p>

          {/* HERO BUTTONS */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <Link
              to="/resume"
              className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-sm font-medium transition hover:bg-primary/10"
            >
              View Resume
            </Link>
          </div>

          {/* QUICK INFORMATION */}

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              B.Tech Computer Science
            </div>

            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="h-4 w-4 text-primary" />
              Java Full Stack Internship
            </div>
          </div>
        </div>

        {/* HERO PORTRAIT */}

        <div className="relative flex items-center justify-center">
          <div className="relative aspect-square w-[250px] max-w-[75vw] sm:w-[320px] lg:w-[400px]">
            <div className="absolute inset-0 animate-portrait-pulse rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -inset-3 animate-portrait-spin rounded-full bg-[conic-gradient(from_0deg,transparent,var(--color-primary),transparent_60%)] opacity-60" />
            <div className="absolute inset-1 rounded-full bg-background" />
            <div className="absolute inset-2 animate-portrait-ring rounded-full border border-primary/40" />
            <div className="absolute inset-6 animate-portrait-ring-slow rounded-full border border-dashed border-primary/20" />
            <img
              src={heroPortrait}
              alt="Karan Kumar Bind"
              width={480}
              height={480}
              className="relative h-full w-full rounded-full border-2 border-white/40 object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ==================================
          Stats - FIXED
      ================================= */}

      <section className="mx-auto max-w-7xl px-4 -mt-8 mb-10 relative z-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* =========================================
          SKILLS MARQUEE
      ========================================= */}

      <div className="overflow-hidden bg-gradient-to-r from-surface/50 via-surface to-surface/50 backdrop-blur-sm border-y border-border/50">
        <div className="group flex py-6">
          <div className="flex min-w-max shrink-0 animate-marquee items-center gap-8 pr-8 sm:gap-12 sm:pr-12 md:gap-16 md:pr-16 lg:gap-20 lg:pr-20">
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <span
                key={`${skill.name}-${index}`}
                className="group/skill flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted-foreground transition-all hover:text-foreground sm:text-base"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/skill:bg-primary transition-colors" />
                {skill.name}
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="flex min-w-max shrink-0 animate-marquee items-center gap-8 pr-8 sm:gap-12 sm:pr-12 md:gap-16 md:pr-16 lg:gap-20 lg:pr-20"
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <span
                key={`duplicate-${skill.name}-${index}`}
                className="group/skill flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted-foreground transition-all hover:text-foreground sm:text-base"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/skill:bg-primary transition-colors" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          ABOUT
      ========================================= */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12 lg:py-24"
      >
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">
          {/* LEFT SIDE — WHAT I DO */}

          <div className="lg:pr-10 xl:pr-14">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              What I Do
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Skills I turn into
              <span className="text-primary"> practical work.</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              I focus on strengthening my development fundamentals through coding,
              practical projects, problem-solving, and continuous learning.
            </p>

            <div className="mt-8 space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group relative flex gap-4 rounded-xl border border-border bg-surface p-4 transition duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5 sm:p-5"
                  >
                    <span className="absolute right-4 top-4 text-xs font-semibold tracking-wider text-muted-foreground/30 transition-colors group-hover:text-primary/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background transition duration-300 group-hover:border-primary/50 group-hover:bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <div className="pr-6">
                      <h3 className="font-semibold transition-colors group-hover:text-primary">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE — ABOUT ME */}

          <div className="relative lg:border-l lg:border-border lg:pl-10 xl:pl-14">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-10 hidden h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px_rgba(254,102,82,0.6)] lg:block"
            />
            <span
              aria-hidden="true"
              className="absolute -left-[3px] bottom-10 hidden h-1.5 w-1.5 rounded-full bg-primary/50 lg:block"
            />

            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              About Me
            </span>

            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Learning by building
              <span className="text-primary"> real projects.</span>
            </h2>

            <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                I'm a Computer Science student and Java Developer focused on
                strengthening my programming fundamentals and building responsive
                web applications.
              </p>
              <p>
                I enjoy learning through hands-on projects, solving programming
                problems, and continuously improving my skills in Java, OOP, and
                frontend development.
              </p>
              <p>
                My internship and project experience has given me exposure to
                real-world development workflows, teamwork, technical discussions,
                and presenting ideas to different audiences.
              </p>
            </div>

            {/* CURRENT FOCUS */}

            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-surface">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                      Current Focus
                    </p>
                    <h3 className="mt-2 text-lg font-semibold">
                      Growing as a Java Developer
                    </h3>
                  </div>
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/5">
                    <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-primary/40" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Strengthening Core Java, OOP concepts, problem-solving, and web
                  development through consistent practice and project building.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["Core Java", "OOP", "JavaScript", "Problem Solving"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-border bg-background px-3 py-2.5 text-center text-xs font-medium text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* TECHNOLOGIES */}

            <div className="mt-8">
              <div className="flex items-center gap-3">
                <h3 className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Technologies I work with
                </h3>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted-foreground transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INTERNSHIP HIGHLIGHT
      ========================================= */}

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-12 lg:py-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-surface p-1">
                    <img
                      src="/ndv.jpg"
                      alt="NDVTechsys Solution"
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                      <BriefcaseBusiness className="h-3.5 w-3.5" />
                      Internship Experience
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      May 2025 — July 2025
                    </p>
                  </div>
                </div>
                <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
                  Java Full Stack Intern
                </h2>
                <p className="mt-2 font-medium text-primary">
                  NDVTechsys Solution
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Remote
                </div>
              </div>

              <div className="lg:border-l lg:border-border lg:pl-10">
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  Completed a three-month Java Full Stack Development internship,
                  gaining exposure to Java application development, REST APIs, CRUD
                  operations, MySQL, frontend integration, and Agile development
                  practices.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Java application development",
                    "REST API & CRUD concepts",
                    "MySQL database concepts",
                    "Agile workflow exposure",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  to="/experience"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  View complete experience
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PROJECTS
      ========================================= */}

      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12 lg:py-24"
      >
        {/* HEADER */}

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Portfolio
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Featured Projects
              <span className="text-primary">.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              A selection of projects where I applied programming,
              responsive design, problem-solving, and practical
              development concepts.
            </p>
          </div>

          <Link
            to="/projects"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              text-sm
              font-medium
              text-primary
            "
          >
            View all projects

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>


        {/* PROJECT GRID */}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              to="/projects/$slug"
              params={{
                slug: project.slug,
              }}
              className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-surface
                transition
                duration-300
                hover:-translate-y-1
                hover:border-primary/60
                hover:shadow-xl
                hover:shadow-primary/5
              "
            >
              {/* IMAGE */}

              <div className="relative aspect-[16/10] overflow-hidden bg-background">
                <img
                  src={project.image}
                  alt={project.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div className="absolute left-4 top-4">
                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-background/80
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-primary
                      backdrop-blur-md
                    "
                  >
                    {project.tag}
                  </span>
                </div>
              </div>


              {/* CONTENT */}

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="
                      text-xl
                      font-semibold
                      transition-colors
                      group-hover:text-primary
                    "
                  >
                    {project.title}
                  </h3>

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
                      transition-all
                      duration-300
                      group-hover:border-primary
                      group-hover:bg-primary
                      group-hover:text-primary-foreground
                    "
                  >
                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                  {project.desc}
                </p>


                {/* TECH PREVIEW */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-md
                        border
                        border-border
                        bg-background
                        px-2.5
                        py-1
                        text-[11px]
                        text-muted-foreground
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>


        {/* MOBILE VIEW ALL */}

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-primary
              px-5
              py-3
              text-sm
              font-medium
              transition
              hover:bg-primary/10
            "
          >
            Explore all projects

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </section>

      {/* =========================================
          INDUSTRY EXPOSURE
      ========================================= */}

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-12 lg:py-16">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-4">
                  <div className="h-18 w-18 shrink-0 overflow-hidden rounded-xl border border-border bg-surface p-1">
                    <img
                      src="/svum.jpg"
                      alt="SVUM 2026 Trade Show"
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                      <Trophy className="h-3.5 w-3.5" />
                      Industry Exposure
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Product Showcase · 2026
                    </p>
                  </div>
                </div>
                <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
                  SVUM 2026 Trade Show
                </h2>
                <p className="mt-2 font-medium text-primary">
                  Product Showcase Participant
                </p>
              </div>

              <div className="lg:border-l lg:border-border lg:pl-10">
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  Participated in the SVUM 2026 Trade Show, where I presented a
                  product concept, explained its functionality, and interacted with
                  industry professionals and international delegates.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Product demonstration",
                    "Technical discussions",
                    "Professional networking",
                    "Presentation experience",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/achievements"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  View more details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT
      ========================================= */}

      <section
        id="contacts"
        className="relative overflow-hidden bg-surface"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Contact
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
              Let's connect
              <span className="text-primary">.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              I'm open to internships, development opportunities,
              collaborations, and conversations about interesting technical
              projects.
            </p>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* CONTACT INFORMATION */}

            <div className="flex flex-col rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-sm sm:p-8">
              <div>
                <h3 className="text-2xl font-semibold">
                  Get in touch
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                  Have an opportunity, project idea, or technical
                  collaboration in mind? Feel free to contact me.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:Karantiger9369@gmail.com"
                  className="group flex items-center gap-4 rounded-xl border border-border p-4 transition hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">
                      Email
                    </p>
                    <p className="mt-1 truncate text-sm font-medium transition group-hover:text-primary">
                      Karantiger9369@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919369851904"
                  className="group flex items-center gap-4 rounded-xl border border-border p-4 transition hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-medium transition group-hover:text-primary">
                      +91 9369851904
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-border p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      Rakhial, Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <p className="mb-4 text-sm text-muted-foreground">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/karantiger"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    className="group flex h-11 w-11 items-center justify-center rounded-lg border border-border transition hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/karantiger/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="group flex h-11 w-11 items-center justify-center rounded-lg border border-border transition hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/karan.thetiger/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram profile"
                    className="group flex h-11 w-11 items-center justify-center rounded-lg border border-border transition hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}

            <form
              noValidate
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-background p-6 shadow-lg shadow-black/5 sm:p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">
                  Send a message
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form and I'll get back to you as soon as
                  possible.
                </p>
              </div>

              {isSubmitted && (
                <div
                  role="status"
                  className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-500"
                >
                  Message sent successfully. I'll get back to you soon.
                </div>
              )}

              {submitError && (
                <div
                  role="alert"
                  className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500"
                >
                  {submitError}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full rounded-lg border bg-surface px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:ring-2 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-border focus:border-primary focus:ring-primary/20"
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full rounded-lg border bg-surface px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-border focus:border-primary focus:ring-primary/20"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity, project, or collaboration"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={`w-full rounded-lg border bg-surface px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:ring-2 ${
                    errors.subject
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-border focus:border-primary focus:ring-primary/20"
                  }`}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full resize-none rounded-lg border bg-surface px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:ring-2 ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "border-border focus:border-primary focus:ring-primary/20"
                  }`}
                />
                <div className="mt-1.5 flex items-center justify-between gap-4">
                  <div>
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {formData.message.length}/1000
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}