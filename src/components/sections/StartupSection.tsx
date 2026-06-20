"use client";

import { Lightbulb } from "lucide-react";

import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { startups } from "@/lib/data/startups";
import { cn } from "@/lib/utils/cn";

const statusStyles = {
  active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  completed: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  concept: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function StartupSection() {
  return (
    <SectionWrapper id="startups" labelledBy="startups-heading">
      <SectionHeader
        eyebrow="Entrepreneurial Journey"
        title="Product thinking in action"
        subtitle="Startups aren't just code — they're problems worth solving, users worth serving, and systems worth building."
      />

      <StaggerContainer className="grid gap-6 md:grid-cols-2">
        {startups.map((startup) => {
          const isFuture = startup.id === "future-ideas";

          return (
            <StaggerItem key={startup.id}>
              <Card
                className={cn(
                  "h-full",
                  isFuture && "border-dashed border-white/20 bg-transparent",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      {isFuture && <Lightbulb className="h-5 w-5 text-amber-400" />}
                      <h3 id="startups-heading" className="text-xl font-semibold text-white">
                        {startup.name}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-indigo-400">{startup.tagline}</p>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 rounded-full border px-3 py-1 text-xs font-medium capitalize",
                      statusStyles[startup.status],
                    )}
                  >
                    {startup.status}
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
                      Problem
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {startup.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
                      Solution
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {startup.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {startup.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </SectionWrapper>
  );
}
