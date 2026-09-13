// Shared presentation for Stack Auth and local login/signup. Authentication
// controls and callbacks remain owned by the forms passed as children.
import Link from "next/link";
import type { ReactNode } from "react";

import { BrandLogo } from "@/components/BrandLogo";

import styles from "./auth-shell.module.css";

// A static voice-signal illustration, not a live recording or activity meter.
const SIGNAL_HEIGHTS = [
  4, 6, 10, 6, 14, 24, 42, 30, 58, 86, 64, 108, 144, 112, 76, 128,
  164, 138, 94, 62, 82, 48, 28, 16, 10, 6, 12, 24, 38, 64, 48, 90,
  116, 82, 54, 70, 42, 26, 16, 8, 6, 4,
];

export function AuthShell({
  children,
  enterpriseSlot,
}: {
  children: ReactNode;
  enterpriseSlot?: ReactNode;
}) {
  return (
    <div className={`${styles.shell} grid w-full bg-background lg:grid-cols-[55%_45%]`}>
      <main className={`${styles.formColumn} auth-imprint`}>
        <div className={styles.formWrap}>
          <div className={`${styles.authCard} max-w-md rounded-2xl border border-border/60 bg-card p-5 sm:p-6`}>
            <div className="lg:hidden">
              <Link href="/" aria-label="Back to Menace Voice home">
                <BrandLogo className="h-7" />
              </Link>
            </div>
            {children}
          </div>
        </div>
      </main>

      <aside className={styles.brandPanel} aria-label="About Menace Voice">
        <Link className={styles.brandLink} href="/" aria-label="Back to Menace Voice home">
          <BrandLogo inverse className="h-8" />
        </Link>

        <div className={styles.brandContent}>
          <div className={styles.signal} aria-hidden="true">
            {SIGNAL_HEIGHTS.map((height, index) => (
              <span key={index} style={{ height }} />
            ))}
          </div>
          <h1 className={styles.headline}>
            Build an agent.<br />
            <span>Put it on the line.</span>
          </h1>
          <p className={styles.description}>
            Choose a voice, shape the conversation, and connect your phone number.
          </p>
        </div>

        <div className={styles.enterprise}>
          <div>
            <h2>Run it on your infrastructure.</h2>
            <p>Private deployments for your team.</p>
          </div>
          {enterpriseSlot}
        </div>
      </aside>
    </div>
  );
}
