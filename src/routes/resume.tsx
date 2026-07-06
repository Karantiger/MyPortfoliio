import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Download,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Code2,
  Trophy,
  ExternalLink,
  Sparkles,
  Award,
  Star,
  Clock,
  Users,
  Heart,
  ArrowRight,
  CheckCircle2,
  Zap,
  User,
  Target,
  Languages,
  Music,
  BookOpen,
  Gamepad2,
  Camera,
  Coffee,
  Dumbbell,
  Headphones,
  Shield,
  Github as GithubIcon,
  Proportions,
  Bike,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      {
        title: "Resume - Karan Kumar Bind",
      },
      {
        name: "description",
        content:
          "Resume of Karan Kumar Bind, Computer Science student and aspiring Full Stack Developer with experience in Java, web development, AI-based solutions, and mobile application development.",
      },
      {
        property: "og:title",
        content: "Resume - Karan Kumar Bind",
      },
      {
        property: "og:description",
        content:
          "Professional profile, technical skills, internship experience, projects, education, and industry exposure of Karan Kumar Bind.",
      },
    ],
  }),

  component: ResumePage,
});

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

const skills = [
  { name: "Java", level: 85 },
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "Bootstrap", level: 80 },
  { name: "MySQL", level: 75 },
  { name: "Git", level: 82 },
  { name: "GitHub", level: 80 },
  { name: "VS Code", level: 85 },
];

const experience = [
  {
    role: "Java Full Stack Intern",
    company: "NDVTechsys Solution",
    period: "May 2025 — July 2025",
    location: "Remote",
    points: [
      "Developed end-to-end web applications using Java, Spring Boot, and MySQL.",
      "Designed RESTful APIs and implemented CRUD operations for efficient real-time data management.",
      "Collaborated in Agile development environments, participating in stand-ups and peer code reviews.",
      "Gained practical experience in backend development, frontend integration, and database management.",
      "Supported technical assignments and project execution while maintaining strong performance.",
    ],
  },
];

const projects = [
  {
    title: "AI & GPS-Based Attendance Monitoring System",
    description:
      "A comprehensive real-time attendance verification system that combines AI-powered face recognition with GPS geofencing technology to ensure secure and location-based attendance validation. The system provides automated attendance tracking with high accuracy and reliability.",
    points: [
      "Developed real-time attendance verification using advanced AI Face Recognition algorithms with 95%+ accuracy",
      "Implemented GPS Geofencing technology integrated with Google Maps API for precise location verification",
      "Built a responsive web portal with role-based access control for students, faculty, and administrators",
      "Integrated real-time attendance analytics and reporting dashboard with data visualization",
      "Implemented secure database storage using MySQL and MongoDB with encryption and security protocols",
      "Developed mobile-responsive interface for seamless access across all devices",
      "Reduced manual attendance processing time by 80% through automation",
      "Implemented anti-spoofing detection for enhanced security and reliability",
    ],
    technologies: ["AI Face Recognition", "GPS Geofencing", "Google Maps API", "MySQL", "MongoDB", "React"],
  },
  {
    title: "Mobile Habit Tracker Application",
    description:
      "A cross-platform mobile application built with React Native and TypeScript that helps users track daily habits, monitor progress, and achieve personal goals. The app provides offline data access, personalized insights, and intuitive user experience.",
    points: [
      "Developed cross-platform mobile application using React Native and TypeScript with modern UI/UX design",
      "Used Expo Go for rapid application testing, development, and deployment workflows",
      "Implemented SQLite local storage for offline data access, data privacy, and synchronization",
      "Designed intuitive and user-friendly interface for daily habit tracking and progress monitoring",
      "Implemented data visualization with charts and graphs for habit analytics",
      "Added push notifications and reminders for habit consistency and engagement",
      "Built custom hooks and state management for optimized performance and scalability",
      "Implemented secure user authentication and data synchronization across devices",
    ],
    technologies: ["React Native", "TypeScript", "Expo Go", "SQLite", "React Navigation", "AsyncStorage"],
  },
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indrashil University",
    period: "Expected June 2027",
    score: "CGPA: 8.35 / 10",
  },
  {
    degree: "Senior School — PCM",
    institution: "Radhakrishna Academy",
    period: "2022",
    score: "65.20%",
  },
  {
    degree: "Secondary School",
    institution: "Manasthali Education Centre",
    period: "2020",
    score: "72.00%",
  },
];

