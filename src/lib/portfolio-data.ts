import projectHabitTracker from "/projects/habit.png";
import projectHealthMonitoring from "/projects/asha.png";
import projectGeofencingAttendance from "/projects/geo.png";
import projectHostelLeave from "/projects/hostel.png";

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
    slug: "smart-community-health-monitoring",
    title: "Smart Community Health Monitoring System",
    tag: "SIH 2025 · HealthTech",

    desc:
      "A digital health monitoring and early warning system designed to support the detection and prevention of water-borne diseases in rural Northeast India.",

    image: projectHealthMonitoring,

    year: "2025",

    role: "Frontend & Mobile App Contributor",

    client: "Smart India Hackathon 2025",

    liveUrl: "",

    sourceUrl: "",

    tech: [
      "React",
      "TypeScript",
      "React Native",
      "Expo",
      "Supabase",
      "Firebase",
      "SQLite",
      "JavaScript",
    ],

    overview:
      "Developed as a solution for Smart India Hackathon problem statement SIH25001 under the Ministry of Development of North Eastern Region. The project includes a web application for District Health Centers and a mobile application for ASHA workers. The system focuses on community-level health data collection, disease monitoring, water-quality reporting, alerts, and supporting early response to possible water-borne disease outbreaks.",

    features: [
      "District Health Center dashboard for monitoring community health data",
      "Mobile application interface designed for ASHA workers",
      "Community-level case reporting and health data collection",
      "Water quality observation and reporting workflow",
      "Disease case monitoring and early warning alerts",
      "Dashboard for viewing cases, trends, and health-related insights",
      "Support for field-level data collection in rural areas",
      "Role-based workflows for health officials and field workers",
      "Offline-oriented mobile data collection workflow",
      "Health awareness and community monitoring features",
    ],
  },

  {
    slug: "habit-tracker",
    title: "Habit Tracker",
    tag: "Mobile Application",

    desc:
      "A cross-platform habit tracking application designed to help users build consistency, track daily progress, and maintain productive routines.",

    image: projectHabitTracker,

    year: "2025",

    role: "Mobile App Developer",

    client: "Personal Project",

    liveUrl: "",

    sourceUrl: "",

    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "SQLite",
    ],

    overview:
      "A mobile habit tracking application developed to explore cross-platform mobile development and local data management. The application allows users to create habits, record daily progress, track completion history, and maintain consistency through a simple and focused mobile interface.",

    features: [
      "Create and manage daily habits",
      "Mark habits as completed for each day",
      "Track daily habit progress",
      "View habit completion history",
      "Local data storage using SQLite",
      "Simple and responsive mobile interface",
      "Cross-platform development with React Native and Expo",
      "Structured habit management workflow",
    ],
  },
  {
  slug: "geofencing-ai-attendance",
  title: "Geofencing AI-Based Attendance Monitoring System",
  tag: "AI · Attendance Management",

  desc:
    "A smart web-based attendance monitoring system combining geofencing and AI-powered face recognition to provide secure, location-aware, and automated attendance tracking.",

  image: projectGeofencingAttendance,

  year: "2026",

  role: "Full Stack Developer",

  client: "Academic Project",

  liveUrl: "",

  sourceUrl: "",

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "MySQL",
    "Face Recognition",
    "Geolocation API",
  ],

  overview:
    "The Geofencing AI-Based Attendance Monitoring System is a smart web application designed to automate and secure the attendance process. The system combines real-time geolocation verification with AI-powered face recognition to ensure that attendance can only be recorded when an authorized user is physically present within a predefined geographic boundary. It provides role-based dashboards, attendance records, real-time monitoring, and analytical reports for efficient attendance management.",

  features: [
    "Geofencing-based attendance verification",
    "AI-powered face recognition for identity verification",
    "Location-based attendance restrictions",
    "Real-time latitude and longitude validation",
    "Automatic check-in and check-out recording",
    "Secure user authentication and authorization",
    "Attendance history and daily status tracking",
    "Admin dashboard for attendance monitoring",
    "Employee and student attendance management",
    "Daily and monthly attendance reports",
    "Attendance analytics and trend visualization",
    "Prevention of proxy attendance using face verification",
    "Real-time attendance status updates",
    "Centralized MySQL database for attendance records",
    "Responsive web interface for desktop and mobile devices",
  ],
},
{
  slug: "hostel-leave-management-system",
  title: "Hostel Leave Management System",
  tag: "Hostel Management · Web Application",

  desc:
    "A role-based hostel management web application designed to digitize leave requests, room management, complaints, notices, mess operations, and overall college hostel administration.",

  image: projectHostelLeave,

  year: "2026",

  role: "Full Stack Developer",

  client: "College Hostel Project",

  liveUrl: "",

  sourceUrl: "",

  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "MySQL",
  ],

  overview:
    "The Hostel Leave Management System is a centralized web application designed to simplify and digitize college hostel operations. The platform provides separate role-based dashboards for Students, Wardens, Hostel Incharges, and Administrators. Students can submit and track leave requests, view hostel information, receive notices, and raise complaints. Wardens and Hostel Incharges can review leave applications, manage students and rooms, monitor complaints, manage mess and maintenance activities, and generate reports. Administrators have complete control over hostels, users, roles, system settings, analytics, and security.",

  features: [
    "Role-based authentication and authorization",
    "Separate dashboards for Student, Warden, Hostel Incharge, and Admin",
    "Online hostel leave application workflow",
    "Leave request approval and rejection system",
    "Real-time leave application status tracking",
    "Student profile and hostel information management",
    "Room allotment and room occupancy management",
    "Hostel-wise student record management",
    "Complaint registration and resolution tracking",
    "Mess menu and mess information management",
    "Hostel maintenance request tracking",
    "Notices and announcement management",
    "Emergency alerts and important notifications",
    "Hostel staff management",
    "Hostel inventory and asset management",
    "Room occupancy analytics",
    "Monthly leave request analytics",
    "Student entry and exit record management",
    "Administrative reports and hostel statistics",
    "Centralized management of multiple hostels",
  ],
},

];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);