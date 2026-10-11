"use client";

import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialIcons = [
  { label: "GitHub", href: "https://github.com/JeffreyYAJ", icon: Code2 },
  { label: "LinkedIn", href: "https://linkedin.com/in/jeffreyyaj", icon: BriefcaseBusiness },
  { label: "Email", href: "mailto:jeffreyyaj@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="editorial-footer__inner">
        <div className="editorial-footer__copy">
          <p className="editorial-footer__title">Better tools.<br />Better systems.<br />A better future.</p>
        </div>

        <div className="editorial-footer__socials" aria-label="Social links">
          {socialIcons.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="editorial-footer__icon"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="/contact"
          className="editorial-footer__cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get in touch <span>→</span>
        </motion.a>
      </div>
    </footer>
  );
}
