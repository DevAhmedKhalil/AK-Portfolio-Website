export const navLinks = [
  {
    id: "about",
    title: "About",
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
  { title: "Backend Development", icon: tech("laravel") },
  { title: "Frontend Development", icon: tech("react") },
  { title: "DevOps & Deployment", icon: tech("docker") },
  { title: "Automation & AI", icon: tech("python") },
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
