import type { ResearchTopic } from "@/types";

export const researchTopics: ResearchTopic[] = [
  {
    id: "quantum",
    title: "Quantum Computing",
    description:
      "Exploring quantum algorithms and their potential for optimization problems in cryptography and machine learning.",
    tags: ["Qiskit", "Superposition", "Algorithms"],
    icon: "atom",
  },
  {
    id: "qiskit",
    title: "Qiskit Experiments",
    description:
      "Hands-on quantum circuit design with IBM's Qiskit framework — running simulations and studying gate decomposition.",
    tags: ["IBM Quantum", "Circuits", "Simulation"],
    icon: "circuit",
  },
  {
    id: "toc",
    title: "Theory of Computation",
    description:
      "Deep dives into automata, computability, complexity classes, and the mathematical foundations of what machines can compute.",
    tags: ["Automata", "P vs NP", "Turing"],
    icon: "infinity",
  },
  {
    id: "os",
    title: "Operating Systems",
    description:
      "Kernel internals, process scheduling, memory management, and building intuition for systems-level programming.",
    tags: ["Kernels", "Scheduling", "Memory"],
    icon: "layers",
  },
  {
    id: "linux-kernel",
    title: "Linux Internals",
    description:
      "From shell customization to systemd services and GRUB theming — living and breathing the Linux ecosystem daily.",
    tags: ["systemd", "Shell", "Sysadmin"],
    icon: "terminal",
  },
  {
    id: "ai-research",
    title: "Applied AI",
    description:
      "Bridging research papers and production — deploying models for real-world problems in agriculture, health, and civic tech.",
    tags: ["Deployment", "MLOps", "Inference"],
    icon: "sparkles",
  },
  {
    id: "cv-research",
    title: "Computer Vision",
    description:
      "Object-centric SLAM, disease detection, and real-time visual pipelines — pushing CV beyond notebooks into the field.",
    tags: ["SLAM", "Detection", "Real-time"],
    icon: "scan",
  },
  {
    id: "gnn",
    title: "Graph Neural Networks",
    description:
      "Studying GNN architectures for relational data — social graphs, molecular structures, and knowledge graph reasoning.",
    tags: ["PyG", "Message Passing", "Graphs"],
    icon: "network",
  },
  {
    id: "llm",
    title: "Large Language Models",
    description:
      "Fine-tuning, quantization, and efficient inference of LLMs on constrained hardware — making AI accessible locally.",
    tags: ["LoRA", "Quantization", "Fine-tuning"],
    icon: "message",
  },
];
