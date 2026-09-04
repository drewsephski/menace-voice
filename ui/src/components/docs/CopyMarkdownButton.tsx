"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { DocArticle } from "@/lib/docs/content";
import { articleToMarkdown } from "@/lib/docs/markdown";

import styles from "./docs.module.css";

export function CopyMarkdownButton({ article }: { article: DocArticle }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  async function copy() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(articleToMarkdown(article, window.location.origin));
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timer.current = setTimeout(() => setStatus("idle"), 2500);
  }

  return <div className={styles.copyMarkdown}>
    <button type="button" onClick={() => void copy()} aria-label="Copy page as Markdown">{status === "copied" ? <Check size={14} /> : <Copy size={14} />} {status === "copied" ? "Copied Markdown" : "Copy Markdown"}</button>
    <span role="status">{status === "error" ? "Couldn't copy. Please try again." : status === "copied" ? "Ready to paste into your agent." : "For you and your agents"}</span>
  </div>;
}
