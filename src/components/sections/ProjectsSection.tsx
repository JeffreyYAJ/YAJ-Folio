"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Reveal } from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { featuredProjects, projects } from "@/lib/data/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/utils/cn";

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <motion.article
        layout
        className={cn(
          "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]",
          featured && "md:col-span-2 md:row-span-2",
        )}
        whileHover={{ y: -4 }}
      >
        <div className={cn("relative w-full", featured ? "aspect-[16/10]" : "aspect-video")}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-xs font-medium uppercase tracking-widest text-indigo-400">
            {project.tagline}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white md:text-2xl">
            {project.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          {project.metrics && (
            <div className="mt-4 flex gap-6">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-xs text-zinc-500">{m.label}</p>
                  <p className="text-sm font-medium text-white">{m.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.article>
    </Link>
  );
}

type ProjectsSectionProps = {
  showHeader?: boolean;
};

export function ProjectsSection({ showHeader = true }: ProjectsSectionProps) {
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" labelledBy="projects-heading">
      {showHeader && (
        <SectionHeader
          eyebrow="Featured Projects"
          title="Work that pushes boundaries"
          subtitle="From AI-powered civic tools to open-source terminal themes — each project tells a story of craft and impact."
        />
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} featured />
        ))}
      </div>

      <Reveal delay={0.2} className="mt-16">
        <h3 id="projects-heading" className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-500">
          More Projects
        </h3>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Reveal>
    </SectionWrapper>
  );
}
