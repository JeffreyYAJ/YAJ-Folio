import {
  BookOpen,
  Briefcase,
  Code2,
  FlaskConical,
  FolderKanban,
  Mail,
  Rocket,
  User,
} from "lucide-react";

export const homeStats = [
  { label: "Public Repos", value: "57+" },
  { label: "Projects", value: "13" },
  { label: "Skill Domains", value: "9" },
  { label: "GitHub Stars", value: "20+" },
];

export const explorePages = [
  {
    href: "/about",
    title: "About Me",
    description: "Story, values, and the journey behind the engineer.",
    stat: "Timeline included",
    icon: User,
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Full portfolio of AI, backend, and product work.",
    stat: "13 case studies",
    icon: FolderKanban,
  },
  {
    href: "/skills",
    title: "Skills",
    description: "Interactive map of technologies across the stack.",
    stat: "9 domains",
    icon: Code2,
  },
  {
    href: "/open-source",
    title: "Open Source",
    description: "GitHub stats, pinned repos, and the ykali-zsh story.",
    stat: "18★ top repo",
    icon: BookOpen,
  },
  {
    href: "/research",
    title: "Research",
    description: "Quantum computing, LLMs, GNNs, and systems theory.",
    stat: "9 topics",
    icon: FlaskConical,
  },
  {
    href: "/startups",
    title: "Startups",
    description: "Product thinking for WellnessWear, EduTrust, and more.",
    stat: "4 ventures",
    icon: Rocket,
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Let's collaborate on something ambitious.",
    stat: "Get in touch",
    icon: Mail,
  },
];

export const pageMeta = {
  about: {
    title: "About Me",
    subtitle: "Engineer, builder, and explorer at the edge of AI and systems.",
  },
  projects: {
    title: "Projects",
    subtitle: "From hackathon platforms to open-source tools with real adoption.",
  },
  skills: {
    title: "Skills",
    subtitle: "Backend, AI, computer vision, Linux, and everything in between.",
  },
  research: {
    title: "Research & Experiments",
    subtitle: "Curiosity-driven exploration across quantum, ML, and systems.",
  },
  openSource: {
    title: "Open Source",
    subtitle: "Building in public and giving back to the developer community.",
  },
  startups: {
    title: "Entrepreneurial Journey",
    subtitle: "Product thinking for ventures that solve real problems.",
  },
  contact: {
    title: "Contact",
    subtitle: "Have a project in mind? Let's build something remarkable.",
  },
};
