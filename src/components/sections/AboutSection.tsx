"use client";

import { Code2, Compass, Rocket } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { siteConfig } from "@/lib/data/site";
import { timelineEntries } from "@/lib/data/timeline";

const storyCards = [
  {
    icon: Code2,
    title: "Engineer",
    description:
      "I architect robust backends and AI pipelines — from REST APIs to computer vision models deployed in production.",
  },
  {
    icon: Rocket,
    title: "Builder",
    description:
      "From hackathon winners to open-source themes with 18+ stars, I ship products that solve real problems.",
  },
  {
    icon: Compass,
    title: "Explorer",
    description:
      "Quantum computing, graph neural networks, operating systems — I chase depth across disciplines.",
  },
];

export function AboutSection() {
  const educationHighlights = timelineEntries.filter((e) => e.type === "education");

  return (
    <SectionWrapper id="about" labelledBy="about-heading">
      <div className="grid items-start gap-16 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="About Me"
            title="Crafting the future, one system at a time"
            subtitle={siteConfig.bio}
          />
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/50 to-purple-950/30">
            <Image
              src="/assets/about/avatar.svg"
              alt="Jeffrey YAJ — abstract avatar"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-xl">
            <p className="text-xs text-zinc-500">Based in</p>
            <p className="text-sm font-medium text-white">{siteConfig.location}</p>
          </div>
        </Reveal>
      </div>

      <StaggerContainer className="mt-20 grid gap-6 md:grid-cols-3">
        {storyCards.map((card) => (
          <StaggerItem key={card.title}>
            <Card className="h-full">
              <card.icon className="mb-4 h-8 w-8 text-indigo-400" />
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {card.description}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Reveal delay={0.3} className="mt-16">
        <div className="glass rounded-3xl p-6 md:p-8">
          <h3 id="about-heading" className="mb-6 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Education Highlights
          </h3>
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            {educationHighlights.map((entry) => (
              <div key={entry.id} className="flex-1">
                <p className="text-sm text-indigo-400">{entry.year}</p>
                <p className="mt-1 font-medium text-white">{entry.title}</p>
                <p className="text-sm text-zinc-500">{entry.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
