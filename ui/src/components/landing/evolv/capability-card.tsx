"use client";

import { useReducedMotion } from "framer-motion";
import { type ComponentRef, useRef } from "react";

import { AudioLinesIcon } from "@/components/icons/lucide-animated/audio-lines";
import { BookTextIcon } from "@/components/icons/lucide-animated/book-text";
import { GitBranchIcon } from "@/components/icons/lucide-animated/git-branch";
import { PhoneIcon } from "@/components/icons/lucide-animated/phone";
import { PhoneForwardedIcon } from "@/components/icons/lucide-animated/phone-forwarded";
import { PlugZapIcon } from "@/components/icons/lucide-animated/plug-zap";

import styles from "./hero.module.css";

const ICONS = {
  flow: GitBranchIcon,
  phone: PhoneIcon,
  voice: AudioLinesIcon,
  tools: PlugZapIcon,
  knowledge: BookTextIcon,
  handoff: PhoneForwardedIcon,
} as const;

export function CapabilityCard({ icon, title, description }: {
  icon: keyof typeof ICONS;
  title: string;
  description: string;
}) {
  const Icon = ICONS[icon];
  const iconRef = useRef<ComponentRef<typeof Icon>>(null);
  const reducedMotion = useReducedMotion();

  return (
    <li
      onMouseEnter={() => {
        if (!reducedMotion) iconRef.current?.startAnimation();
      }}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <Icon
        ref={iconRef}
        aria-hidden="true"
        className={styles.capabilityIcon}
        size={18}
      />
      <div className={styles.capabilityCopy}>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
    </li>
  );
}
