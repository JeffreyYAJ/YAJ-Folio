"use client";

import { cn } from "@/lib/utils/cn";

import { ParticleField } from "@/components/ui/ParticleField";

export function PageBackground({ intense = false }: { intense?: boolean }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0f0a1f_0%,#050505_45%,#020202_100%)]" />

      <div
        className={cn(
          "absolute -left-[10%] top-[-10%] h-[70vh] w-[70vh] animate-[pulse_8s_ease-in-out_infinite] rounded-full blur-[100px]",
          intense ? "bg-indigo-600/50" : "bg-indigo-600/35",
        )}
      />
      <div
        className={cn(
          "absolute -right-[5%] top-[10%] h-[60vh] w-[60vh] animate-[pulse_10s_ease-in-out_infinite_2s] rounded-full blur-[90px]",
          intense ? "bg-purple-600/45" : "bg-purple-600/30",
        )}
      />
      <div
        className={cn(
          "absolute bottom-[-10%] left-[20%] h-[50vh] w-[50vh] animate-[pulse_12s_ease-in-out_infinite_1s] rounded-full blur-[80px]",
          intense ? "bg-blue-600/40" : "bg-blue-600/25",
        )}
      />
      <div
        className={cn(
          "absolute bottom-[20%] right-[25%] h-[35vh] w-[35vh] animate-[pulse_14s_ease-in-out_infinite_3s] rounded-full blur-[70px]",
          intense ? "bg-violet-500/35" : "bg-violet-500/20",
        )}
      />

      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,5,5,0.3)_50%,rgba(5,5,5,0.85)_100%)]" />

      <ParticleField />
    </div>
  );
}
