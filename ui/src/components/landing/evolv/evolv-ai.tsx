import { Faq } from "./faq";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { Integrations } from "./integrations";
import { Platform } from "./platform";
import { Statement } from "./statement";
import styles from "./template.module.css";
import { UseCases } from "./use-cases";
import { Walkthrough } from "./walkthrough";

export default function EvolvAiTemplate() {
  return (
    <div className={styles.root} data-template="evolv-ai" id="evolv-ai-top">
      <Header />
      <main className={styles.rail}>
        <Hero />
        <Statement />
        <Platform />
        <UseCases />
        <Walkthrough />
        <Integrations />
        <Faq />
        <Footer />
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
