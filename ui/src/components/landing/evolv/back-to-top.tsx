"use client";

import { ArrowUp } from "lucide-react";
import type { MouseEvent } from "react";

import styles from "./template.module.css";

export function BackToTop() {
  function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    document.querySelector<HTMLAnchorElement>(
      '#evolv-ai-top header a[href="#evolv-ai-top"]',
    )?.focus({ preventScroll: true });
    window.history.replaceState(null, "", "#evolv-ai-top");
  }

  return (
    <a
      aria-label="Back to top"
      className={styles.backToTop}
      href="#evolv-ai-top"
      onClick={scrollToTop}
    >
      <ArrowUp size={16} aria-hidden="true" />
    </a>
  );
}
