import Image from "next/image";

import styles from "./integrations.module.css";
import type { LandingNavigation } from "./landing-links";
import { ArrowIcon } from "./primitives";

const technologies = [
  { name: "OpenClaw", src: "/templates/evolv-ai/tech/openclaw.svg" },
  { name: "Codex", src: "/templates/evolv-ai/tech/codex_dark.svg" },
  {
    name: "Google Calendar",
    src: "/templates/evolv-ai/tech/google-calendar.svg",
  },
  { name: "Cursor", src: "/templates/evolv-ai/tech/cursor_dark.svg" },
  { name: "NGINX", src: "/templates/evolv-ai/tech/nginx.svg" },
  { name: "GitHub", src: "/templates/evolv-ai/tech/github_dark.svg" },
  { name: "Ghostty", src: "/templates/evolv-ai/tech/ghostty.svg" },
  { name: "Polar", src: "/templates/evolv-ai/tech/polar-sh_dark.svg" },
  { name: "Kimi", src: "/templates/evolv-ai/tech/kimi-icon.svg" },
  { name: "Eve", src: "/templates/evolv-ai/tech/eve-dark.svg" },
  {
    name: "OpenRouter",
    src: "/templates/evolv-ai/tech/openrouter_dark.svg",
  },
  { name: "OpenCode", src: "/templates/evolv-ai/tech/opencode-dark.svg" },
  { name: "Conductor", src: "/templates/evolv-ai/tech/conductor_dark.svg" },
] as const;

export function Integrations({ navigation }: { navigation: LandingNavigation }) {
  return (
    <section className={styles.section} id="integrations" tabIndex={-1}>
      <div className={styles.heading}>
        <h2>Bring your tools into the conversation.</h2>
        <p className={styles.description}>
          Connect APIs and MCP servers to your workflows. Explore the tools and
          services in the wider ecosystem below; setup varies by service.
        </p>
      </div>
      <div className={styles.grid}>
        <div aria-hidden="true" className={styles.stripe} />
        {technologies.map((technology) => (
          <div className={styles.cell} key={technology.name}>
            <Image
              alt={`${technology.name} logo`}
              height={112}
              src={technology.src}
              width={112}
            />
          </div>
        ))}
        <div aria-hidden="true" className={styles.stripe} />
      </div>
      <a className={styles.action} href={navigation.docs}>
        Read the integration docs <ArrowIcon />
      </a>
    </section>
  );
}
