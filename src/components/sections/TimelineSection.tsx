"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { timelineEntries } from "@/lib/data/timeline";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils/cn";

const typeColors = {
  education: "border-blue-400/50 bg-blue-400/10",
  project: "border-indigo-400/50 bg-indigo-400/10",
  milestone: "border-purple-400/50 bg-purple-400/10",
  achievement: "border-emerald-400/50 bg-emerald-400/10",
};

export function TimelineSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 40%",
              scrub: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <SectionWrapper id="timeline" labelledBy="timeline-heading">
      <SectionHeader
        eyebrow="Experience Timeline"
        title="The path so far"
        subtitle="Education, projects, milestones, and achievements — an interactive journey."
      />

      <div ref={containerRef} className="relative mx-auto max-w-3xl">
        <div
          className="absolute left-4 top-0 h-full w-px origin-top bg-white/10 md:left-1/2 md:-translate-x-px"
          aria-hidden="true"
        >
          <div
            ref={lineRef}
            className="h-full w-full origin-top accent-gradient"
            style={{ transform: reducedMotion ? "scaleY(1)" : "scaleY(0)" }}
          />
        </div>

        <div className="space-y-12">
          {timelineEntries.map((entry, i) => {
            const isLeft = i % 2 === 0;

            return (
              <Reveal key={entry.id} delay={i * 0.05}>
                <div
                  className={cn(
                    "relative flex items-start gap-8 md:gap-0",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse",
                  )}
                >
                  <div
                    className={cn(
                      "hidden flex-1 md:block",
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left",
                    )}
                  >
                    <span className="text-sm font-mono text-indigo-400">{entry.year}</span>
                  </div>

                  <div
                    className={cn(
                      "relative z-10 ml-4 flex h-3 w-3 shrink-0 rounded-full border-2 md:ml-0 md:mx-auto",
                      typeColors[entry.type],
                    )}
                    aria-hidden="true"
                  />

                  <div className={cn("flex-1 md:max-w-[calc(50%-2rem)]", isLeft ? "md:pl-12" : "md:pr-12")}>
                    <span className="text-sm font-mono text-indigo-400 md:hidden">
                      {entry.year}
                    </span>
                    <div className="glass mt-2 rounded-2xl p-5">
                      <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                        {entry.type}
                      </span>
                      <h3 id="timeline-heading" className="mt-1 font-semibold text-white">
                        {entry.title}
                      </h3>
                      <p className="text-sm text-indigo-300">{entry.organization}</p>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
