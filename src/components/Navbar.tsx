"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles/navbar.module.css";

const LINKS = [
  { label: "Home", href: "#home", section: "hero" },
  { label: "Expertise", href: "#expertise", section: "expertise" },
  { label: "Work", href: "#work", section: "work" },
  { label: "Contact", href: "#contact", section: "contact" },
] as const;

type SectionId = (typeof LINKS)[number]["section"];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Scroll spy : met à jour l'onglet actif selon la section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = LINKS.findIndex(
              (l) => l.section === (entry.target.id as SectionId)
            );
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    LINKS.forEach((link) => {
      const el = document.getElementById(link.section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Positionne l'indicateur glissant
  useEffect(() => {
    const target = hoveredIndex ?? activeIndex;
    const el = linkRefs.current[target];
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeIndex, hoveredIndex]);

  // Couleur de l'indicateur selon la section
  const sectionColor =
    LINKS[hoveredIndex ?? activeIndex].section === "expertise" ||
    LINKS[hoveredIndex ?? activeIndex].section === "work"
      ? styles.indicatorDev
      : styles.indicatorDesign;

  return (
    <nav className={styles.navbar} aria-label="Navigation principale">
      <div className={styles.pill}>
        {/* Indicateur glissant */}
        <span
          className={`${styles.indicator} ${sectionColor}`}
          style={{
            transform: `translateX(${indicatorStyle.left}px)`,
            width: indicatorStyle.width,
          }}
          aria-hidden="true"
        />

        {/* Liens */}
        {LINKS.map((link, i) => (
          <a
            key={link.href}
            ref={(el) => {
              linkRefs.current[i] = el;
            }}
            href={link.href}
            className={`${styles.link} ${
              activeIndex === i ? styles.linkActive : ""
            }`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-current={activeIndex === i ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}

        {/* CTA optionnel */}
        <a href="#contact" className={styles.cta}>
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}
