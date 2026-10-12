"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./styles/work.module.css";
import { projects, type Project } from "@/data/content";
import ProjectModal from "./ProjectModal";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className={styles.work}>
      <div className="container">
        {/* En-tête */}
        <header className={styles.header}>
          <span className={styles.kicker}>// PROJECTS</span>
          <h2 className={styles.title}>Works</h2>
          <p className={styles.subtitle}>
            A selection of projects where design, development and AI come together.
          </p>
        </header>

        {/* Timeline */}
        <div className={styles.timeline}>
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className={`${styles.card} ${
                project.side === "left" ? styles.cardLeft : styles.cardRight
              }`}
              onClick={() => setSelectedProject(project)}
              aria-label={`Voir les détails du projet ${project.name}`}
            >
              <div className={styles.cardInner}>
                <span className={styles.cardIndex}>{project.id}</span>
                <h3 className={styles.cardName}>{project.name}</h3>
                <p className={styles.cardDescription}>
                  {project.shortDescription}
                </p>
                <div className={styles.tags}>
                  {project.stack.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className={styles.cardCta}>
                  View case study <ArrowRight size={14} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modale */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
