import type { Metadata } from "next";

import { OpenSourceSection } from "@/components/sections/OpenSourceSection";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMeta } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Open Source — Jeffrey YAJ",
  description: pageMeta.openSource.subtitle,
};

export default function OpenSourcePage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Community"
        title={pageMeta.openSource.title}
        subtitle={pageMeta.openSource.subtitle}
      />
      <OpenSourceSection showHeader={false} />
    </main>
  );
}
