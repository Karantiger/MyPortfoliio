import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskmanager from "@/assets/project-taskmanager.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

export type Project = {
  slug: string;
  title: string;
  tag: string;
  desc: string;
  image: string;
  year: string;
  role: string;
  client: string;
  liveUrl: string;
  sourceUrl: string;
  tech: string[];
  overview: string;
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    tag: "Web App",
    desc: "Full-stack shopping platform with cart, payments and admin dashboard.",
    image: projectEcommerce,
    year: "2025",
    role: "Full-stack Developer",
    client: "Retail Startup",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
    overview:
      "A modern e-commerce experience built from the ground up. It covers browsing, cart, checkout with Stripe, order management, and a dashboard for the store owner to manage products and inventory.",
    features: [
      "Product catalog with search and filters",
      "Secure Stripe checkout with webhooks",
      "Admin dashboard for products, orders and stock",
      "Responsive design optimised for mobile",
    ],
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    tag: "Mobile App",
    desc: "Cross-platform productivity app with real-time sync and reminders.",
    image: projectTaskmanager,
    year: "2024",
    role: "Mobile Developer",
    client: "Productivity SaaS",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
    tech: ["React Native", "Expo", "Firebase", "TypeScript"],
    overview:
      "A cross-platform task manager that keeps your work in sync across devices. Supports lists, kanban boards, reminders and offline-first editing.",
    features: [
      "Offline-first with background sync",
      "Push notifications and reminders",
      "Kanban and list views",
      "Shared workspaces for teams",
    ],
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    tag: "Web App",
    desc: "Data visualization dashboard with charts and live metrics.",
    image: projectAnalytics,
    year: "2024",
    role: "Frontend Engineer",
    client: "Fintech Company",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
    tech: ["React", "Recharts", "WebSockets", "TailwindCSS"],
    overview:
      "A real-time analytics dashboard for a fintech company. Ingests live event data over WebSockets and renders it with performant charts and drill-down views.",
    features: [
      "Live metrics via WebSockets",
      "Interactive charts and drill-downs",
      "Custom date-range comparisons",
      "Exportable reports (CSV / PDF)",
    ],
  },
  {
    slug: "portfolio-cms",
    title: "Portfolio CMS",
    tag: "Website",
    desc: "Custom CMS-powered portfolio site with blog and case studies.",
    image: projectPortfolio,
    year: "2023",
    role: "Full-stack Developer",
    client: "Creative Agency",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com",
    tech: ["Next.js", "Sanity", "TailwindCSS", "Vercel"],
    overview:
      "A headless-CMS powered portfolio and blog for a creative agency. Editors can manage projects, case studies and posts without touching code.",
    features: [
      "Sanity headless CMS integration",
      "MDX-powered case studies",
      "Image optimisation and lazy loading",
      "Excellent Lighthouse scores",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
