/* ============================================================
   CONTENT DATA
   Single source of truth for ALL website text and structured
   content. Components must import from here — no text strings
   should live inside component files.

   Lines marked "TODO" are placeholders intentionally left
   empty until Azzam supplies the real content.
   ============================================================ */

export const site = {
  name: "Abdullah Azzam Firdaus",
  shortName: "Azzam",
  lastName: "Firdaus",
  logoText: "AAF",
  heroBadge: { years: "3 Years", label: "Experience" },
  heroTagline: "Web developer and visual designer. I turn Figma designs into clean, responsive React interfaces.",
  cvFile: "/Abdullah-Azzam-Firdaus-CV.pdf",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Project", href: "#project" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const marqueeItems = ["WEB DEV", "WEB DESIGN", "UI/UX", "DEPLOYMENT"];

export const about = {
  title: "About",
  text: "I'm Abdullah Azzam Firdaus, a web developer and visual designer from Serang. I turn ideas into clean, responsive interfaces, from Figma designs to working code in React, with a focus on usability and consistent visual storytelling.",
  skills: [
    "Figma",
    "UI/UX",
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Git & GitHub",
  ],
};

export const services = [
  {
    number: "01",
    title: "Design",
    text: "UI/UX, posters, and social media visuals built in Figma, from typography and auto layout to components and variants. Designed the Petingemil brand interface.",
  },
  {
    number: "02",
    title: "Frontend",
    text: "Responsive interfaces with HTML5, CSS3, JavaScript (ES6+), and React.js, turning Figma designs into clean, mobile-first pages.",
  },
  {
    number: "03",
    title: "Coaching",
    text: "Taught Design Fundamentals at SMP IT Darajatul Ashfad, mentored students on app interfaces, and ran a one-week UI/UX and front-end workshop.",
  },
];

export const certificates = [
  {
    title: "TODO: certificate title",
    issuer: "TODO: issuer",
    year: "TODO",
    image: "",
    link: "",
  },
  {
    title: "TODO: certificate title",
    issuer: "TODO: issuer",
    year: "TODO",
    image: "",
    link: "",
  },
];

export const experience = [
  {
    title: "Teaching: Design Fundamentals",
    place: "SMP IT Darajatul Ashfad",
    date: "2022 - 2023",
    text: "Guided students through the core principles of design, key elements of visual communication, and practical techniques for designing effectively and accurately.",
    image: "",
  },
  {
    title: "Social Media Manager and Designer",
    place: "PT Beonet",
    date: "TODO",
    text: "Managed content creation and visual branding to boost engagement and strengthen the company's online presence.",
    image: "",
  },
  {
    title: "Mentoring: Application Interfaces",
    place: "TODO",
    date: "TODO",
    text: "Mentored students in building basic application interfaces, introducing component-based thinking, user interaction flow, and simple front-end logic through hands-on projects.",
    image: "",
  },
  {
    title: "Workshop: UI/UX and Front-End",
    place: "TODO",
    date: "TODO",
    text: "Conducted a one-week workshop on UI/UX and front-end implementation, covering layout structure, responsive design, and the Figma-to-interface workflow.",
    image: "",
  },
  {
    title: "TODO: pesantren program title",
    place: "TODO",
    date: "TODO",
    text: "TODO: description from Azzam",
    image: "",
  },
];

export const projects = [
  { title: "Peti Ngemil", category: "Web Design", image: "", link: "" },
  { title: "E-Commerce", category: "Website", image: "", link: "" },
];

export const projectCategories = [
  "All",
  "Web Design",
  "Landing Page",
  "Poster",
  "Website",
];

export const contact = {
  email: "aafazzam@gmail.com",
  phone: "+6281319329015",
  linkedin: "https://www.linkedin.com/in/abdullah-azzam-firdaus-326447250/",
  ctaTitle: "Looking for a Web Developer or Designer? Let's Discuss.",
  footerBio: "TODO: short bio for footer",
  copyright: "© 2026 Abdullah Azzam Firdaus. All rights reserved.",
};
