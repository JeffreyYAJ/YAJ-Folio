import type { GitHubStats, PinnedRepo } from "@/types";

export const githubStats: GitHubStats = {
  repos: 57,
  followers: 14,
  stars: 20,
};

export const pinnedRepos: PinnedRepo[] = [
  {
    name: "ykali-zsh",
    description: "Zsh theme built specially for Kali Linux users",
    url: "https://github.com/JeffreyYAJ/ykali-zsh",
    stars: 18,
    language: "Shell",
  },
  {
    name: "typeui",
    description: "Build better UI with Codex, Claude, Cursor and other AI tools",
    url: "https://github.com/JeffreyYAJ/typeui",
    stars: 0,
    language: "TypeScript",
  },
  {
    name: "cassava-disease-classifier",
    description: "AgriTech AI plant disease detection using MobileNetV2",
    url: "https://github.com/JeffreyYAJ/cassava-disease-classifier",
    stars: 1,
    language: "Python",
  },
  {
    name: "Yabegami-gallery",
    description: "Curated wallpaper library for the Yabegami Linux app",
    url: "https://github.com/JeffreyYAJ/Yabegami-gallery",
    stars: 0,
    language: "HTML",
  },
];

export const ykaliStory = {
  title: "The ykali-zsh Story",
  content:
    "Born from daily Kali Linux workflows, ykali-zsh started as a personal prompt customization and evolved into a full theme adopted by developers worldwide. It embodies my philosophy: polish the tools you use every day, then share them with the community.",
  installCommand: "git clone https://github.com/JeffreyYAJ/ykali-zsh ~/.oh-my-zsh/custom/themes/ykali-zsh",
};

export const hacktoberfestNote =
  "Active Hacktoberfest contributor — submitting PRs to open-source projects across developer tooling, documentation, and AI utilities.";
