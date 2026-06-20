"use client";

import { ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { GitHubIcon } from "@/components/ui/BrandIcons";

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
  onSelect,
  isSelected,
}: {
  project: Project;
  featured?: boolean;
  onSelect: (slug: string) => void;
  isSelected: boolean;
}) {
  return (
    <motion.article
      layout
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]",
        featured && "md:col-span-2 md:row-span-2",
        isSelected && "ring-2 ring-indigo-400/50",
      )}
      onClick={() => onSelect(project.slug)}
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
  );
}

export function ProjectsSection() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selected = projects.find((p) => p.slug === selectedSlug);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" labelledBy="projects-heading">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Work that pushes boundaries"
        subtitle="From AI-powered civic tools to open-source terminal themes — each project tells a story of craft and impact."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featured
            onSelect={setSelectedSlug}
            isSelected={selectedSlug === project.slug}
          />
        ))}
      </div>

      <Reveal delay={0.2} className="mt-16">
        <h3 className="mb-8 text-sm font-medium uppercase tracking-widest text-zinc-500">
          More Projects
        </h3>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard
                project={project}
                onSelect={setSelectedSlug}
                isSelected={selectedSlug === project.slug}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Reveal>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSlug(null)}
          >
            <motion.div
              className="glass max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-labelledby="project-dialog-title"
            >
              <h3 id="project-dialog-title" className="text-2xl font-semibold text-white">
                {selected.title}
              </h3>
              <p className="mt-1 text-indigo-400">{selected.tagline}</p>
              <p className="mt-4 leading-relaxed text-zinc-400">{selected.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:border-indigo-400/40"
                  >
                    <GitHubIcon className="h-4 w-4" /> GitHub
                  </a>
                )}
                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-white hover:border-indigo-400/40"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedSlug(null)}
                className="mt-6 text-sm text-zinc-500 hover:text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
