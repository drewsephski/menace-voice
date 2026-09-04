"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import styles from "./walkthrough-cursor.module.css";

// Adapted from Animate UI's Cursor by imskyleen. See animate-ui.LICENSE.md.
const spring = { stiffness: 500, damping: 50, bounce: 0 };

export function WalkthroughCursor() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const followX = useSpring(0, spring);
  const followY = useSpring(0, spring);

  useEffect(() => {
    const overlay = overlayRef.current;
    const viewport = overlay?.parentElement;
    if (!overlay || !viewport) return;

    const enabled = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let active = false;

    const hide = () => {
      active = false;
      delete viewport.dataset.walkthroughCursor;
      overlay.dataset.active = "false";
    };

    const move = (event: PointerEvent) => {
      if (!enabled.matches || event.pointerType !== "mouse") {
        hide();
        return;
      }

      const rect = viewport.getBoundingClientRect();
      const left = event.clientX - rect.left - viewport.clientLeft;
      const top = event.clientY - rect.top - viewport.clientTop;
      if (left < 0 || top < 0 || left > viewport.clientWidth || top > viewport.clientHeight) {
        hide();
        return;
      }

      x.set(left);
      y.set(top);
      // Keep the label visible when exploring the bottom and right edges.
      const label = overlay.lastElementChild;
      const labelX = Math.max(4, Math.min(left + 17, viewport.clientWidth - (label?.clientWidth ?? 80) - 8));
      const labelY = Math.max(4, Math.min(top + 27, viewport.clientHeight - (label?.clientHeight ?? 30) - 8));
      if (!active) {
        followX.jump(labelX);
        followY.jump(labelY);
      } else {
        followX.set(labelX);
        followY.set(labelY);
      }

      active = true;
      viewport.dataset.walkthroughCursor = "true";
      overlay.dataset.active = "true";
    };

    // Capture movement even when React Flow handles dragging inside the canvas.
    viewport.addEventListener("pointermove", move, { capture: true, passive: true });
    viewport.addEventListener("pointerleave", hide);
    viewport.addEventListener("pointercancel", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("scroll", hide, true);
    document.addEventListener("visibilitychange", hide);
    enabled.addEventListener("change", hide);

    return () => {
      hide();
      viewport.removeEventListener("pointermove", move, true);
      viewport.removeEventListener("pointerleave", hide);
      viewport.removeEventListener("pointercancel", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("scroll", hide, true);
      document.removeEventListener("visibilitychange", hide);
      enabled.removeEventListener("change", hide);
    };
  }, [x, y, followX, followY]);

  return (
    <div ref={overlayRef} className={styles.overlay} aria-hidden="true" data-active="false">
      <motion.svg className={styles.cursor} style={{ x, y }} viewBox="0 0 40 40">
        <path
          fill="currentColor"
          d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
        />
      </motion.svg>
      <motion.div className={styles.follow} style={{ x: followX, y: followY }}>
        Designer
      </motion.div>
    </div>
  );
}
