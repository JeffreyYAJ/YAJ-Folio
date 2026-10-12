import styles from "./styles/hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Ligne pointillée centrale */}

      {/* ===== BLOC INTRO (nouveau) ===== */}
      <div className={styles.heroIntro}>
        <h1 className={styles.heroTitle}>
          I Design Experiences
          <br />
          That Make An <span className={styles.heroAccent}>Impact</span>
          <br />
          <span className={styles.heroAccent}>Daily</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Bridging sensitive UI/UX craftsmanship with reactive frontend architecture.
          <br />
          Bringing thoughtful aesthetics to scalable digital software.
        </p>
      </div>
      <div className={styles.heroLine} aria-hidden="true" />

      <div className={styles.heroGrid}>
        {/* ===== CÔTÉ DESIGNER ===== */}
        <div className={`${styles.col} ${styles.colLeft}`}>
          <span className={`${styles.eyebrow} ${styles.eyebrowDesign}`}>
            01 · UI/UX &amp; DESIGN
          </span>

          <h1 className={`${styles.title} ${styles.titleDesign}`}>
            &ldquo;Crafting emotional interfaces with{" "}
            <span className={styles.titleHighlight}>pixel-level</span> devotion.&rdquo;
          </h1>

          <p className={styles.quote}>
            Visual harmony, typography discipline, intuitive gestures, design
            tokens, and obsessive attention to spatial balance.
          </p>

          <div className={styles.chips}>
            <span className={styles.chip}>Figma Variables</span>
            <span className={styles.chip}>Design Systems</span>
            <span className={styles.chip}>Micro-motion</span>
          </div>
        </div>

        {/* ===== PORTRAIT CENTRAL (structure d'origine) ===== */}
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
            02 · FULL-STACK ARCHITECTURE
          </span>

          <h2 className={`${styles.title} ${styles.titleDev}`}>
            &lt;Architecting /&gt;
            <br />
            High-Scale Systems
          </h2>

          <p className={styles.quote}>
            Type-safe React 19, zero-bundle overheads, reactive state engines,
            Next.js server actions, and cloud infrastructure ready to ship.
          </p>

          <div className={styles.chips}>
            <span className={styles.chip}>TypeScript 5</span>
            <span className={styles.chip}>Next.js 14+</span>
            <span className={styles.chip}>WebGL/Three</span>
          </div>
        </div>
      </div>
    </section>
  );
}
