"use client";

import { motion } from "framer-motion";

import { SocialLink } from "@/components/ui/SocialLink";
import { siteConfig, socialLinks } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-zinc-500">{siteConfig.title}</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <SocialLink key={link.label} link={link} />
          ))}
        </div>

        <motion.p
          className="text-sm text-zinc-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} {siteConfig.name}. Crafted with precision.
        </motion.p>
      </div>
    </footer>
  );
}
