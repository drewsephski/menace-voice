import { Faq } from "./faq";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { Integrations } from "./integrations";
import type { LandingNavigation } from "./landing-links";
import { Platform } from "./platform";
import { Pricing } from "./pricing";
import { Statement } from "./statement";
import styles from "./template.module.css";
import { UseCases } from "./use-cases";
import { Walkthrough } from "./walkthrough";

export default function EvolvAiTemplate({
  navigation,
}: {
  navigation: LandingNavigation;
}) {
  return (
    <div className={styles.root} data-template="evolv-ai" id="evolv-ai-top">
      <Header navigation={navigation} />
      <main className={styles.rail}>
        <Hero navigation={navigation} />
        <Statement />
        <Platform />
        <UseCases navigation={navigation} />
        <Walkthrough />
        <Integrations navigation={navigation} />
        <Pricing navigation={navigation} />
        <Faq />
        <Footer navigation={navigation} />
      </main>
      <a
        aria-label="Back to top"
        className={styles.backToTop}
        href="#evolv-ai-top"
      >
        ↑
      </a>
    </div>
  );
}
