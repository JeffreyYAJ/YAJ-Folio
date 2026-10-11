import styles from "./styles/expertise.module.css";
import { designSkills, devSkills } from "@/data/content";

export default function Expertise() {
  return (
    <section id="expertise" className={styles.expertise}>
      <div className="container">
        {/* En-tête */}
        <header className={styles.header}>
          <span className={styles.kicker}>// DUAL COMPETENCY</span>
          <h2 className={styles.title}>Skills &amp; Tools</h2>
          <span className={styles.badge}>Design × Development</span>
        </header>

        {/* Grille 2 colonnes */}
        <div className={styles.grid}>
          {/* Côté Design */}
          <div className={`${styles.column} ${styles.colDesign}`}>
            <h3 className={styles.columnTitle}>Design</h3>
            <ul className={styles.skillList}>
              {designSkills.map((name) => (
                <li key={name} className={styles.skill}>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Côté Dev */}
          <div className={`${styles.column} ${styles.colDev}`}>
            <h3 className={styles.columnTitle}>Development</h3>
            <ul className={styles.skillList}>
              {devSkills.map((name) => (
                <li key={name} className={styles.skill}>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
