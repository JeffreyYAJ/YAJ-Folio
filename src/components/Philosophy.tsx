import styles from "./styles/philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={styles.philosophy}>
      <div className="container">
        <blockquote className={styles.quote}>
          <p className={styles.text}>
            Design is intelligence made visible.
            <span className={styles.divider}>
              <span className={styles.dividerDot} />
            </span>
            <em>Code is poetry that runs.</em>
          </p>

          <footer className={styles.author}>Jeffrey YAJ</footer>
        </blockquote>
      </div>
    </section>
  );
}
