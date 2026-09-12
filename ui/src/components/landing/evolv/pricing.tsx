import { SubscriptionPlanCards } from "@/components/billing/SubscriptionPlanCards";
import { PUBLIC_SUBSCRIPTION_PLANS } from "@/lib/billing/plans";

import type { LandingNavigation } from "./landing-links";
import styles from "./pricing.module.css";
import { SectionLabel } from "./primitives";

export function Pricing({ navigation }: { navigation: LandingNavigation }) {
  return (
    <section className={styles.section} id="pricing" tabIndex={-1}>
      <div className={styles.heading}>
        <SectionLabel>Pricing</SectionLabel>
        <h2>Start free. Scale when your voice agents go live.</h2>
        <p className={styles.note}>
          Plans cover the platform. AI provider usage, phone numbers, and carrier
          charges are separate. Start with a browser test; the Free plan does not
          include phone calls.
        </p>
      </div>
      <SubscriptionPlanCards
        actionHref={navigation.startBuilding}
        className={styles.cards}
        plans={PUBLIC_SUBSCRIPTION_PLANS}
      />
    </section>
  );
}
