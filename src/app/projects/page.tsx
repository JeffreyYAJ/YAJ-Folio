import type { Metadata } from "next";

import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMeta } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Projects — Jeffrey YAJ",
  description: pageMeta.projects.subtitle,
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Work"
        title={pageMeta.projects.title}
        subtitle={pageMeta.projects.subtitle}
      />
      <ProjectsSection showHeader={false} />
    </main>
  );
}
