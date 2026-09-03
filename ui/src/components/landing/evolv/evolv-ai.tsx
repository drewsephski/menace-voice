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

export interface EvolvAiLandingProps {
  loginHref: string;
  signupEnabled: boolean;
  signupHref: string;
}

export default function EvolvAiLanding({
  loginHref,
  signupEnabled,
  signupHref,
}: EvolvAiLandingProps) {
  return (
    <div className={styles.root} data-template="menace-voice" id="menace-voice-top">
      <Header
        loginHref={loginHref}
        signupEnabled={signupEnabled}
        signupHref={signupHref}
      />
      <main className={styles.rail}>
        <Hero
          loginHref={loginHref}
          signupEnabled={signupEnabled}
          signupHref={signupHref}
        />
        <Statement />
        <Platform />
        <UseCases />
        <Walkthrough />
        <Integrations />
        <Faq />
        <Footer
          loginHref={loginHref}
          signupEnabled={signupEnabled}
          signupHref={signupHref}
        />
      </main>
      <a
        aria-label="Back to top"
        className={styles.backToTop}
        href="#menace-voice-top"
      >
        ↑
      </a>
    </div>
  );
}
