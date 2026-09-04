"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, MessageSquare, RotateCcw, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

import { readDocsStream } from "@/lib/docs/chat-stream";
import { ARTICLES } from "@/lib/docs/content";

import styles from "./chat.module.css";

type Source = { title: string; href: string };
type Message = { role: "user" | "assistant"; content: string; sources?: Source[]; interrupted?: boolean };
const docLinks = new Set(Object.values(ARTICLES).flat().map((article) => `/docs#${article.slug}`));

export function DocsChat({ currentSlug, open, onOpenChange, signInHref = "/auth/login" }: { currentSlug: string; open: boolean; onOpenChange: (open: boolean) => void; signInHref?: string }) {
  const setOpen = onOpenChange;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [needsSignIn, setNeedsSignIn] = useState(false);
  const controller = useRef<AbortController | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const followBottom = useRef(true);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => () => controller.current?.abort(), []);
  useEffect(() => {
    const list = listRef.current;
    if (list && followBottom.current) list.scrollTo({ top: list.scrollHeight, behavior: "auto" });
  }, [messages, pending, error]);

  async function send(question = input) {
    const content = question.trim();
    if (!content || controller.current) return;
    const history: Message[] = [...messages.filter((message) => !message.interrupted), { role: "user", content }];
    const abort = new AbortController();
    controller.current = abort;
    followBottom.current = true;
    setMessages(history);
    setInput("");
    setError("");
    setNeedsSignIn(false);
    setPending(true);
    let answer = "";
    let sources: Source[] = [];
    try {
      const response = await fetch("/api/docs/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-6).map(({ role, content }) => ({ role, content: content.slice(0, 4000) })), current_slug: currentSlug }),
        signal: abort.signal,
      });
      if (!response.ok) {
        const data = await response.json();
        setNeedsSignIn(response.status === 401);
        throw new Error(typeof data.detail === "string" ? data.detail : "The agent couldn't answer. Please try again.");
      }
      for await (const event of readDocsStream(response)) {
        if (event.type === "sources") sources = event.sources.filter((source) => docLinks.has(source.href));
        if (event.type === "delta") {
          answer += event.text;
          setMessages([...history, { role: "assistant", content: answer }]);
        }
      }
      if (!answer.trim()) throw new Error("The agent returned an empty answer. Please try again.");
      setMessages([...history, { role: "assistant", content: answer, sources }]);
    } catch (failure) {
      if (answer) setMessages([...history, { role: "assistant", content: answer, interrupted: true }]);
      else setMessages(messages);
      setInput(content);
      setError(abort.signal.aborted ? "Reply stopped. You can retry your question." : failure instanceof Error ? failure.message : "Connection interrupted. Please try again.");
    } finally {
      controller.current = null;
      setPending(false);
      inputRef.current?.focus();
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={styles.launcher} aria-label="Talk to our agent" title="Talk to our agent" data-open={open}><MessageSquare size={23} aria-hidden="true" /><span className={styles.launcherStatus} /></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.panel} onOpenAutoFocus={(event) => { event.preventDefault(); inputRef.current?.focus(); }}>
          <header className={styles.header}>
            <span className={styles.icon}><MessageSquare size={20} aria-hidden="true" /></span>
            <div><Dialog.Title className={styles.title}>Menace docs agent</Dialog.Title><Dialog.Description className={styles.description}>Answers from the Menace Voice docs.</Dialog.Description></div>
            <Dialog.Close className={styles.iconButton} aria-label="Close chat"><X size={19} /></Dialog.Close>
          </header>
          <div className={styles.messages} ref={listRef} onScroll={() => { const list = listRef.current; if (list) followBottom.current = list.scrollHeight - list.scrollTop - list.clientHeight < 64; }} role="log" aria-label="Docs conversation" aria-live="polite">
            {messages.length === 0 && !pending ? <div className={styles.welcome}>
              <span className={styles.eyebrow}>A LITTLE GUIDANCE</span><h3>What are you building?</h3><p>Ask about your first agent, tools, knowledge, or getting ready for real calls.</p>
              {["How do I build my first agent?", "How does the MCP bridge work?", "What should I check before launch?"].map((question) => <button key={question} type="button" onClick={() => void send(question)}>{question}<ArrowRight size={14} /></button>)}
            </div> : null}
            {messages.map((message, index) => <div className={styles.message} data-role={message.role} key={index}>
              <span className={styles.messageLabel}>{message.role === "user" ? "YOU" : "MENACE"}{message.interrupted ? " · INCOMPLETE" : ""}</span>
              <ReactMarkdown components={{ a: ({ href, children }) => href && docLinks.has(href) ? <a href={href} onClick={() => setOpen(false)}>{children}</a> : <span>{children}</span>, img: () => null }}>{message.content}</ReactMarkdown>
              {message.sources?.length ? <div className={styles.sources}><span>Explore the docs</span>{message.sources.map((source) => <a href={source.href} key={source.href} onClick={() => setOpen(false)}>{source.title}<ArrowRight size={12} /></a>)}</div> : null}
            </div>)}
            {pending ? <p className={styles.thinking} role="status"><span /> {messages.at(-1)?.role === "assistant" ? "Writing…" : "Checking the docs…"}</p> : null}
            {error ? <div className={styles.error} role="alert">{error}{needsSignIn ? <a href={signInHref}>Sign in <ArrowRight size={12} /></a> : null}</div> : null}
          </div>
          <form className={styles.composer} onSubmit={(event) => { event.preventDefault(); void send(); }}>
            <label className={styles.inputLabel} htmlFor={`docs-question-${currentSlug}`}>Your question</label>
            <div className={styles.inputRow}><textarea id={`docs-question-${currentSlug}`} ref={inputRef} value={input} maxLength={2000} rows={2} placeholder="Ask about Menace Voice…" onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); void send(); } }} />
              <button className={styles.send} type="submit" disabled={pending || !input.trim()} aria-label="Send question"><Send size={17} /></button>
            </div>
            <div className={styles.composerFooter}><span>AI guidance. Check the linked docs.</span>{pending ? <button type="button" onClick={() => controller.current?.abort()}>Cancel</button> : messages.length ? <button type="button" onClick={() => { setMessages([]); setError(""); setInput(""); }}><RotateCcw size={12} /> New chat</button> : null}</div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
