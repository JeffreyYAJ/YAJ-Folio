"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { explorePages } from "@/lib/data/pages";

export function HomeExploreSection() {
  return (
    <SectionWrapper id="explore">
      <SectionHeader
        eyebrow="Explore"
        title="Dive deeper into my work"
        subtitle="Each section lives on its own page — richer content, focused storytelling, and room to breathe."
      />

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {explorePages.map((page) => (
          <StaggerItem key={page.href}>
            <Link href={page.href} className="block h-full">
              <Card className="group h-full">
                <div className="flex items-start justify-between">
                  <page.icon className="h-7 w-7 text-indigo-400 transition-colors group-hover:text-indigo-300" />
                  <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{page.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{page.description}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-widest text-indigo-400/80">
                  {page.stat}
                </p>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
