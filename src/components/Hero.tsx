import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./styles/hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Ligne pointillée centrale */}
      <div className={styles.heroLine} aria-hidden="true" />

      <div className={styles.heroGrid}>
        {/* ===== CÔTÉ DESIGNER ===== */}
        <div className={`${styles.col} ${styles.colLeft}`}>
          <span className={`${styles.eyebrow} ${styles.eyebrowDesign}`}>
            // DESIGNER
          </span>

          <h1 className={`${styles.title} ${styles.titleDesign}`}>
            UI/UX Design
            <br />
            &amp; <span className={styles.titleHighlight}>Visual Identity</span>
          </h1>

          <p className={styles.quote}>
            I turn ideas into visual stories — from brand identity to interfaces,
            designed with clarity, emotion and impact.
          </p>

          <a href="#contact" className={`${styles.cta} ${styles.ctaDesign}`}>
            Let&apos;s talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* ===== PORTRAIT CENTRAL ===== */}
        <div className={styles.portrait}>
          <div className={styles.portraitGlow} aria-hidden="true" />
          <div className={styles.portraitPlaceholder}>
            <span>Your photo</span>
          </div>
          {/* Quand tu auras la photo :
          <Image
            src="/portrait.jpg"
            alt="Portrait"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          */}
        </div>

        {/* ===== CÔTÉ DEVELOPER ===== */}
        <div className={`${styles.col} ${styles.colRight}`}>
          <span className={`${styles.eyebrow} ${styles.eyebrowDev}`}>
            // DEVELOPER
          </span>

          <h2 className={`${styles.title} ${styles.titleDev}`}>
            Fullstack Dev
            <br />
            &amp; <span className={styles.titleHighlight}>AI Engineer</span>
          </h2>

          <p className={styles.quote}>
            I build scalable backends, automate with Linux, and explore AI
            to solve real problems and ship useful tools.
          </p>

          <a href="#work" className={`${styles.cta} ${styles.ctaDev}`}>
            View my work
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
