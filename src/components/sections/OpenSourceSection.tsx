"use client";

import { Copy, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { Reveal } from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import {
  githubStats,
  hacktoberfestNote,
  pinnedRepos,
  ykaliStory,
} from "@/lib/data/open-source";

function ContributionGraph() {
  const weeks = 52;
  const days = 7;

  const getLevel = (w: number, d: number) => {
    const seed = (w * 7 + d) * 13;
    return seed % 5;
  };

  const colors = [
    "bg-white/5",
    "bg-emerald-900/40",
    "bg-emerald-700/50",
    "bg-emerald-500/60",
    "bg-emerald-400/70",
  ];

  return (
    <div className="overflow-x-auto" aria-label="GitHub contribution graph mock">
      <div className="inline-flex gap-[3px]">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }).map((_, d) => (
              <div
                key={d}
                className={`h-2.5 w-2.5 rounded-sm ${colors[getLevel(w, d)]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function OpenSourceSection() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(ykaliStory.installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="open-source" labelledBy="opensource-heading">
      <SectionHeader
        eyebrow="Open Source"
        title="Building in public"
        subtitle="Open source is where I learn fastest and give back to the community that shaped me."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: "Repositories", value: githubStats.repos },
          { label: "Followers", value: githubStats.followers },
          { label: "Total Stars", value: githubStats.stars },
        ].map((stat) => (
          <Reveal key={stat.label}>
            <Card hover={false} className="text-center">
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10">
        <Card hover={false}>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Contribution Activity
          </h3>
          <ContributionGraph />
        </Card>
      </Reveal>

      <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2">
        {pinnedRepos.map((repo) => (
          <StaggerItem key={repo.name}>
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              <Card className="h-full">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-indigo-300">{repo.name}</h3>
                  <span className="flex items-center gap-1 text-sm text-zinc-500">
                    <Star className="h-3.5 w-3.5" />
                    {repo.stars}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-400">{repo.description}</p>
                <p className="mt-4 text-xs text-zinc-600">{repo.language}</p>
              </Card>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Reveal delay={0.3} className="mt-10">
        <Card>
          <h3 id="opensource-heading" className="text-xl font-semibold text-white">
            {ykaliStory.title}
          </h3>
          <p className="mt-3 leading-relaxed text-zinc-400">{ykaliStory.content}</p>
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 p-4">
            <code className="flex-1 overflow-x-auto text-xs text-zinc-400 md:text-sm">
              {ykaliStory.installCommand}
            </code>
            <button
              type="button"
              onClick={copyCommand}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:text-white"
              aria-label="Copy install command"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
          {copied && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-xs text-emerald-400"
            >
              Copied to clipboard
            </motion.p>
          )}
        </Card>
      </Reveal>

      <Reveal delay={0.4} className="mt-6">
        <p className="text-center text-sm text-zinc-500">{hacktoberfestNote}</p>
      </Reveal>
    </SectionWrapper>
  );
}
