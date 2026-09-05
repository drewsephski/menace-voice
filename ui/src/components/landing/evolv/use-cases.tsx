import type { LandingNavigation } from "./landing-links";
import { SectionLabel } from "./primitives";
import { UseCaseCard } from "./use-case-card";
import styles from "./use-cases.module.css";

const CASES = [
  {
    icon: "lead",
    title: "Lead qualification",
    description:
      "Call new leads while intent is high, ask the right questions, and route qualified conversations to sales.",
  },
  {
    icon: "calendar",
    title: "Appointment booking",
    description:
      "Find availability, book or reschedule appointments, and write the result back to your scheduling system.",
  },
  {
    icon: "support",
    title: "Customer support",
    description:
      "Resolve routine questions with grounded answers and transfer sensitive or complex calls with full context.",
  },
  {
    icon: "phone",
    title: "Inbound reception",
    description:
      "Ask why someone is calling, and send them to the right person or workflow.",
  },
  {
    icon: "outreach",
    title: "Campaign outreach",
    description:
      "Run personalized outbound campaigns from a contact list and track every disposition and follow-up.",
  },
  {
    icon: "workflow",
    title: "Custom call workflows",
    description:
      "Turn your script, business rules, tools, and success criteria into a voice agent built for your operation.",
  },
] as const;

export function UseCases({ navigation }: { navigation: LandingNavigation }) {
  return (
    <section className={styles.section} id="use-cases" tabIndex={-1}>
      <header className={styles.header}>
        <div className={styles.label}>
          <SectionLabel>Use cases</SectionLabel>
        </div>
        <h2>Start with the calls your team handles every day</h2>
        <p>
          Choose a job, then configure the questions, connected tools, and
          handoff rules it needs.
        </p>
      </header>

      <div className={styles.grid}>
        {CASES.map((useCase, index) => {
          const titleId = `evolv-use-case-${index}-title`;
          return (
            <UseCaseCard
              aria-labelledby={titleId}
              href={navigation.startBuilding}
              icon={useCase.icon}
              key={useCase.title}
            >
              <h3 id={titleId}>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </UseCaseCard>
          );
        })}
      </div>
    </section>
  );
}
