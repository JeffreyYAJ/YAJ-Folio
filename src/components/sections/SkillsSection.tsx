"use client";

import {
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  Eye,
  Layout,
  Server,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { skillGroups } from "@/lib/data/skills";
import { cn } from "@/lib/utils/cn";

const iconMap = {
  server: Server,
  brain: Brain,
  cpu: Cpu,
  eye: Eye,
  database: Database,
  terminal: Terminal,
  cloud: Cloud,
  layout: Layout,
  code: Code,
};

export function SkillsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <SectionWrapper id="skills" labelledBy="skills-heading">
      <SectionHeader
        eyebrow="Skills"
        title="Interactive expertise across the stack"
        subtitle="Hover a domain to explore the technologies I work with daily."
      />

      <h2 id="skills-heading" className="sr-only">
        Skills
      </h2>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap] ?? Code;
          const isActive = activeId === group.id;

          return (
            <StaggerItem key={group.id}>
              <motion.div
                className={cn(
                  "glass glow-border group cursor-default rounded-3xl p-6 transition-all duration-300",
                  isActive && "border-indigo-400/30 shadow-lg shadow-indigo-500/10",
                )}
                onMouseEnter={() => setActiveId(group.id)}
                onMouseLeave={() => setActiveId(null)}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-7 w-7 text-indigo-400" />
                  <span className="text-sm font-mono text-zinc-500">
                    {group.proficiency}%
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{group.description}</p>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full accent-gradient rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <motion.div
                  className="mt-4 flex flex-wrap gap-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    height: isActive ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {group.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </motion.div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </SectionWrapper>
  );
}
