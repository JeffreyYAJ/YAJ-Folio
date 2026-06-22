import type { Metadata } from "next";

import { StartupSection } from "@/components/sections/StartupSection";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMeta } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Startups — Jeffrey YAJ",
  description: pageMeta.startups.subtitle,
};

export default function StartupsPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Ventures"
        title={pageMeta.startups.title}
        subtitle={pageMeta.startups.subtitle}
      />
      <StartupSection showHeader={false} />
    </main>
  );
}
