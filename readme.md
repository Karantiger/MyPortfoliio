<div align="center">

<img src="./public/heroimg.png" alt="Karan Kumar Bind" width="120" height="120" />

# Karan Kumar Bind — Portfolio

### Computer Science Student & Java Developer

A modern and responsive personal portfolio website built to showcase my projects, technical skills, education, professional experience, achievements, and development journey.

<br />

<a href="#-about-the-project">About</a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#-projects">Projects</a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#-tech-stack">Tech Stack</a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#-project-structure">Structure</a>
&nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#-getting-started">Setup</a>

</div>

---

## 👨‍💻 About the Project

This is my personal developer portfolio, created to present my technical journey, projects, skills, education, internship experience, achievements, and professional background.

The portfolio focuses on a clean user experience, responsive layouts, reusable components, dynamic project routing, and a consistent visual design across desktop and mobile devices.

### Main sections

- Hero introduction
- About Me
- Skills and Technologies
- Animated Statistics
- Internship Experience
- Featured Projects
- Project Detail Pages
- Education
- Achievements
- Industry Exposure
- Resume
- Contact Form
- Responsive Navigation

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Modern UI

Clean and responsive interface with reusable components, subtle animations, hover effects, and a consistent design system.

</td>
<td width="50%">

### 📱 Responsive Design

Optimized layouts for mobile phones, tablets, laptops, and desktop screens.

</td>
</tr>

<tr>
<td width="50%">

### 🚀 Dynamic Project Pages

Every project has its own slug-based detail page with overview, features, technologies, and project information.

</td>
<td width="50%">

### 🧭 File-Based Routing

Structured application routing using TanStack Router with dedicated pages for projects, experience, education, skills, achievements, and resume.

</td>
</tr>

<tr>
<td width="50%">

### 📊 Interactive Components

Animated counters, project cards, skill displays, image galleries, and interactive UI elements.

</td>
<td width="50%">

### 📬 Contact Form

Contact form with validation, loading states, error handling, and API integration.

</td>
</tr>
</table>

---

## 🛠 Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- TanStack Router
- Lucide React

### Development

- Vite
- Git
- GitHub
- npm

### Other Technologies Used in Projects

- HTML5
- CSS3
- JavaScript
- Core Java
- React Native
- Expo
- SQLite
- Supabase
- Firebase

---

## 🚀 Projects

### Smart Community Health Monitoring System

A health monitoring and early warning system designed for water-borne disease monitoring in rural Northeast India.

The project includes:

- Web application for District Health Centers
- Mobile application for ASHA workers
- Community health data collection
- Disease case monitoring
- Early warning workflows
- Field-level reporting
- Health data visualization

**Technologies:** React, React Native, Expo, Supabase, Firebase, SQLite

---

### Habit Tracker

A cross-platform mobile application designed to help users create habits, track daily progress, and maintain consistency.

Main features:

- Create and manage habits
- Daily habit completion tracking
- Progress monitoring
- Completion history
- Local SQLite storage
- Responsive mobile interface

**Technologies:** React Native, Expo, TypeScript, SQLite

---

### WhisperWays

A travel and tourism platform focused on destination discovery and improving the travel exploration experience.

The platform was presented at the SVUM 2026 Trade Show to visitors, industry professionals, and international delegates.

Main highlights:

- Destination discovery
- Travel information
- Responsive interface
- Product demonstrations
- International delegate interactions
- Industry feedback
- Networking and collaboration opportunities

---

### Personal Portfolio

This portfolio website itself is one of my frontend development projects.

Features include:

- Responsive interface
- Dynamic project routing
- Dedicated project pages
- Experience timeline
- Education timeline
- Achievement galleries
- Skills showcase
- Contact form
- SEO metadata
- Reusable React components

---

## 📁 Project Structure

```text
portfolio/
│
├── public/
│   ├── heroimg.png
│   ├── ndv.jpg
│   ├── svum.jpg
│   └── other-public-assets/
│
├── src/
│   │
│   ├── assets/
│   │   ├── project-health-monitoring.jpg
│   │   ├── project-habit-tracker.jpg
│   │   ├── project-whisperways.jpg
│   │   └── project-portfolio.jpg
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── page-header.tsx
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   │
│   ├── hooks/
│   │
│   ├── lib/
│   │   ├── portfolio-data.ts
│   │   └── utils.ts
│   │
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── projects.tsx
│   │   ├── projects.$slug.tsx
│   │   ├── experience.tsx
│   │   ├── education.tsx
│   │   ├── achievements.tsx
│   │   ├── skills.tsx
│   │   └── resume.tsx
│   │
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   └── styles.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md