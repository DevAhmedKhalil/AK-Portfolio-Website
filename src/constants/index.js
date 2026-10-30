import { SiDocker, SiLaravel, SiReact } from "react-icons/si";
import { TbApi, TbCode, TbRobot, TbSitemap, TbStack2 } from "react-icons/tb";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const tech = (name) => `${import.meta.env.BASE_URL}tech/${name}.png`;

export const services = [
  {
    title: "Laravel & PHP",
    description: "Full applications, dashboards, and CMSs with Laravel.",
    icon: SiLaravel,
  },
  {
    title: "Software Development",
    description: "Web apps and business tools, from database to deployment.",
    icon: TbCode,
  },
  {
    title: "System Design",
    description: "Data models, caching, queues, and systems that scale.",
    icon: TbSitemap,
  },
  {
    title: "Software Architecture",
    description: "Clean code, SOLID, and service and repository layers.",
    icon: TbStack2,
  },
  {
    title: "Backend & REST APIs",
    description: "Laravel, Django REST Framework, and Node.js / Express.",
    icon: TbApi,
  },
  {
    title: "Frontend Development",
    description: "React, Inertia.js, Blade, and Tailwind CSS.",
    icon: SiReact,
  },
  {
    title: "DevOps & Deployment",
    description: "Docker, Dokploy, CI/CD, Nginx, and Linux servers.",
    icon: SiDocker,
  },
  {
    title: "Automation & AI",
    description: "n8n workflows, Python scripting, and AI tools.",
    icon: TbRobot,
  },
];

// One WebGL canvas per ball, and browsers cap the number of canvases, so keep this list short.
export const technologies = [
  { name: "Laravel", icon: tech("laravel") },
  { name: "PHP", icon: tech("php") },
  { name: "React JS", icon: tech("react") },
  { name: "TypeScript", icon: tech("typescript") },
  { name: "JavaScript", icon: tech("javascript") },
  { name: "Node JS", icon: tech("nodejs") },
  { name: "Python", icon: tech("python") },
  { name: "MySQL", icon: tech("mysql") },
  { name: "Docker", icon: tech("docker") },
  { name: "Tailwind CSS", icon: tech("tailwindcss") },
];

