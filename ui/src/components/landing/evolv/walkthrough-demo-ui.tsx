"use client";

import { type HTMLMotionProps, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Info, X } from "lucide-react";
import { createContext, type ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";

import { BrandLogo } from "@/components/BrandLogo";

import frameStyles from "./walkthrough.module.css";
import styles from "./walkthrough-demo.module.css";

export type DemoDetail = {
  title: string;
  description: string;
  fields: ReadonlyArray<readonly [string, string]>;
  note?: string;
};

const InspectorContext = createContext<((detail: DemoDetail) => void) | null>(null);

export function useDemoInspector() {
  const inspect = useContext(InspectorContext);
  if (!inspect) throw new Error("Demo interactions require DemoInspector.");
  return inspect;
}

export function DemoInspector({ children }: { children: ReactNode }) {
  const [notification, setNotification] = useState<{ detail: DemoDetail; id: number } | null>(null);
  const sequence = useRef(0);
  const trigger = useRef<HTMLElement | null>(null);
  const dismiss = useCallback(() => setNotification(null), []);

  return (
    <InspectorContext.Provider value={(detail) => {
      trigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setNotification({ detail, id: ++sequence.current });
    }}>
      {children}
      {notification && <DemoToast key={notification.id} detail={notification.detail} dismiss={dismiss} trigger={trigger.current} />}
    </InspectorContext.Provider>
  );
}

function DemoToast({ detail, dismiss, trigger }: { detail: DemoDetail; dismiss: () => void; trigger: HTMLElement | null }) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const toastRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const close = useCallback(() => {
    if (toastRef.current?.contains(document.activeElement)) trigger?.focus({ preventScroll: true });
    dismiss();
  }, [dismiss, trigger]);

  useEffect(() => {
    if (hovered || focused) return;
    const timeout = window.setTimeout(close, 8_000);
    return () => window.clearTimeout(timeout);
  }, [close, hovered, focused]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close]);

  return (
    <motion.aside
      ref={toastRef}
      className={styles.toast}
      aria-label="Demo notification"
      data-demo-toast=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduced ? 0 : 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    >
      <Info size={13} className={styles.toastIcon} />
      <div className={styles.toastBody} role="status">
        <strong>{detail.title}</strong>
        <span className="sr-only">{detail.description}</span>
        <dl>{detail.fields.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      </div>
      <button className={styles.toastClose} type="button" aria-label="Dismiss demo notification" onClick={close}><X size={14} /></button>
    </motion.aside>
  );
}

export function DemoButton({ className = "", children, ...props }: HTMLMotionProps<"button">) {
  return (
    <motion.button
      type="button"
      className={`${styles.action} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function InspectButton({ detail, ...props }: HTMLMotionProps<"button"> & { detail: DemoDetail }) {
  const inspect = useDemoInspector();
  return <DemoButton {...props} onClick={() => inspect(detail)} />;
}

export function DemoMetric({ label, value, detail, change }: {
  label: string;
  value: string;
  detail: DemoDetail;
  change?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <InspectButton detail={detail} className={styles.metric} aria-label={`Inspect ${label}`}>
      <span className={styles.metricLabel}>{label}<ArrowUpRight size={12} /></span>
      <motion.strong key={value} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 0.15 }}>{value}</motion.strong>
      {change && <span className={styles.metricChange}>{change}</span>}
    </InspectButton>
  );
}

export function WindowFrame({ title, status, children }: { title: string; status: ReactNode; children: ReactNode }) {
  return (
    <div className={frameStyles.window}>
      <header className={frameStyles.windowHeader}>
        <BrandLogo mark className={frameStyles.windowLogo} />
        <InspectButton className={styles.windowTitle} detail={{ title, description: "Explore this sample workspace. Select a record, metric, or action to inspect the details.", fields: [["Workspace", "Menace Voice demo"], ["Environment", "Interactive preview"], ["Data", "Illustrative sample records"]] }}>{title}</InspectButton>
        <InspectButton className={`${frameStyles.windowStatus} ${styles.status}`} detail={{ title: "Preview status", description: "This walkthrough is a local, interactive preview of the product.", fields: [["Mode", "Sample data"], ["Connected services", "None in this preview"], ["Changes", "Local to this demo session"]] }}>{status}</InspectButton>
      </header>
      {children}
    </div>
  );
}
