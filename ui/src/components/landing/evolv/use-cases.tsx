import { SectionLabel } from "./primitives";
import styles from "./use-cases.module.css";

const CASES = [
  {
    icon: "dot",
    title: "Lead qualification",
    description:
      "Call new leads while intent is high, ask the right questions, and route qualified conversations to sales.",
  },
  {
    icon: "branch",
    title: "Appointment booking",
    description:
      "Find availability, book or reschedule appointments, and write the result back to your operating system.",
  },
  {
    icon: "shield",
    title: "Customer support",
    description:
      "Resolve routine questions with grounded answers and transfer sensitive or complex calls with full context.",
  },
  {
    icon: "square",
    title: "Inbound reception",
    description:
      "Answer every call, understand why someone is calling, and send them to the right person or workflow.",
  },
  {
    icon: "database",
    title: "Campaign outreach",
    description:
      "Run personalized outbound campaigns from a contact list and track every disposition and follow-up.",
  },
  {
    icon: "pencil",
    title: "Custom call workflows",
    description:
      "Turn your script, business rules, tools, and success criteria into a voice agent built for your operation.",
  },
] as const;

type IconName = (typeof CASES)[number]["icon"];

function CaseIcon({ name }: { name: IconName }) {
  return (
    <span aria-hidden="true" className={styles.icon}>
      <svg aria-hidden="true" fill="none" focusable="false" viewBox="0 0 40 40">
        {name === "dot" ? (
          <>
            <circle cx="20" cy="20" r="8.5" stroke="currentColor" />
            <circle cx="20" cy="20" fill="currentColor" r="2.5" />
          </>
        ) : null}
        {name === "branch" ? (
          <>
            <path d="M13 11v12a6 6 0 0 0 6 6h8" stroke="currentColor" />
            <path d="M13 17h9a5 5 0 0 0 5-5v-1" stroke="currentColor" />
            <circle cx="13" cy="10" fill="currentColor" r="2" />
            <circle cx="28" cy="10" fill="currentColor" r="2" />
            <circle cx="29" cy="29" fill="currentColor" r="2" />
          </>
        ) : null}
        {name === "shield" ? (
          <path
            d="M20 9.5 29 13v6.7c0 5.4-3.6 9.2-9 11.3-5.4-2.1-9-5.9-9-11.3V13l9-3.5Z"
            stroke="currentColor"
          />
        ) : null}
        {name === "square" ? (
          <>
            <rect
              height="18"
              rx="1"
              stroke="currentColor"
              width="18"
              x="11"
              y="11"
            />
            <path d="m16 20 3 3 6-7" stroke="currentColor" />
          </>
        ) : null}
        {name === "database" ? (
          <>
            <ellipse cx="20" cy="13" rx="9" ry="4" stroke="currentColor" />
            <path
              d="M11 13v7c0 2.2 4 4 9 4s9-1.8 9-4v-7"
              stroke="currentColor"
            />
            <path
              d="M11 20v7c0 2.2 4 4 9 4s9-1.8 9-4v-7"
              stroke="currentColor"
            />
          </>
        ) : null}
        {name === "pencil" ? (
          <>
            <path
              d="m12 27 1.8-6.1L25.7 9l5.3 5.3-11.9 11.9L12 27Z"
              stroke="currentColor"
            />
            <path
              d="m22.5 12.2 5.3 5.3M13.8 20.9l5.3 5.3"
              stroke="currentColor"
            />
          </>
        ) : null}
      </svg>
    </span>
  );
}

export function UseCases() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.label}>
          <SectionLabel>Use cases</SectionLabel>
        </div>
        <h2>Put voice agents on the calls that move work forward</h2>
        <p>
          Build for a single call flow or an entire operation. Every agent can
          listen, reason, take action, and hand off.
        </p>
      </header>

      <div className={styles.grid}>
        {CASES.map((useCase, index) => {
          const cardId = `evolv-use-case-${index}`;
          const titleId = `${cardId}-title`;
          return (
            <a
              aria-labelledby={titleId}
              className={styles.card}
              href={`#${cardId}`}
              id={cardId}
              key={useCase.title}
            >
              <CaseIcon name={useCase.icon} />
              <h3 id={titleId}>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
