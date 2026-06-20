"use client";

import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { SocialLink } from "@/components/ui/SocialLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { siteConfig, socialLinks } from "@/lib/data/site";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <SectionWrapper id="contact" labelledBy="contact-heading">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something remarkable"
            subtitle="Have a project in mind, an open-source collaboration, or just want to connect? I'd love to hear from you."
          />

          <Reveal delay={0.3}>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} link={link} />
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8"
            aria-labelledby="contact-heading"
          >
            <h3 id="contact-heading" className="sr-only">
              Contact form
            </h3>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-indigo-400/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-indigo-400/50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-zinc-400">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-indigo-400/50"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            <div className="relative mt-8">
              <Button type="submit" className="w-full" magnetic={false}>
                <Send className="h-4 w-4" />
                Send Message
              </Button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-0 right-0 text-center text-sm text-emerald-400"
                >
                  Opening your email client...
                </motion.p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
