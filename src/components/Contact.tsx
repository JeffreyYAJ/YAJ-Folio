"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import styles from "./styles/contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    // Ici : brancher sur Formspree, Resend, EmailJS, ou ton API
    // Exemple avec Formspree : POST vers https://formspree.io/f/xxx
    await new Promise((r) => setTimeout(r, 1200)); // simulation

    setStatus("success");
  }

  if (status === "success") {
    return (
      <section id="contact" className={styles.contact}>
        <div className="container">
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <Check size={24} />
            </div>
            <h3 className={styles.successTitle}>Message envoyé</h3>
            <p className={styles.successText}>
              Merci, je te répondrai dès que possible.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.kicker}>// CONTACT</span>
          <h2 className={styles.title}>Let&apos;s create together</h2>
          <p className={styles.subtitle}>
            Un projet, une idée, une question ? Écris-moi, je réponds vite.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={styles.input}
              placeholder="Ton nom"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="ton@email.com"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className={styles.textarea}
              placeholder="Parle-moi de ton projet..."
            />
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Envoi..." : "Envoyer le message"}
            {status !== "loading" && <Send size={14} />}
          </button>
        </form>
      </div>
    </section>
  );
}
