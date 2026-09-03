import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./hero.module.css";
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

interface HeroProps {
  loginHref: string;
  signupEnabled: boolean;
  signupHref: string;
}

export function Hero({ loginHref, signupEnabled, signupHref }: HeroProps) {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <SectionLabel>VOICE AI · OPEN SOURCE · PRODUCTION READY</SectionLabel>
          </div>
          <h1>Build voice agents people want to talk to</h1>
          <p className={styles.description}>
            Design the conversation, connect your tools, and deploy over phone
            or WebRTC from one visual workspace.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.primaryAction}
              href={signupEnabled ? signupHref : loginHref}
              id="start"
            >
              {signupEnabled ? "Build your first agent" : "Sign in to build"}
              <ArrowIcon />
            </a>
            <a
              className={styles.secondaryAction}
              href="https://docs.dograh.com"
              id="docs"
            >
              Explore the docs
            </a>
          </div>
          <p className={styles.note}>
            Start with managed models or bring your own LLM, speech, and
            telephony providers.
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
