"use client";

import { useEffect } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import styles from "./styles/modal.module.css";
import type { Project } from "@/data/content";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  // Ferme avec Échap
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    // Bloque le scroll du body
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Fermer"
        >
          <X size={18} />
        </button>

        <div className={styles.content}>
          {/* En-tête */}
          <header className={styles.header}>
            <span className={styles.index}>PROJECT · {project.id}</span>
            <h2 id="modal-title" className={styles.title}>
              {project.name}
            </h2>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <strong>Rôle</strong> {project.role}
              </span>
              <span className={styles.metaItem}>
                <strong>Année</strong> {project.year}
              </span>
            </div>
          </header>

          {/* Description */}
          <p className={styles.description}>{project.longDescription}</p>

          {/* Highlights */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>// Points clés</h3>
            <ul className={styles.highlights}>
              {project.highlights.map((h) => (
                <li key={h} className={styles.highlight}>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>// Stack technique</h3>
            <div className={styles.tags}>
              {project.stack.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          {(project.liveUrl || project.githubUrl) && (
            <div className={styles.actions}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.action} ${styles.actionPrimary}`}
                >
                  Voir le site <ExternalLink size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.action} ${styles.actionSecondary}`}
                >
                  Code source <Github size={14} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
