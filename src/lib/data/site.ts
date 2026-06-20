import type { NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Jeffrey YAJ",
  title: "Backend & AI Engineer",
  tagline: "Building intelligent systems at the intersection of APIs, AI, and Linux.",
  email: "jeffreyyaj@gmail.com",
  bio: "Backend & AI enthusiast crafting production-grade APIs, machine learning pipelines, and open-source tools. I thrive at the edge of systems programming and applied AI — from terminal themes to computer vision models deployed in the field.",
  location: "Africa",
  cvUrl: "/cv.pdf",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#open-source" },
  { label: "Research", href: "#research" },
  { label: "Startups", href: "#startups" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/JeffreyYAJ",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jeffreyyaj",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:jeffreyyaj@gmail.com",
    icon: "email",
  },
];

export const sectionIds = [
  "hero",
  "about",
  "skills",
  "projects",
  "open-source",
  "research",
  "startups",
  "timeline",
  "contact",
];
