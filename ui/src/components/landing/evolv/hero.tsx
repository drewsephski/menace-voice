import Image from "next/image";
import type { CSSProperties } from "react";

import styles from "./hero.module.css";
import type { LandingNavigation } from "./landing-links";
import { ArrowIcon, SectionLabel } from "./primitives";

const LOGOS = [
  {
    name: "Claude",
    src: "/templates/evolv-ai/claude-wordmark.svg",
    width: "150px",
  },
  {
    name: "Turso",
    src: "/templates/evolv-ai/turso-wordmark.svg",
    width: "132px",
  },
  {
    name: "OpenAI",
    src: "/templates/evolv-ai/openai-wordmark.svg",
    width: "124px",
  },
  {
    name: "Clerk",
    src: "/templates/evolv-ai/clerk-wordmark.svg",
    width: "112px",
  },
  {
    name: "GitHub",
    src: "/templates/evolv-ai/github-wordmark.svg",
    width: "122px",
  },
  {
    name: "Supabase",
    src: "/templates/evolv-ai/supabase-wordmark.svg",
    width: "140px",
  },
  {
    name: "NVIDIA",
    src: "/templates/evolv-ai/nvidia-wordmark.svg",
    width: "132px",
  },
] as const;

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div aria-hidden={duplicate || undefined} className={styles.logoGroup}>
      {LOGOS.map((logo) => (
        <Image
          alt={duplicate ? "" : logo.name}
          className={styles.logoImage}
          decoding="async"
          height="40"
          key={logo.name}
          loading="lazy"
          src={logo.src}
          style={{ "--logo-width": logo.width } as CSSProperties}
          unoptimized
          width={150}
        />
      ))}
    </div>
  );
}

export function Hero({ navigation }: { navigation: LandingNavigation }) {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <SectionLabel>VOICE AI | OPEN SOURCE PLATFORM</SectionLabel>
          </div>
          <h1>Build voice agents people want to talk to</h1>
          <p className={styles.description}>
            Design the conversation, connect your tools, and deploy over phone
            or WebRTC from one visual workspace.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href={navigation.startBuilding}>
              Build your first agent
              <ArrowIcon />
            </a>
            <a className={styles.secondaryAction} href="#platform">
              Explore the platform
            </a>
          </div>
          <p className={styles.note}>
            Use managed models or bring your own voice AI stack.
          </p>
        </div>
      </section>

      <section
        aria-label="Technology that works with Menace Voice"
        className={styles.marquee}
      >
        <div aria-hidden="true" className={styles.separator} />
        <div className={styles.marqueeViewport}>
          <div className={styles.marqueeTrack}>
            <LogoGroup />
            <LogoGroup duplicate />
          </div>
        </div>
        <div aria-hidden="true" className={styles.separator} />
      </section>
    </>
  );
}
