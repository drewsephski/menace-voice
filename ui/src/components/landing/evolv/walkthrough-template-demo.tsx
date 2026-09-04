"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Headphones, MessageSquare, Phone, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import frame from "./walkthrough.module.css";
import { DemoButton, WindowFrame } from "./walkthrough-demo-ui";
import styles from "./walkthrough-template-demo.module.css";

const templates = [
  {
    name: "Receptionist",
    description: "Welcome callers and get them to the right person.",
    icon: Phone,
    greeting: "Hi, thanks for calling. How can I help you today?",
    task: "Find out what the caller needs",
    outcome: "Route the call or take a message",
  },
  {
    name: "Lead qualifier",
    description: "Ask the right questions before the sales follow-up.",
    icon: MessageSquare,
    greeting: "Hi, thanks for your interest. What are you looking for help with?",
    task: "Ask about their needs and timing",
    outcome: "Capture details for a follow-up",
  },
  {
    name: "Support desk",
    description: "Understand the issue and guide the next step.",
    icon: Headphones,
    greeting: "Hi, you’re through to support. What can I help you with?",
    task: "Understand the caller’s question",
    outcome: "Help resolve it or hand it to the team",
  },
] as const;

function StreamingGreeting({ text, playing }: { text: string; playing: boolean }) {
  const reduced = useReducedMotion();
  const [length, setLength] = useState(0);
  const elapsed = useRef(0);

  useEffect(() => {
    if (reduced || !playing) return;
    let lastTime = performance.now();
    let frame: number;
    const tick = (now: number) => {
      elapsed.current += now - lastTime;
      lastTime = now;
      const next = Math.min(text.length, Math.floor(elapsed.current / 22));
      setLength(next);
      if (next < text.length) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, reduced, text]);

  const visible = reduced ? text : text.slice(0, length);
  return (
    <p className={styles.streaming}>
      <span className={styles.sizingText}>{text}</span>
      <span className={styles.streamText} aria-hidden="true">
        {visible}<span className={styles.caret} data-active={visible.length < text.length && playing} />
      </span>
    </p>
  );
}

export function TemplateDemo({ paused, playOnSelect, onContinue }: { paused: boolean; playOnSelect: boolean; onContinue: () => void }) {
  const [selected, setSelected] = useState(0);
  const [interacted, setInteracted] = useState(playOnSelect);
  const [revision, setRevision] = useState(0);
  const template = templates[selected];
  const Icon = template.icon;

  return (
    <div className={`${frame.demoCanvas} ${styles.canvas}`} data-paused={paused} data-interacted={interacted}>
      <WindowFrame title="Create your first agent" status="Template preview">
        <div className={styles.builder}>
          <div className={styles.choices}>
            <span className={styles.eyebrow}>01 / CHOOSE A STARTING POINT</span>
            <h3>What should your agent do?</h3>
            <p>Start with a role. Make it yours next.</p>
            <div className={styles.templateList} role="group" aria-label="Agent templates">
              {templates.map((item, index) => (
                <DemoButton
                  key={item.name}
                  className={styles.template}
                  aria-pressed={selected === index}
                  onClick={() => { setSelected(index); setInteracted(true); setRevision((value) => value + 1); }}
                >
                  <item.icon size={19} aria-hidden="true" />
                  <span><strong>{item.name}</strong><small>{item.description}</small></span>
                  <span className={styles.selection} aria-hidden="true">{selected === index && <Check size={12} />}</span>
                </DemoButton>
              ))}
            </div>
            <span className={styles.hint}>Try a template to see the draft change.</span>
          </div>
          <div className={styles.preview}>
            <span className={styles.eyebrow}><Sparkles size={13} /> YOUR AGENT TAKES SHAPE</span>
            <div className={styles.agent} key={`${template.name}-${revision}`} aria-label={`${template.name} agent draft`}>
              <div className={styles.agentHeader}>
                <span className={styles.agentIcon}><Icon size={23} /></span>
                <div><span>YOUR NEW AGENT</span><h4>{template.name}</h4></div>
                <span className={styles.draft}>Draft</span>
              </div>
              <div className={styles.greeting}>
                <span>OPENING MESSAGE</span>
                <StreamingGreeting text={`“${template.greeting}”`} playing={interacted || !paused} />
              </div>
              <ol className={styles.steps}>
                {["Welcome the caller", template.task, template.outcome].map((step, index) => (
                  <li className={styles.reveal} key={step} style={{ animationDelay: `${1.1 + index * 0.65}s` }}>
                    <span>{String(index + 1).padStart(2, "0")}</span>{step}<Check size={13} aria-hidden="true" />
                  </li>
                ))}
              </ol>
              <div className={`${styles.reveal} ${styles.ready}`}><Check size={14} />A starting script, ready to customize.</div>
            </div>
            <DemoButton className={styles.continue} onClick={onContinue}>Next: design the call flow <ArrowRight size={15} /></DemoButton>
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}
