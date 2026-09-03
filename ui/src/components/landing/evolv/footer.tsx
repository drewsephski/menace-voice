"use client";

import { type FormEvent, useState } from "react";

import styles from "./footer.module.css";
import { Brand } from "./primitives";

const groups = [
  {
    title: "Pages",
    links: [
      "Platform",
      "Use Cases",
      "Product Walkthrough",
      "Integrations",
      "FAQ",
      "Get Started",
      "Sign In",
      "Documentation",
    ],
  },
  {
    title: "Company",
    links: [
      "About Menace",
      "Open Source",
      "Integrations",
      "Product Hunt",
      "Contact",
      "GitHub",
      "Roadmap",
    ],
  },
  {
    title: "Resources",
    links: [
      "Documentation",
      "First Agent Guide",
      "MCP Guide",
      "API Reference",
      "SDKs",
    ],
  },
  { title: "Deploy", links: ["Cloud", "Self-host", "Docker", "Scaling"] },
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
            Build, test, and deploy voice agents across phone and WebRTC, with
            your models, your tools, and your infrastructure.
          </p>
          <div className={styles.subscribe}>
            <span>Product updates</span>
            {submitted ? (
              <p className={styles.thanks} role="status">
                You&apos;re on the Menace Voice list.
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
        <p>© 2026 Menace Voice. Built by Menace.</p>
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
