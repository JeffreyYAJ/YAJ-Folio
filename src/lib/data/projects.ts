import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "nothrowam",
    title: "NoThrowam",
    tagline: "AI-powered waste intelligence for a circular economy",
    description:
      "Full-stack platform built for WasteHack 2026. Users scan waste via drag-and-drop AI analysis, get category and market pricing, and manage recyclable sales through a dynamic seller dashboard with live revenue graphs.",
    image: "/assets/projects/nothrowam.svg",
    tech: ["React", "TypeScript", "Tailwind", "FastAPI", "Computer Vision"],
    metrics: [
      { label: "Hackathon", value: "WasteHack 2026" },
      { label: "AI Pipeline", value: "3-step flow" },
    ],
    github: "https://github.com/Hking107/NoThrowam-Frontend",
    featured: true,
  },
  {
    slug: "ykali-zsh",
    title: "ykali-zsh",
    tagline: "A premium Zsh theme built for Kali Linux hackers",
    description:
      "Open-source terminal theme with responsive git status, elegant prompts, and Kali-native aesthetics. One of my most-starred projects, adopted by developers who live in the terminal.",
    image: "/assets/projects/ykali-zsh.svg",
    tech: ["Zsh", "Shell", "Linux", "Git"],
    metrics: [
      { label: "Stars", value: "18+" },
      { label: "Installs", value: "Global" },
    ],
    github: "https://github.com/JeffreyYAJ/ykali-zsh",
    featured: true,
  },
  {
    slug: "cassava-disease",
    title: "Cassava Disease Detection",
    tagline: "AgriTech AI for field-level crop diagnostics",
    description:
      "MobileNetV2 transfer learning model diagnosing cassava plant health from smartphone photos. Handles class imbalance with weighted training and deploys on Hugging Face Spaces for accessible inference.",
    image: "/assets/projects/cassava.svg",
    tech: ["TensorFlow", "OpenCV", "Python", "MobileNetV2"],
    metrics: [
      { label: "Classes", value: "2+" },
      { label: "Deploy", value: "HF Spaces" },
    ],
    github: "https://github.com/JeffreyYAJ/cassava-disease-classifier",
    live: "https://huggingface.co/spaces/JeffreyYAJ/cassava-disease-classifier",
    featured: true,
  },
  {
    slug: "wellnesswear",
    title: "WellnessWear",
    tagline: "Smart wearables for holistic health tracking",
    description:
      "Entrepreneurial venture exploring connected fitness wearables with backend APIs for health metrics aggregation, trend analysis, and personalized wellness insights.",
    image: "/assets/projects/wellnesswear.svg",
    tech: ["IoT", "FastAPI", "React Native", "PostgreSQL"],
    metrics: [
      { label: "Focus", value: "Health Tech" },
      { label: "Stage", value: "Concept" },
    ],
    featured: false,
  },
  {
    slug: "foyovote",
    title: "FoYoVote",
    tagline: "Modern vote tracking and transparency platform",
    description:
      "A platform for real-time vote monitoring and electoral transparency. Built with a focus on data integrity, clear UX, and accessible civic engagement tools.",
    image: "/assets/projects/foyovote.svg",
    tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    metrics: [
      { label: "Domain", value: "Civic Tech" },
      { label: "UX", value: "Real-time" },
    ],
    featured: false,
  },
  {
    slug: "edutrust",
    title: "EduTrust",
    tagline: "Verifiable credentials for African education",
    description:
      "EdTech startup concept leveraging blockchain-inspired verification for academic credentials, reducing fraud and enabling portable trust across institutions.",
    image: "/assets/projects/edutrust.svg",
    tech: ["Next.js", "Node.js", "MongoDB", "Cryptography"],
    metrics: [
      { label: "Focus", value: "EdTech" },
      { label: "Stage", value: "Concept" },
    ],
    featured: false,
  },
  {
    slug: "hospital-ms",
    title: "Hospital Management System",
    tagline: "End-to-end healthcare operations platform",
    description:
      "Full-stack hospital management with patient records, appointment scheduling, billing, and role-based access for doctors, nurses, and administrators.",
    image: "/assets/projects/hospital.svg",
    tech: ["Django", "PostgreSQL", "React", "Docker"],
    metrics: [
      { label: "Modules", value: "6+" },
      { label: "Roles", value: "RBAC" },
    ],
    featured: false,
  },
  {
    slug: "face-recognition",
    title: "Face Recognition System",
    tagline: "Real-time facial identification pipeline",
    description:
      "Computer vision system for face detection and recognition using deep learning embeddings, optimized for batch processing and real-time camera feeds.",
    image: "/assets/projects/face-recognition.svg",
    tech: ["OpenCV", "Python", "TensorFlow", "dlib"],
    metrics: [
      { label: "Mode", value: "Real-time" },
      { label: "Pipeline", value: "End-to-end" },
    ],
    github: "https://github.com/JeffreyYAJ",
    featured: false,
  },
  {
    slug: "african-news-classifier",
    title: "African News Classifier",
    tagline: "NLP model for regional news categorization",
    description:
      "Text classification pipeline trained on African news corpora to categorize articles by topic, enabling media monitoring and research applications.",
    image: "/assets/projects/news-classifier.svg",
    tech: ["Python", "scikit-learn", "NLTK", "FastAPI"],
    metrics: [
      { label: "Corpus", value: "Regional" },
      { label: "Tasks", value: "Multi-class" },
    ],
    featured: false,
  },
  {
    slug: "mini-llama",
    title: "Mini Llama Project",
    tagline: "Fine-tuning small language models locally",
    description:
      "Experiment in efficient LLM fine-tuning on constrained hardware — exploring LoRA adapters, quantization, and domain-specific instruction tuning.",
    image: "/assets/projects/mini-llama.svg",
    tech: ["PyTorch", "Hugging Face", "LoRA", "Python"],
    metrics: [
      { label: "Approach", value: "LoRA" },
      { label: "Hardware", value: "Local GPU" },
    ],
    featured: false,
  },
  {
    slug: "twitter-clone",
    title: "Twitter Clone",
    tagline: "Full-stack social platform with real-time feeds",
    description:
      "Scalable social media clone featuring posts, likes, follows, and a real-time feed — built to practice distributed backend patterns and modern frontend architecture.",
    image: "/assets/projects/twitter-clone.svg",
    tech: ["Node.js", "React", "MongoDB", "Socket.io"],
    metrics: [
      { label: "Features", value: "Real-time" },
      { label: "Stack", value: "MERN" },
    ],
    featured: false,
  },
  {
    slug: "smart-gps-tracker",
    title: "Smart GPS Tracker",
    tagline: "IoT fleet tracking with geofencing alerts",
    description:
      "Backend-driven GPS tracking system with device telemetry ingestion, geofence triggers, route history, and a dashboard for fleet operators.",
    image: "/assets/projects/gps-tracker.svg",
    tech: ["Python", "MQTT", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Protocol", value: "MQTT" },
      { label: "Alerts", value: "Geofence" },
    ],
    featured: false,
  },
  {
    slug: "backend-challenges",
    title: "Backend Challenge Projects",
    tagline: "Collection of API design & systems exercises",
    description:
      "A curated set of backend challenges covering authentication, rate limiting, caching, message queues, and microservice patterns — each built to production standards.",
    image: "/assets/projects/backend-challenges.svg",
    tech: ["Node.js", "Go", "Redis", "Docker"],
    metrics: [
      { label: "Projects", value: "10+" },
      { label: "Patterns", value: "Systems" },
    ],
    github: "https://github.com/JeffreyYAJ",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}