export const experiences = [
  {
    title: "Backend Developer",
    company_name: "DotBytes",
    icon: tech("laravel"),
    iconBg: "#161329",
    date: "2025 - Present",
    points: [
      "Build backend features from business requirements, including REST APIs, authentication and permissions, order and invoice workflows, file uploads, notifications, and reports.",
      "Integrate third-party services and keep production code fast and maintainable with caching, queues, and clear service layers.",
      "Test features before release with Postman and PHPUnit, and work in a Git-based team workflow.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Soft Mission",
    icon: tech("php"),
    iconBg: "#161329",
    date: "",
    points: [
      "Built and maintained full-stack web features using Laravel, Blade, HTML, CSS, and JavaScript.",
    ],
  },
  {
    title: "Backend Development and Software Testing Intern",
    company_name: "Internship",
    icon: tech("nodejs"),
    iconBg: "#161329",
    date: "",
    points: [
      "Built REST APIs and database models, tested features, and wrote clear, reproducible bug reports.",
    ],
  },
];

// Only public links: most repos are private, and a private GitHub link shows visitors a 404.
export const projects = [
  {
    name: "Fieramico",
    subtitle: "Exhibition stand website and CMS",
    description:
      "A lead-generation site for a company that builds exhibition stands across Europe, with a portfolio, trade-fair guides, two quote wizards, and a full admin dashboard. English, Italian, and Arabic with full right-to-left support.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "Inertia.js", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
    ],
    links: [{ label: "Live", url: "https://fieramico.alriyada.tech/" }],
  },
  {
    name: "PMS",
    subtitle: "Engineering project management platform",
    description:
      "Projects, tasks, budgets, invoices, documents, and employee leave for engineering firms, with Admin, Manager, and Employee access, a Flutter mobile app on the same API, and 480 automated tests.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Flutter", color: "pink-text-gradient" },
    ],
    links: [
      {
        label: "API Docs",
        url: "https://documenter.getpostman.com/view/27901441/2sBYHQ2iAH",
      },
    ],
  },
  {
    name: "Invoice SaaS",
    subtitle: "Multi-company invoicing",
    description:
      "A multi-company invoicing product with subscriptions, payments, roles, VAT, and PDF and Excel exports.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "Redis", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
    ],
    links: [{ label: "Live", url: "https://invoice.bigapps.io/" }],
  },
  {
    name: "AttendAI CenterOS",
    subtitle: "Face-recognition attendance",
    description:
      "An offline-first attendance system for tutoring centers: a desktop app recognizes students by face, and an Arabic web dashboard manages groups, sessions, and reports.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "InsightFace", color: "green-text-gradient" },
      { name: "Django", color: "pink-text-gradient" },
    ],
    links: [],
  },
  {
    name: "Fiera Exhibitions",
    subtitle: "Exhibition platform and lead management",
    description:
      "A lead-management platform with a multi-step inquiry form, lead scoring, and secure CAD file uploads.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    links: [{ label: "Live", url: "https://ferra-exhibitions.bigapps.io/" }],
  },
  {
    name: "Find-Me",
    subtitle: "Graduation project",
    description:
      "An AI app that matches photos to help identify missing people, tuned to reduce false matches.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "Django", color: "pink-text-gradient" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/DevAhmedKhalil/Find-Me" },
    ],
  },
  {
    name: "Crow Store",
    subtitle: "Online shop",
    description:
      "An online store with product management, a shopping cart, and a complete order flow.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "Blade", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    links: [{ label: "Live", url: "https://crow.store.bigapps.io/" }],
  },
  {
    name: "Multi-Vendor Store",
    subtitle: "Marketplace",
    description:
      "A multi-store marketplace with one checkout, transactional orders, stock handling, and two-factor authentication.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "Sanctum", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    links: [],
  },
  {
    name: "Product Management API",
    subtitle: "Dashboard and API",
    description:
      "A product and category API with roles, translations, filtering, and media uploads, built on a service layer.",
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "Sanctum", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/DevAhmedKhalil/Product-Management-System-Dashboard-API",
      },
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["PHP", "JavaScript", "TypeScript", "Java", "C#", "Python", "SQL"],
  },
  {
    category: "Backend",
    items: [
      "Laravel",
      "Django REST Framework",
      "Node.js / Express",
      "REST APIs",
      "Sanctum, JWT, RBAC",
      "Queues",
      "Caching",
    ],
  },
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Inertia.js",
      "Laravel Blade",
      "Tailwind CSS",
      "Bootstrap",
      "Right-to-left layouts",
    ],
  },
  {
    category: "Software Design",
    items: [
      "Clean code",
      "SOLID principles",
      "Design patterns",
      "Layered architecture",
      "Service and repository layers",
      "System design",
    ],
  },
  {
    category: "Databases",
    items: [
      "MySQL",
      "MongoDB",
      "SQLite",
      "Data modeling",
      "Indexing",
      "Query optimization",
    ],
  },
  {
    category: "DevOps",
    items: [
      "Docker",
      "Docker Compose",
      "Dokploy",
      "CI/CD",
      "Linux VPS",
      "Nginx",
      "Redis",
      "DNS",
      "cPanel",
    ],
  },
  {
    category: "Automation and AI",
    items: [
      "n8n workflows",
      "AI-powered automations",
      "Python scripting",
      "Selenium",
      "Claude Code",
    ],
  },
  {
    category: "Testing and Tools",
    items: ["PHPUnit", "Pest", "Postman", "Git", "GitHub", "WordPress"],
  },
  {
    category: "Currently Learning",
    items: [
      "System design",
      "Software architecture",
      "AutoCAD automation with the .NET API (C#)",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Menofia University, Egypt",
  years: "2020 - 2024",
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Intermediate" },
  { name: "German", level: "Beginner" },
];
