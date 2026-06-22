import type { Metadata } from "next";

import { SkillsSection } from "@/components/sections/SkillsSection";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMeta } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Skills — Jeffrey YAJ",
  description: pageMeta.skills.subtitle,
};

export default function SkillsPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Expertise"
        title={pageMeta.skills.title}
        subtitle={pageMeta.skills.subtitle}
      />
      <SkillsSection showHeader={false} />
    </main>
  );
}
