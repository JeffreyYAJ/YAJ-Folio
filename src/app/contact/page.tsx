import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/ContactSection";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMeta } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Contact — Jeffrey YAJ",
  description: pageMeta.contact.subtitle,
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Let's talk"
        title={pageMeta.contact.title}
        subtitle={pageMeta.contact.subtitle}
      />
      <ContactSection showHeader={false} />
    </main>
  );
}
