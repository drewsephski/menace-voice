"use client";

import {
  CalendarCheckIcon,
  HeadsetIcon,
  MegaphoneIcon,
  PhoneIncomingIcon,
  UserRoundCheckIcon,
  WaypointsIcon,
} from "@animateicons/react/lucide";
import { useReducedMotion } from "framer-motion";
import { type ComponentProps, type ComponentRef, useRef } from "react";

import styles from "./use-cases.module.css";

const ICONS = {
  lead: UserRoundCheckIcon,
  calendar: CalendarCheckIcon,
  support: HeadsetIcon,
  phone: PhoneIncomingIcon,
  outreach: MegaphoneIcon,
  workflow: WaypointsIcon,
} as const;

type UseCaseCardProps = Pick<
  ComponentProps<"a">,
  "href" | "aria-labelledby" | "children"
> & { icon: keyof typeof ICONS };

export function UseCaseCard({ icon, children, ...props }: UseCaseCardProps) {
  const Icon = ICONS[icon];
  const iconRef = useRef<ComponentRef<typeof Icon>>(null);
  const reducedMotion = useReducedMotion();

  function startAnimation() {
    if (!reducedMotion) iconRef.current?.startAnimation();
  }

  return (
    <a
      {...props}
      className={styles.card}
      onMouseEnter={startAnimation}
      onMouseLeave={(event) => {
        if (!event.currentTarget.matches(":focus-visible")) {
          iconRef.current?.stopAnimation();
        }
      }}
      onFocus={startAnimation}
      onBlur={(event) => {
        if (!event.currentTarget.matches(":hover")) {
          iconRef.current?.stopAnimation();
        }
      }}
    >
      <Icon
        ref={iconRef}
        aria-hidden="true"
        className={styles.icon}
        isAnimated={false}
        size={24}
      />
      {children}
    </a>
  );
}
