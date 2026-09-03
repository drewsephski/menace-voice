"use client";

import { useState } from "react";
import styles from "./faq.module.css";
import { SectionLabel } from "./primitives";

const questions = [
  {
    question: "Can we connect AI agents to our current stack?",
    answer:
      "Yes. You can connect CRMs, ticketing platforms, data warehouses, messaging apps, and internal tools through native integrations or APIs.",
  },
  {
    question: "Do we need engineers to set up agents?",
    answer:
      "Not necessarily. Operations teams can launch common workflows with no-code setup, while technical teams can extend logic and tooling when needed.",
  },
  {
    question: "What work can AI agents automate end-to-end?",
    answer:
      "AI agents can triage inbound tasks, coordinate multi-system workflows, generate reports, enforce policies, and execute recurring operations autonomously.",
  },
  {
    question: "How do you keep agents safe and reliable?",
    answer:
      "Use policy controls, approval gates, permissions, logging, and audit trails to enforce governance while maintaining fast execution.",
  },
  {
    question: "How does pricing typically work?",
    answer:
      "Plans are usually based on agent runs, connected systems, and governance features. Teams can start small, then scale as automation coverage increases.",
  },
] as const;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.heading}>
        <SectionLabel>FAQ</SectionLabel>
        <h2>Questions about AI agents deployment</h2>
      </div>
      <div className={styles.questions}>
        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `evolv-ai-faq-${index}`;
          return (
            <article className={styles.item} key={item.question}>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={isOpen ? styles.close : undefined}
                >
                  +
                </span>
              </button>
              <div
                aria-hidden={!isOpen}
                className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                id={panelId}
              >
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
