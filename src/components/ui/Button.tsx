"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

import { MagneticWrapper } from "@/components/animations/MagneticWrapper";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "ghost" | "outline";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: ButtonVariant;
  magnetic?: boolean;
  href?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "accent-gradient text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40",
  ghost: "bg-white/5 text-foreground hover:bg-white/10 border border-white/10",
  outline:
    "bg-transparent text-foreground border border-white/20 hover:border-indigo-400/50 hover:bg-white/5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      magnetic = true,
      children,
      href,
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      "relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
      variants[variant],
      className,
    );

    if (href) {
      return (
        <MagneticWrapper disabled={!magnetic}>
          <motion.a
            href={href}
            className={classes}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {children}
          </motion.a>
        </MagneticWrapper>
      );
    }

    const button = (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );

    if (!magnetic) return button;
    return <MagneticWrapper>{button}</MagneticWrapper>;
  },
);

Button.displayName = "Button";
