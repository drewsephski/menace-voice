import { CapabilityCard } from "./capability-card";
import styles from "./hero.module.css";
import type { LandingNavigation } from "./landing-links";
import { ArrowIcon } from "./primitives";

export function Hero({ navigation }: { navigation: LandingNavigation }) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
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
        <p className={styles.note}>Free to start. No credit card required.</p>
      </div>
      <ul className={styles.capabilities} aria-label="Platform capabilities">
        <CapabilityCard icon="flow" title="Visual call flows" description="Shape every conversation" />
        <CapabilityCard icon="phone" title="Inbound & outbound" description="Connect your phone lines" />
        <CapabilityCard icon="voice" title="Browser voice testing" description="Hear it before you launch" />
        <CapabilityCard icon="tools" title="API & MCP tools" description="Connect to your systems" />
        <CapabilityCard icon="knowledge" title="Knowledge sources" description="Ground answers in your docs" />
        <CapabilityCard icon="handoff" title="Human handoff" description="Bring in your team" />
      </ul>
    </section>
  );
}
