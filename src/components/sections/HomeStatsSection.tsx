"use client";

import Link from "next/link";

import { Reveal } from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { homeStats } from "@/lib/data/pages";

export function HomeStatsSection() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02] py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {homeStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function HomeAboutTeaser() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Backend engineer. AI builder. Open-source contributor.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-lg leading-relaxed text-zinc-400">
            I design systems that scale — APIs, ML pipelines, and developer tools used in
            the wild. From Kali Linux themes to AgriTech computer vision, my work spans
            infrastructure and intelligence.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Read my story →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
