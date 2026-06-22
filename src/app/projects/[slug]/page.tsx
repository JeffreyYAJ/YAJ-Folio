import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { GitHubIcon } from "@/components/ui/BrandIcons";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb, PageHeader } from "@/components/layout/PageHeader";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Jeffrey YAJ`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main id="main-content">
      <PageHeader eyebrow="Project" title={project.title} subtitle={project.tagline}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.title },
          ]}
        />
      </PageHeader>

      <article className="mx-auto max-w-5xl px-6 pb-32 md:px-8">
        <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">{project.description}</p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Built with a focus on production quality, clean architecture, and real-world
              impact. This project reflects my approach to solving complex problems with
              pragmatic engineering.
            </p>
          </div>

          <aside className="glass h-fit rounded-3xl p-6">
            <h3 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Details
            </h3>
            {project.metrics && (
              <dl className="mt-4 space-y-3">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-xs text-zinc-500">{m.label}</dt>
                    <dd className="font-medium text-white">{m.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Tech Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white hover:border-indigo-400/40"
                >
                  <GitHubIcon className="h-4 w-4" /> View on GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl accent-gradient px-4 py-2.5 text-sm text-white"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
            </div>
          </aside>
        </div>

        <Link
          href="/projects"
          className="mt-12 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all projects
        </Link>
      </article>
    </main>
  );
}
