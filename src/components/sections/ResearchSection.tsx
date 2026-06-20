"use client";

import {
  Atom,
  Brain,
  Cpu,
  Infinity,
  Layers,
  MessageSquare,
  Network,
  Scan,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

import { TiltCard } from "@/components/animations/MagneticWrapper";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { researchTopics } from "@/lib/data/research";

const iconMap = {
  atom: Atom,
  circuit: Zap,
  infinity: Infinity,
  layers: Layers,
  terminal: Terminal,
  sparkles: Sparkles,
  scan: Scan,
  network: Network,
  message: MessageSquare,
  brain: Brain,
  cpu: Cpu,
};

export function ResearchSection() {
  return (
    <SectionWrapper id="research" labelledBy="research-heading">
      <SectionHeader
        eyebrow="Research & Experiments"
        title="Curiosity-driven exploration"
        subtitle="The edge of knowledge is where the most interesting engineering problems live."
        align="center"
        className="mx-auto"
      />

      <h2 id="research-heading" className="sr-only">
        Research and Experiments
      </h2>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {researchTopics.map((topic) => {
          const Icon = iconMap[topic.icon as keyof typeof iconMap] ?? Brain;

          return (
            <StaggerItem key={topic.id}>
              <TiltCard className="h-full">
                <div className="glass glow-border h-full rounded-3xl p-6 transition-shadow hover:shadow-lg hover:shadow-indigo-500/10">
                  <Icon className="h-7 w-7 text-purple-400" />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {topic.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {topic.tags.map((tag) => (
                      <Badge key={tag} className="border-purple-500/20 bg-purple-500/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </SectionWrapper>
  );
}
