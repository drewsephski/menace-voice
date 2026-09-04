"use client";

import { useId, useState } from "react";

import styles from "./platform.module.css";
import { SectionLabel } from "./primitives";

const FEATURES = [
  {
    title: "Visual conversation builder",
    description:
      "Shape greetings, instructions, tools, conditional transitions, and call outcomes on a canvas your whole team can understand.",
  },
  {
    title: "Real-time speech pipeline",
    description:
      "Combine transcription, reasoning, and natural speech in one low-latency conversation loop, then test it in audio or chat.",
  },
  {
    title: "Tools, knowledge, and MCP",
    description:
      "Ground answers in your knowledge base, call APIs during the conversation, and let coding agents author workflows through MCP.",
  },
  {
    title: "Phone, SIP, and WebRTC",
    description:
      "Handle inbound and outbound calls, browser conversations, campaigns, and human transfers across your telephony stack.",
  },
  {
    title: "QA and complete call records",
    description:
      "Review transcripts, recordings, extracted data, cost, and automated QA so every production conversation can improve.",
  },
] as const;

export function Platform() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section className={styles.section} id="platform" tabIndex={-1}>
      <div className={styles.intro}>
        <SectionLabel>Platform</SectionLabel>
        <h2>From call script to phone line</h2>
        <p>
          Write the conversation, choose your voice providers, and review what
          happens on each call.
        </p>
      </div>

      <div className={styles.layout}>
        <div className={styles.accordion}>
          {FEATURES.map((feature, index) => {
            const isOpen = index === openIndex;
            const triggerId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div
                className={styles.item}
                data-open={isOpen}
                key={feature.title}
              >
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className={styles.trigger}
                  id={triggerId}
                  onClick={() => setOpenIndex(index)}
                  type="button"
                >
                  <span>{feature.title}</span>
                  <span aria-hidden="true" className={styles.toggleMark} />
                </button>
                <section
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                  className={styles.answer}
                  id={panelId}
                >
                  <div className={styles.answerInner}>
                    <p>{feature.description}</p>
                  </div>
                </section>
              </div>
            );
          })}
        </div>

        <aside className={styles.proof} aria-label="Example appointment workflow">
          <p className={styles.exampleLabel}>
            Example workflow / Appointment booking
          </p>
          <h3>A booking starts with a few good questions.</h3>
          <ol className={styles.steps}>
            <li>
              <strong>Understand the request</strong>
              <span>Ask what the caller needs and when.</span>
            </li>
            <li>
              <strong>Check availability</strong>
              <span>Call your connected scheduling tool.</span>
            </li>
            <li>
              <strong>Confirm or transfer</strong>
              <span>Read back the booking, or route the call to your team.</span>
            </li>
          </ol>
          <p className={styles.exampleNote}>
            You configure the tools and transfer rules.
          </p>
        </aside>
      </div>
    </section>
  );
}