// New Data - Hobbies & Interests
const hobbies = [
  { icon: Music, name: "Music" },
  { icon: BookOpen, name: "Reading" },
  { icon: Proportions, name: "Problem Solving" },
  { icon: Gamepad2, name: "Gaming" },
  { icon: Code2, name: "Coding" },
  { icon: Coffee, name: "Coffee" },
  { icon: Bike, name: "Driving" },
  { icon: Headphones, name: "Podcasts" },
];

// Languages
const languages = [
  { name: "English", level: "Professional", flag: "🇬🇧" },
  { name: "Hindi", level: "Fluent", flag: "🇮🇳" },
  { name: "Bhojpuri", level: "Fluent", flag: "🇮🇳" },
  { name: "Gujarati", level: "NA", flag: "🇮🇳" },
];

// Additional Info
const additionalInfo = [
  { icon: Users, label: "Events Attended", value: "5+" },
  { icon: Target, label: "Projects Completed", value: "5+" },
];

// Skill Level Bar Component
const SkillLevel: React.FC<{ skill: { name: string; level: number }; index: number }> = ({
  skill,
  index,
}) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setWidth(skill.level), 300);
    }
  }, [isVisible, skill.level]);

  return (
    <div
      ref={ref}
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white/80">{skill.name}</span>
        <span className="text-sm font-medium text-primary">{skill.level}%</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      <PageHeader
        eyebrow="Resume"
        title="Professional profile"
        description="A snapshot of my technical skills, development experience, projects, education, and industry exposure."
      />

      {/* ACTION BUTTONS */}
      <section className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 py-8 sm:px-6 lg:px-12">
        <a
          href="https://drive.google.com/file/d/15pEjWcIree3yJA72rAj9Y8KaDD_CRaCa/view?usp=drive_link"
          download
          className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
        >
          <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
          Download Resume
        </a>

        <Link
          to="/"
          hash="contacts"
          className="group inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
        >
          <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
          Contact Me
        </Link>
      </section>

      {/* RESUME - Full Layout */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-12 lg:pb-24">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* ========== LEFT SIDEBAR ========== */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 text-center backdrop-blur-sm">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
              
              <div className="relative">
                <div className="mx-auto h-34 w-34 rounded-full border-4 border-primary/30 bg-primary/10 p-0.5">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                    <img src="/heroimg.png" className="w-full h-full rounded-full  p-1"/>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold">Karan Kumar Bind</h3>
                <p className="text-sm text-primary">Java Developer</p>
                <div className="mt-3 flex justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Code2, label: "Projects", value: "5+" },
                { icon: Trophy, label: "Achievements", value: "3+" },
                { icon: Star, label: "Skills", value: "9+" },
                { icon: Users, label: "Collaborations", value: "4+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-surface/50 p-4 text-center backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/5"
                >
                  <stat.icon className="mx-auto h-5 w-5 text-primary" />
                  <div className="mt-1.5 text-lg font-bold">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contact Sidebar */}
            <div className="rounded-2xl border border-border bg-surface/50 p-5 space-y-3 backdrop-blur-sm">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact</h4>
              <a href="mailto:Karantiger9369@gmail.com" className="group flex items-center gap-3 text-sm text-muted-foreground transition-all hover:text-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="truncate">Karantiger9369@gmail.com</span>
              </a>
              <a href="tel:+919369851904" className="group flex items-center gap-3 text-sm text-muted-foreground transition-all hover:text-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9369851904</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Rakhial, Ahmedabad</span>
              </div>
              <div className="flex gap-2 pt-2">
                <a href="https://linkedin.com/in/karantiger/" target="_blank" rel="noreferrer" className="rounded-lg border border-border p-2 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-foreground">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://github.com/karantiger" target="_blank" rel="noreferrer" className="rounded-lg border border-border p-2 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-foreground">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Languages */}
            <div className="rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <Languages className="h-4 w-4 text-primary" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Languages</h4>
              </div>
              <div className="space-y-2.5">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{lang.flag}</span>
                      <span className="text-sm text-white/80">{lang.name}</span>
                    </div>
                    <span className="text-xs text-primary/70">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-4 w-4 text-primary" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Hobbies</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                  <span
                    key={hobby.name}
                    className="group inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                  >
                    <hobby.icon className="h-3.5 w-3.5 text-primary/60 group-hover:text-primary" />
                    {hobby.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-sm">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Quick Facts</h4>
              <div className="space-y-2.5">
                {additionalInfo.map((info) => (
                  <div key={info.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <info.icon className="h-4 w-4 text-primary/60" />
                      <span className="text-sm text-muted-foreground">{info.label}</span>
                    </div>
                    <span className="text-sm font-medium text-primary">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Tags */}
            <div className="rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-sm">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Interests</h4>
              <div className="flex flex-wrap gap-1.5">
                {["Web Development", "Problem Solving", "Mobile Apps", "Coding", "Open Source", "Tech Events"].map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ========== RIGHT CONTENT ========== */}
          <div className="space-y-8">
            {/* Professional Summary */}
            <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Professional Summary</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Result-oriented Computer Science student and aspiring Full Stack Developer with hands-on experience in web application development,
                  AI-based solutions, and mobile application development. Developing practical skills in Java, MySQL, JavaScript, and problem-solving
                  through real-world projects including AI-driven Face Recognition and GPS Geofencing systems.
                </p>
                <p>
                  Experienced in Agile development practices with strong communication, presentation, and technical skills. Represented
                  product innovation at the SVUM 2026 Trade Shows and engaged with international delegates and industry professionals.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-5">
                <Code2 className="h-5 w-5 text-primary" />
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Technical Skills</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {skills.map((skill, index) => (
                  <SkillLevel key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Experience</h2>
              </div>
              {experience.map((item) => (
                <div key={item.role} className="relative border-l-2 border-primary/30 pl-5 pb-6 last:pb-0">
                  <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-primary" />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{item.role}</h3>
                      <p className="text-sm text-primary">{item.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        <Clock className="h-3 w-3" />
                        {item.period}
                      </span>
                      <p className="mt-1 text-xs text-muted-foreground">{item.location}</p>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects - Enhanced with more text */}
            <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-5">
                <Code2 className="h-5 w-5 text-primary" />
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Projects</h2>
              </div>
              <div className="space-y-5">
                {projects.map((project) => (
                  <div key={project.title} className="rounded-xl border border-border bg-background/50 p-5 transition-all hover:border-primary/30">
                    <h3 className="text-base font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <ul className="mt-4 space-y-2">
                      {project.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="rounded bg-primary/5 px-2.5 py-1 text-xs text-primary/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Exposure - Updated with SVUM 2026 */}
            <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="h-5 w-5 text-primary" />
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Industry Exposure</h2>
              </div>
              
              {/* SVUM 2026 */}
              <div className="rounded-xl border border-border bg-background/50 p-4 mb-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">SVUM 2026 Trade Show</h3>
                    <p className="text-sm text-primary">Product Showcase Participant</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                    <Award className="h-3.5 w-3.5" />
                    2026
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Participated in SVUM 2026 Trade Show and engaged with industry professionals and business visitors</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Presented product concepts and discussed technical implementation with diverse audiences</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Gained valuable feedback and insights from industry experts and potential stakeholders</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Built professional connections and explored potential collaboration opportunities with industry representatives</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Represented and showcased WisperWays - a travel and tourism platform to international delegates and industry professionals</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Conducted product demonstrations and technical discussions with 50+ delegates from 10+ countries</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Received multiple business offers, collaboration proposals, and expressions of interest from industry professionals</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Strengthened communication, presentation, and professional networking skills in an international trade environment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Education</h2>
              </div>
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item.degree} className="flex flex-wrap items-start justify-between gap-2 rounded-xl border border-border bg-background/50 p-4">
                    <div>
                      <h3 className="font-semibold text-sm">{item.degree}</h3>
                      <p className="text-sm text-primary">{item.institution}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{item.score}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      <Clock className="h-3 w-3" />
                      {item.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-4 py-2 backdrop-blur-sm">
                <Heart className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs text-muted-foreground">Always learning, always growing</span>
                <Heart className="h-3.5 w-3.5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}