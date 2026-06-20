export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  metrics?: ProjectMetric[];
  github?: string;
  live?: string;
  featured: boolean;
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  proficiency: number;
};

export type TimelineEntry = {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "project" | "milestone" | "achievement";
};

export type ResearchTopic = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
};

export type Startup = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  status: "active" | "completed" | "concept";
  tech: string[];
};

export type PinnedRepo = {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
};

export type GitHubStats = {
  repos: number;
  followers: number;
  stars: number;
};
