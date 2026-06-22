import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/AboutSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMeta } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "About — Jeffrey YAJ",
  description: pageMeta.about.subtitle,
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="About"
        title={pageMeta.about.title}
        subtitle={pageMeta.about.subtitle}
      />
      <AboutSection compact />
      <TimelineSection />
    </main>
  );
}
