"use client";

import { useState } from "react";

import styles from "./faq.module.css";

const questions = [
  {
    question: "Can Menace Voice use our existing models and providers?",
    answer:
      "Yes. Connect your own AI provider keys in Model Configurations for language, speech recognition, and voice generation. Managed service is an option only when enabled for your deployment. AI usage and telephony charges are separate from your platform plan.",
  },
  {
    question: "What do I need for my first test?",
    answer:
      "Create a workspace, configure your AI models and voice, then build an agent. Open Test Agent to try a browser conversation. You do not need a phone number for a browser test; connecting a phone line is a separate step. The Free plan supports browser testing with your own provider keys.",
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
      "Agents can transfer supported calls to a human destination. The workflow decides when to hand off and preserves the context around that outcome.",
  },
  {
    question: "Can we self-host Menace Voice?",
    answer:
      "Yes. Menace Voice is BSD-licensed and can run in your own environment, so you control deployment, data residency, and source-level customization.",
  },
  {
    question: "How is Menace Voice related to Dograh?",
    answer:
      "Menace Voice builds on the BSD-licensed, open-source Dograh project, with its own product experience and ongoing development. We credit Dograh as the upstream foundation.",
  },
] as const;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} id="faq" tabIndex={-1}>
      <div className={styles.heading}>
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
