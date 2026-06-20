"use client";

import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";

import { TextReveal } from "@/components/animations/MagneticWrapper";
import { Reveal } from "@/components/animations/Reveal";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { Button } from "@/components/ui/Button";
import { ParticleField } from "@/components/ui/ParticleField";
import { SocialLink } from "@/components/ui/SocialLink";
import { siteConfig, socialLinks } from "@/lib/data/site";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-0 flex-col items-center justify-center overflow-hidden px-6 pt-24"
      aria-labelledby="hero-heading"
    >
      <AnimatedGradient />
      <ParticleField />
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <Reveal delay={0.1}>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
            Portfolio 2026
          </p>
        </Reveal>

        <h1
          id="hero-heading"
          className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        >
          <TextReveal
            text={siteConfig.name}
            as="span"
            className="text-gradient block"
          />
        </h1>

        <div className="mt-4 overflow-hidden">
          <TextReveal
            text={siteConfig.title}
            as="p"
            className="text-xl text-zinc-400 md:text-2xl"
            delay={0.3}
          />
        </div>

        <Reveal delay={0.5}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500">
            {siteConfig.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#projects">View Projects</Button>
            <Button variant="outline" href={siteConfig.cvUrl} magnetic={false}>
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="mt-10 flex items-center gap-3">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} link={link} />
            ))}
          </div>
        </Reveal>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
