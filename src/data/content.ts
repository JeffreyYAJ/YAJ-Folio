import type { IconType } from "react-icons";
import {
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCanva,
  SiPython,
  SiFastapi,
  SiDjango,
  SiLinux,
  SiGnubash,
  SiDocker,
  SiScikitlearn,
  SiOpencv,
  SiApacheairflow,
  SiLangchain,
} from "react-icons/si";
import {
  FiLayout,
  FiPenTool,
  FiLayers,
  FiServer,
  FiCpu,
  FiDatabase,
} from "react-icons/fi";

export type Skill = {
  name: string;
  Icon: IconType;
  color: string; // couleur officielle de la marque
};

export const designSkills: Skill[] = [
  { name: "Figma",               Icon: SiFigma,            color: "#F24E1E" }, // orange/rouge Figma
  { name: "Adobe Illustrator",   Icon: SiAdobeillustrator, color: "#FF9A00" }, // orange Ai
  { name: "Adobe Photoshop",     Icon: SiAdobephotoshop,   color: "#31A8FF" }, // bleu Ps
  { name: "Canva",               Icon: SiCanva,            color: "#00C4CC" }, // turquoise Canva
  { name: "UI/UX Design",        Icon: FiLayout,           color: "#c31015" }, // ton rouge FORCE
  { name: "Branding & Identity", Icon: FiPenTool,          color: "#c31015" },
  { name: "Prototyping",         Icon: FiLayers,           color: "#c31015" },
];

export const devSkills: Skill[] = [
  { name: "Python",                Icon: SiPython,        color: "#3776AB" }, // bleu Python
  { name: "FastAPI",               Icon: SiFastapi,       color: "#009688" }, // teal FastAPI
  { name: "Django",                Icon: SiDjango,        color: "#092E20" }, // vert sombre Django
  { name: "Linux",                 Icon: SiLinux,         color: "#FCC624" }, // jaune Tux
  { name: "Shell",                 Icon: SiGnubash,       color: "#4EAA25" }, // vert Bash
  { name: "Docker",                Icon: SiDocker,        color: "#2496ED" }, // bleu Docker
  { name: "API & Microservices",   Icon: FiServer,        color: "#016727" }, // vert FORCE
  { name: "System Administration", Icon: FiCpu,           color: "#016727" },
  { name: "AI & Data",             Icon: FiDatabase,      color: "#016727" },
  { name: "Machine Learning",      Icon: SiScikitlearn,   color: "#F7931E" }, // orange scikit
  { name: "Computer Vision",       Icon: SiOpencv,        color: "#5C3EE8" }, // violet OpenCV
  { name: "Data Pipelines",        Icon: SiApacheairflow, color: "#017CEE" }, // bleu Airflow
  { name: "RAG / LLMs",            Icon: SiLangchain,     color: "#1C3C3C" }, // vert/noir LangChain
];
export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  stack: string[];
  role: string;
  year: string;
  highlights: string[];
  theme: string;
  side: "left" | "right";
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    name: "PassAI",
    shortDescription:
      "AI-powered animal exam tutor for Cameroon, RAG, OCR and PDF processing with microservices.",
    longDescription:
      "PassAI est un tuteur intelligent qui aide les étudiants camerounais à préparer leurs examens vétérinaires. Le système combine un pipeline RAG pour la recherche contextuelle dans les annales, de l'OCR pour extraire le contenu des PDF scannés, et une architecture microservices pour scaler indépendamment chaque composant.",
    stack: ["Python", "FastAPI", "React", "Docker", "PostgreSQL"],
    role: "Full-stack / AI Engineer",
    year: "2024",
    highlights: [
      "Pipeline RAG sur annales d'examens",
      "OCR multilingue (FR/EN)",
      "Architecture microservices scalable",
      "Interface React temps réel",
    ],
    theme: "passai",
    side: "left",
  },
  {
    id: "02",
    name: "FoVote",
    shortDescription:
      "Online voting platform for schools. Django backend, React frontend, secure authentication.",
    longDescription:
      "FoVote est une plateforme de vote en ligne conçue pour les établissements scolaires. Elle permet d'organiser des élections étudiantes sécurisées avec authentification multi-facteurs, suivi en temps réel des résultats, et journalisation complète des votes pour garantir la transparence.",
    stack: ["Django", "React", "PostgreSQL", "Tailwind"],
    role: "Full-stack Developer",
    year: "2024",
    highlights: [
      "Authentification sécurisée multi-facteurs",
      "Résultats en temps réel",
      "Audit trail complet",
      "Interface admin intuitive",
    ],
    theme: "fovote",
    side: "right",
  },
  {
    id: "03",
    name: "LocalStore",
    shortDescription:
      "Vendor marketplace with agentic chatbot and cosine recommendation system.",
    longDescription:
      "LocalStore connecte les vendeurs locaux à leurs clients via une marketplace moderne. Un chatbot agentique guide les utilisateurs dans leurs achats, tandis qu'un système de recommandation basé sur la similarité cosinus propose des produits pertinents selon l'historique et les préférences.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL"],
    role: "Full-stack / AI",
    year: "2024",
    highlights: [
      "Chatbot agentique intégré",
      "Recommandations par similarité cosinus",
      "Dashboard vendeur complet",
      "Paiement mobile intégré",
    ],
    theme: "localstore",
    side: "left",
  },
  {
    id: "04",
    name: "EcoSolve",
    shortDescription:
      "Farmers marketplace with AI planting calendar, chatbot, and social features.",
    longDescription:
      "EcoSolve est une plateforme sociale et commerciale dédiée aux agriculteurs. Elle combine une marketplace, un calendrier de plantation optimisé par IA selon les données météo et pédologiques locales, un chatbot d'assistance, et des fonctionnalités sociales pour échanger entre pairs.",
    stack: ["Django", "React", "PostgreSQL", "Tailwind"],
    role: "Full-stack Developer",
    year: "2023",
    highlights: [
      "Calendrier de plantation IA",
      "Marketplace agricole",
      "Réseau social entre agriculteurs",
      "Assistant chatbot",
    ],
    theme: "ecosolve",
    side: "right",
  },
  {
    id: "05",
    name: "EduTrust",
    shortDescription:
      "Student payments platform for schools and institutions.",
    longDescription:
      "EduTrust digitalise les paiements scolaires pour les établissements et les familles. La plateforme gère les échéanciers, les reçus numériques, les rappels automatiques et offre une vue consolidée aux administrateurs.",
    stack: ["Django", "React", "PostgreSQL", "Tailwind"],
    role: "Full-stack Developer",
    year: "2023",
    highlights: [
      "Paiements Mobile Money",
      "Échéanciers automatisés",
      "Reçus numériques",
      "Dashboard administrateur",
    ],
    theme: "edutrust",
    side: "left",
  },
  {
    id: "06",
    name: "AIO Online Service",
    shortDescription:
      "Electron app for local offline tools and automation with Node.js and Python.",
    longDescription:
      "AIO est une application desktop Electron qui regroupe une suite d'outils offline pour l'automatisation, la conversion de fichiers et l'assistance IA locale. Elle combine un front Node.js et des scripts Python pour les traitements lourds.",
    stack: ["Electron", "Node.js", "Python", "LLM"],
    role: "Desktop / AI Developer",
    year: "2024",
    highlights: [
      "100% offline, aucune donnée envoyée",
      "LLM local intégré",
      "Automatisation de tâches",
      "Multi-plateforme (Win/Mac/Linux)",
    ],
    theme: "aioservice",
    side: "right",
  },
];
