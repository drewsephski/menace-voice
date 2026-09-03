"use client";

import { useState } from "react";

import styles from "./faq.module.css";
import { SectionLabel } from "./primitives";

const questions = [
  {
    question: "Can Menace Voice use our existing models and providers?",
    answer:
      "Yes. Start with the managed stack or connect your own LLM, speech-to-text, text-to-speech, telephony, and storage providers.",
  },
  {
    question: "Can we test an agent before putting it on a phone line?",
    answer:
      "Yes. Test the conversation in your browser with live audio or use chat mode to edit and replay turns before you publish.",
  },
  {
    question: "Which telephony providers are supported?",
    answer:
      "Menace Voice includes integrations for Twilio, Vonage, Telnyx, Plivo, Vobiz, Cloudonix, and Asterisk ARI, with SIP support for flexible deployments.",
  },
  {
    question: "What happens when the agent needs a person?",
    answer:
      "Agents can transfer supported calls to a human destination. The workflow can decide when to hand off and preserve the conversation context around that outcome.",
  },
  {
    question: "Can we self-host Menace Voice?",
    answer:
      "Yes. Menace Voice is BSD-licensed and can run in your own environment, so you control deployment, data residency, and source-level customization.",
  },
] as const;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.heading}>
        <SectionLabel>FAQ</SectionLabel>
        <h2>Questions about building production voice agents</h2>
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
