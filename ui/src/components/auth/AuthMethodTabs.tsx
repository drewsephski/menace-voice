"use client";

import { animate, motion, useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./auth-method-tabs.module.css";

type Highlight = {
  list: HTMLElement;
  left: number;
  top: number;
  width: number;
  height: number;
};

// Stack owns these Radix tabs. Enhance their public ARIA surface so its forms,
// keyboard navigation, validation, and authentication callbacks stay intact.
export function AuthMethodTabs({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [highlight, setHighlight] = useState<Highlight | null>(null);

  useEffect(() => {
    const host = container.current;
    if (!host) return;
    let list: HTMLElement | null = null;
    let selectedId = "";
    let previousHeight = 0;
    let frame = 0;
    let stopAnimations = () => {};

    function sync() {
      if (!host) return;
      const nextList = Array.from(host.querySelectorAll<HTMLElement>('[role="tablist"]'))
        .find((candidate) => candidate.querySelector('[role="tab"][aria-controls$="-content-magic-link"]')
          && candidate.querySelector('[role="tab"][aria-controls$="-content-password"]')) ?? null;
      if (nextList !== list) {
        stopAnimations();
        list?.classList.remove(styles.list);
        resize.disconnect();
        list = nextList;
        selectedId = "";
        if (list) {
          list.classList.add(styles.list);
          resize.observe(list);
        }
      }
      if (!list) {
        setHighlight(null);
        return;
      }
      const tabs = Array.from(list.querySelectorAll<HTMLElement>('[role="tab"]'));
      const selected = tabs.find((tab) => tab.getAttribute("aria-selected") === "true");
      if (!selected) return;
      const bounds = selected.getBoundingClientRect();
      const listBounds = list.getBoundingClientRect();
      setHighlight({
        list,
        left: bounds.left - listBounds.left,
        top: bounds.top - listBounds.top,
        width: bounds.width,
        height: bounds.height,
      });

      const panel = document.getElementById(selected.getAttribute("aria-controls") ?? "");
      const root = list.parentElement;
      if (!panel || !root || !host.contains(panel)) return;
      if (selected.id !== selectedId) {
        stopAnimations();
        const nextHeight = root.getBoundingClientRect().height;
        if (selectedId && !reducedMotion) {
          root.classList.add(styles.expanding);
          const heightAnimation = animate(root, { height: [previousHeight, nextHeight] }, {
            type: "spring", stiffness: 300, damping: 32,
            onComplete: () => {
              root.style.height = "";
              root.classList.remove(styles.expanding);
            },
          });
          stopAnimations = () => {
            heightAnimation.stop();
            root.style.removeProperty("height");
            root.classList.remove(styles.expanding);
          };
        }
        previousHeight = nextHeight;
        selectedId = selected.id;
      } else if (!root.style.height) {
        previousHeight = root.getBoundingClientRect().height;
      }
    }

    function schedule() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    }
    const resize = new ResizeObserver(schedule);
    const observer = new MutationObserver(schedule);
    observer.observe(host, { subtree: true, childList: true, attributes: true, attributeFilter: ["data-state"] });
    sync();
    return () => {
      observer.disconnect();
      resize.disconnect();
      cancelAnimationFrame(frame);
      stopAnimations();
      list?.classList.remove(styles.list);
    };
  }, [reducedMotion]);

  return (
    <div ref={container} className={styles.host}>
      {children}
      {highlight && createPortal(
        <motion.span
          aria-hidden="true"
          className={styles.highlight}
          initial={false}
          animate={{ x: highlight.left, y: highlight.top, width: highlight.width, height: highlight.height }}
          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 200, damping: 25 }}
        />,
        highlight.list,
      )}
    </div>
  );
}
