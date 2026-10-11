"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { navLinks, siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={cn(
            "flex w-full max-w-[1280px] items-center justify-between rounded-[20px] border border-[#c9c3b5] bg-[#f5f1e9]/90 px-5 py-3 shadow-[0_1px_0_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-300 md:px-7",
            scrolled || pathname !== "/"
              ? "shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              : "",
          )}
          role="navigation"
          aria-label="Main navigation"
        >
          <Link href="/" className="flex items-center gap-3 text-[15px] font-semibold tracking-[-0.04em] text-[#101820]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1d1d1d] bg-[#101820] text-[11px] font-bold text-[#f4efe6]">JY</span>
            <span>{siteConfig.name}</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[13px] font-medium transition-colors",
                    active ? "text-[#101820]" : "text-[#4a4a4a] hover:text-[#101820]",
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#1b9cc5]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-[#101820]">
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border border-[#bdb7ac] bg-white/30 text-[14px]" aria-label="Search">
              ⌕
            </button>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border border-[#bdb7ac] bg-white/30 text-[14px]" aria-label="Toggle menu">
              ☼
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdb7ac] bg-[#f3efe8] text-[#101820] lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-6">
              <Link href="/" className="text-2xl font-medium text-white">
                Home
              </Link>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={link.href} className="text-2xl font-medium text-white">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
