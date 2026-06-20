"use client";

import { cn } from "@/lib/utils/cn";

export function NoiseOverlay({ className }: { className?: string }) {
  return <div className={cn("noise-overlay", className)} aria-hidden="true" />;
}
