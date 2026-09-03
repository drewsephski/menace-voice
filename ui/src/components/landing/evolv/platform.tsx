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

const METRICS = [
  "PHONE + WEBRTC",
  "INBOUND + OUTBOUND",
  "VISUAL WORKFLOWS",
  "HUMAN HANDOFF",
  "MCP-NATIVE",
  "SELF-HOSTABLE",
] as const;

export function Platform() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <SectionLabel>Platform</SectionLabel>
        <h2>The complete production stack for voice agents</h2>
        <p>
          Build, test, deploy, and improve every layer of the conversation from
          one workspace.
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

        <aside className={styles.proof} aria-label="Customer outcome">
          <blockquote>
            “Own the conversation from the first word to the final action,
            without giving up control of your models, providers, or data.”
          </blockquote>
          <div className={styles.attribution}>
            <strong>Menace Voice</strong>
            <span>Open-source voice agent infrastructure</span>
          </div>
          <ul className={styles.metrics}>
            {METRICS.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
