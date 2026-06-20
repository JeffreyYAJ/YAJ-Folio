"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(pointer: fine)");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 350, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 350, damping: 28 });

  useEffect(() => {
    if (reducedMotion || !isDesktop) {
      document.body.classList.remove("custom-cursor");
      return;
    }

    document.body.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor");
    };
  }, [cursorX, cursorY, isDesktop, reducedMotion]);

  if (reducedMotion || !isDesktop) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/50 mix-blend-difference"
        style={{ x: springX, y: springY }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400"
        style={{ x: cursorX, y: cursorY }}
        aria-hidden="true"
      />
    </>
  );
}

export function Spotlight() {
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(pointer: fine)");

  useEffect(() => {
    if (reducedMotion || !isDesktop) return;

    const el = document.getElementById("spotlight");
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(99,102,241,0.08), transparent 40%)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop, reducedMotion]);

  if (reducedMotion || !isDesktop) return null;

  return (
    <div
      id="spotlight"
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}
