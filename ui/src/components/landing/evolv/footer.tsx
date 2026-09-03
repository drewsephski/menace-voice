"use client";

import { type FormEvent, useState } from "react";

import styles from "./footer.module.css";
import type { LandingNavigation } from "./landing-links";
import { Brand } from "./primitives";

function getGroups(navigation: LandingNavigation) {
  const docs = navigation.docs;
  const external = { rel: "noreferrer", target: "_blank" } as const;

  return [
    {
      title: "Pages",
      links: [
        { label: "Platform", href: "#platform" },
        { label: "Use Cases", href: "#use-cases" },
        { label: "Product Walkthrough", href: "#product-walkthrough" },
        { label: "Integrations", href: "#integrations" },
        { label: "FAQ", href: "#faq" },
        { label: "Get Started", href: navigation.startBuilding },
        { label: "Sign In", href: navigation.signIn },
        { label: "Documentation", href: docs, ...external },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Menace", href: docs, ...external },
        { label: "Open Source", href: navigation.github, ...external },
        { label: "Integrations", href: "#integrations" },
        { label: "Product Hunt", href: navigation.productHunt, ...external },
        { label: "Contact", href: docs, ...external },
        { label: "GitHub", href: navigation.github, ...external },
        { label: "Roadmap", href: `${navigation.github}/issues`, ...external },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: docs, ...external },
        {
          label: "First Agent Guide",
          href: `${docs}/getting-started/first-agent`,
          ...external,
        },
        { label: "MCP Guide", href: `${docs}/integrations/mcp`, ...external },
        { label: "API Reference", href: `${docs}/api-reference`, ...external },
        { label: "SDKs", href: `${docs}/sdks/introduction`, ...external },
      ],
    },
    {
      title: "Deploy",
      links: [
        { label: "Cloud", href: navigation.startBuilding },
        {
          label: "Self-host",
          href: `${docs}/deployment/introduction`,
          ...external,
        },
        { label: "Docker", href: `${docs}/deployment/docker`, ...external },
        { label: "Scaling", href: `${docs}/deployment/scaling`, ...external },
      ],
    },
  ];
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: string;
}) {
  return (
    <a
      aria-label={label}
      className={styles.social}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export function Footer({ navigation }: { navigation: LandingNavigation }) {
  const [submitted, setSubmitted] = useState(false);
  const groups = getGroups(navigation);

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
                <a
                  href={link.href}
                  key={link.label}
                  rel={"rel" in link ? link.rel : undefined}
                  target={"target" in link ? link.target : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>© 2026 Menace Voice. Built by Menace.</p>
        <div className={styles.socials}>
          <SocialIcon href="https://x.com/dograh" label="X">
            𝕏
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/company/dograh" label="LinkedIn">
            in
          </SocialIcon>
          <SocialIcon href={navigation.github} label="GitHub">
            ⌘
          </SocialIcon>
          <SocialIcon href="https://www.youtube.com/watch?v=xD9JEvfCH9k" label="YouTube">
            ▶
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}
