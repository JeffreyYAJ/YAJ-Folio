"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils/cn";
import type { SocialLink as SocialLinkType } from "@/types";

const icons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
};

type SocialLinkProps = {
  link: SocialLinkType;
  className?: string;
};

export function SocialLink({ link, className }: SocialLinkProps) {
  const Icon = icons[link.icon];

  return (
    <motion.a
      href={link.href}
      target={link.icon === "email" ? undefined : "_blank"}
      rel={link.icon === "email" ? undefined : "noopener noreferrer"}
      aria-label={link.label}
      className={cn(
        "group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-indigo-400/40 hover:text-white",
        className,
      )}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="h-5 w-5 transition-colors group-hover:text-indigo-300" />
    </motion.a>
  );
}
