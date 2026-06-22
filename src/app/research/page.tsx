import type { Metadata } from "next";

import { ResearchSection } from "@/components/sections/ResearchSection";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMeta } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Research — Jeffrey YAJ",
  description: pageMeta.research.subtitle,
};

export default function ResearchPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Curiosity"
        title={pageMeta.research.title}
        subtitle={pageMeta.research.subtitle}
      />
      <ResearchSection showHeader={false} />
    </main>
  );
}
