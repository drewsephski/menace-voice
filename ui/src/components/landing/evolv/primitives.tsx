import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import styles from "./primitives.module.css";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={styles.brand}>
      <span aria-hidden="true" className={styles.brandMark} />
      {compact ? null : <span>Menace Voice</span>}
    </span>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className={styles.label}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

export function ArrowIcon() {
  return (
    <ArrowUpRight
      aria-hidden="true"
      className={styles.arrowIcon}
      size={15}
      strokeWidth={1.75}
    />
  );
}

export function SparkleIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path
        d="M12 2c.5 5.7 4.3 9.5 10 10-5.7.5-9.5 4.3-10 10-.5-5.7-4.3-9.5-10-10 5.7-.5 9.5-4.3 10-10Z"
        fill="currentColor"
      />
    </svg>
  );
}
