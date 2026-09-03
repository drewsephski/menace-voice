"use client";

import { useEffect, useId, useRef, useState } from "react";

import styles from "./header.module.css";
import { Brand } from "./primitives";

const NAV_LINKS = [
  "Platform",
  "Use cases",
  "Product",
  "Integrations",
  "FAQ",
  "Docs",
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1001px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setMenuOpen(false);
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    const handleMenuClick = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        setMenuOpen(false);
      }
    };

    const menuPanel = menuPanelRef.current;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    menuPanel?.addEventListener("click", handleMenuClick);
    firstLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      menuPanel?.removeEventListener("click", handleMenuClick);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          aria-label="Menace Voice home"
          className={styles.logo}
          href="#evolv-ai-top"
        >
          <Brand />
        </a>

        <nav aria-label="Primary navigation" className={styles.desktopNav}>
          <ul>
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a href="#evolv-ai-top">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a className={styles.contact} href="#demo">
            Sign in
          </a>
          <a className={styles.waitlist} href="#start">
            Start building
          </a>
          <button
            aria-controls={menuId}
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className={styles.menuButton}
            onClick={() => setMenuOpen((open) => !open)}
            ref={menuButtonRef}
            type="button"
          >
            <span
              aria-hidden="true"
              className={styles.menuIcon}
              data-open={menuOpen}
            >
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className={styles.menuPanel} id={menuId} ref={menuPanelRef}>
          <nav aria-label="Mobile navigation" className={styles.mobileNav}>
            <ul>
              {NAV_LINKS.map((label, index) => (
                <li key={label}>
                  <a
                    href="#evolv-ai-top"
                    ref={index === 0 ? firstLinkRef : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a className={styles.demoButton} href="#demo">
              Start building
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
