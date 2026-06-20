import type { Startup } from "@/types";

export const startups: Startup[] = [
  {
    id: "wellnesswear",
    name: "WellnessWear",
    tagline: "Health intelligence through connected wearables",
    problem:
      "Fragmented health data across devices makes it impossible for users to see holistic wellness trends.",
    solution:
      "Unified wearable platform with backend analytics, personalized insights, and API-first architecture for third-party integrations.",
    status: "concept",
    tech: ["IoT", "FastAPI", "React Native", "TimescaleDB"],
  },
  {
    id: "edutrust",
    name: "EduTrust",
    tagline: "Portable, verifiable academic credentials",
    problem:
      "Credential fraud and lack of interoperability between African educational institutions erode trust in qualifications.",
    solution:
      "Digital credential verification platform with cryptographic proofs, institution onboarding, and employer verification portals.",
    status: "concept",
    tech: ["Next.js", "Node.js", "MongoDB", "Cryptography"],
  },
  {
    id: "nothrowam",
    name: "NoThrowam",
    tagline: "Turn waste into value with AI",
    problem:
      "Informal waste pickers lack pricing transparency and buyers can't efficiently source recyclable materials.",
    solution:
      "AI waste scanner + seller marketplace connecting waste producers with recyclers through real-time classification and pricing.",
    status: "active",
    tech: ["React", "FastAPI", "Computer Vision", "PostgreSQL"],
  },
  {
    id: "future-ideas",
    name: "Future Ideas",
    tagline: "What's next on the horizon",
    problem:
      "Emerging markets need locally-built AI infrastructure that understands regional languages, agriculture, and civic needs.",
    solution:
      "Exploring open science hubs, localized LLM fine-tuning, and developer tooling (TypeUI) that democratizes AI-assisted development.",
    status: "concept",
    tech: ["AI", "Open Source", "Developer Tools"],
  },
];
