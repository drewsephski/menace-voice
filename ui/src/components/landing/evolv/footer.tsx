"use client";

import { type FormEvent, useState } from "react";
import styles from "./footer.module.css";
import { Brand } from "./primitives";

const groups = [
  {
    title: "Pages",
    links: [
      "About",
      "Blog",
      "Blog Details",
      "Changelog",
      "Contact",
      "Customers",
      "Customers Details",
      "Integrations",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Customers",
      "Integrations",
      "Blog",
      "Contact",
      "Overview",
      "Pricing",
    ],
  },
  {
    title: "Resources",
    links: [
      "Documentation",
      "Help Center",
      "Community",
      "API Reference",
      "Status",
    ],
  },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
] as const;

function SocialIcon({ label, children }: { label: string; children: string }) {
  return (
    <a aria-label={label} className={styles.social} href="#evolv-ai-top">
      {children}
    </a>
  );
}

export function Footer() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.primary}>
        <div className={styles.brandColumn}>
          <Brand />
          <p>
            Your AI agents, working behind every task. From planning to
            execution, automated end-to-end.
          </p>
          <div className={styles.subscribe}>
            <span>Subscribe to updates</span>
            {submitted ? (
              <p className={styles.thanks} role="status">
                Thanks — you’re on the list.
              </p>
            ) : (
              <form onSubmit={submit}>
                <label className={styles.srOnly} htmlFor="evolv-ai-email">
                  Email address
                </label>
                <input
                  id="evolv-ai-email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
                <button type="submit">Join</button>
              </form>
            )}
          </div>
        </div>
        <nav aria-label="Footer" className={styles.groups}>
          {groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a href="#evolv-ai-top" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>© 2026 Evolv Ai. All rights reserved.</p>
        <div className={styles.socials}>
          <SocialIcon label="X">𝕏</SocialIcon>
          <SocialIcon label="LinkedIn">in</SocialIcon>
          <SocialIcon label="GitHub">⌘</SocialIcon>
          <SocialIcon label="YouTube">▶</SocialIcon>
        </div>
      </div>
    </footer>
  );
}
