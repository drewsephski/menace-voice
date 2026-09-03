"use client";

import { useEffect, useRef } from "react";

import styles from "./statement.module.css";

const STATEMENT =
  "Every call is a live moment with a customer. Menace Voice gives your agent the context to understand, the tools to act, and the judgment to transfer when a person should take over.";

const wordOccurrences = new Map<string, number>();
const WORDS = STATEMENT.split(" ").map((word) => {
  const occurrence = (wordOccurrences.get(word) ?? 0) + 1;
  wordOccurrences.set(word, occurrence);
  return { id: `${word}-${occurrence}`, value: word };
});

export function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;

    if (!section || !heading) return;

    const showFinalState = () => {
      heading.style.transform = "rotate(0deg)";
      for (const word of wordRefs.current) {
        if (!word) continue;
        word.style.opacity = "1";
        word.style.filter = "blur(0px)";
      }
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const render = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const rawProgress =
        (viewportHeight - bounds.top) / (viewportHeight + bounds.height * 0.2);
      const progress = Math.min(1, Math.max(0, rawProgress));

      heading.style.transform = `rotate(${2.5 * (1 - progress)}deg)`;

      const lastIndex = Math.max(1, WORDS.length - 1);
      for (let index = 0; index < wordRefs.current.length; index += 1) {
        const word = wordRefs.current[index];
        if (!word) continue;

        const start = (index / lastIndex) * 0.58;
        const wordProgress = Math.min(
          1,
          Math.max(0, (progress - start) / 0.24),
        );
        word.style.opacity = String(0.15 + wordProgress * 0.85);
        word.style.filter = `blur(${5 * (1 - wordProgress)}px)`;
      }
    };

    const requestRender = () => {
      if (frame === 0) frame = window.requestAnimationFrame(render);
    };

    const detachMotionListeners = () => {
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
    };

    const syncMotionPreference = () => {
      detachMotionListeners();
      if (reducedMotion.matches) {
        showFinalState();
        return;
      }
      render();
      window.addEventListener("scroll", requestRender, { passive: true });
      window.addEventListener("resize", requestRender);
    };

    syncMotionPreference();
    reducedMotion.addEventListener("change", syncMotionPreference);

    return () => {
      detachMotionListeners();
      reducedMotion.removeEventListener("change", syncMotionPreference);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.content}>
        <h2 aria-label={STATEMENT} className={styles.heading} ref={headingRef}>
          {WORDS.map((word, index) => (
            <span aria-hidden="true" key={word.id}>
              <span
                className={styles.word}
                ref={(node) => {
                  wordRefs.current[index] = node;
                }}
              >
                {word.value}
              </span>{" "}
            </span>
          ))}
        </h2>
        <p className={styles.outcome}>
          One system for conversation design, real-time voice, telephony, and
          post-call outcomes.
        </p>
      </div>
      <div aria-hidden="true" className={styles.dividerBand} />
    </section>
  );
}
