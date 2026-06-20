"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
};

export function Card({ children, className, hover = true, glow = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        "glass glow-border rounded-3xl p-6",
        glow && "hover:shadow-lg hover:shadow-indigo-500/10",
        className,
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
