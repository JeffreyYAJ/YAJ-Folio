"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { featuredProjects } from "@/lib/data/projects";

export function HomeFeaturedSection() {
  return (
    <SectionWrapper id="featured">
      <SectionHeader
        eyebrow="Featured Work"
        title="Projects that define my craft"
        subtitle="A selection of AI, backend, and product work — from hackathon wins to open-source tools with real adoption."
      />

      <StaggerContainer className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <StaggerItem key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="group block h-full">
              <article className="glass glow-border h-full overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-indigo-400">
                    {project.tagline}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Reveal delay={0.3} className="mt-10 flex justify-center">
        <Button href="/projects">
          View all projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Reveal>
    </SectionWrapper>
  );
}
