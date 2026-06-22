"use client";

import { cn } from "@/lib/utils/cn";

export function AnimatedGradient({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-indigo-600/45 blur-[120px]" />
      <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] animate-[pulse_10s_ease-in-out_infinite_2s] rounded-full bg-purple-600/35 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] animate-[pulse_12s_ease-in-out_infinite_1s] rounded-full bg-blue-600/30 blur-[80px]" />
    </div>
  );
}
