import { AudioLines, GitBranch, Headphones, Library, Phone, Plug } from "lucide-react";

import styles from "./hero.module.css";
import type { LandingNavigation } from "./landing-links";
import { ArrowIcon, SectionLabel } from "./primitives";

export function Hero({ navigation }: { navigation: LandingNavigation }) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <SectionLabel>Menace Voice / Voice AI</SectionLabel>
        <h1>
          Turn your call flow<br />into a voice agent.
        </h1>
        <p className={styles.description}>
          Build an agent to answer calls, qualify leads, or book appointments.
          Connect your tools, test the conversation in your browser, then put it
          on a phone line.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href={navigation.startBuilding}>
            Build your first agent <ArrowIcon />
          </a>
          <a className={styles.secondaryAction} href="#product-walkthrough">
            See how it works
          </a>
        </div>
        <p className={styles.note}>Start free with your own AI provider keys. Provider usage is billed separately.</p>
      </div>
      <ul className={styles.capabilities} aria-label="Platform capabilities">
        <li><span className={styles.capabilityIcon}><GitBranch aria-hidden="true" /></span><div><strong>Visual call flows</strong><span>Shape every conversation</span></div></li>
        <li><span className={styles.capabilityIcon}><Phone aria-hidden="true" /></span><div><strong>Inbound &amp; outbound</strong><span>Connect your phone lines</span></div></li>
        <li><span className={styles.capabilityIcon}><AudioLines aria-hidden="true" /></span><div><strong>Browser voice testing</strong><span>Hear it before you launch</span></div></li>
        <li><span className={styles.capabilityIcon}><Plug aria-hidden="true" /></span><div><strong>API &amp; MCP tools</strong><span>Connect to your systems</span></div></li>
        <li><span className={styles.capabilityIcon}><Library aria-hidden="true" /></span><div><strong>Knowledge sources</strong><span>Ground answers in your docs</span></div></li>
        <li><span className={styles.capabilityIcon}><Headphones aria-hidden="true" /></span><div><strong>Human handoff</strong><span>Bring in your team</span></div></li>
      </ul>
    </section>
  );
}
