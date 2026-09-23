import styles from "./dfy-setup.module.css";
import { ArrowIcon } from "./primitives";

export const DFY_SETUP_PAYMENT_LINK =
  "https://buy.stripe.com/6oU6oJ3TefeKcqrcxN3ks00";

export function DfySetup() {
  return (
    <section className={styles.section} id="dfy-setup" tabIndex={-1}>
      <div className={styles.band}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Done-for-you</p>
          <h2 className={styles.headline}>
            Need one production agent live — without building it yourself?
          </h2>
          <p className={styles.body}>
            Fixed-scope setup: lead-qual, appointment booking, or inbound
            reception. Intake, config, telephony wire-up, test pass, handoff doc,
            7-day bugfix. Delivered on <strong>your</strong> Menace Voice
            account. Platform + carrier usage billed on your plan separately.
          </p>
          <p className={styles.finePrint}>
            Starts within 3 business days of paid intake. Refund before intake
            if we can’t start within 5 business days; after intake starts, no
            refund (one scope swap allowed).
          </p>
        </div>
        <div className={styles.action}>
          <p className={styles.price}>
            <span className={styles.priceAmount}>$497</span>
            <span className={styles.priceTerm}>one-time</span>
          </p>
          <a
            className={styles.cta}
            href={DFY_SETUP_PAYMENT_LINK}
            rel="noopener noreferrer"
            target="_blank"
          >
            Get a production agent set up <ArrowIcon />
          </a>
          <p className={styles.serviceNote}>Setup service — not a platform plan</p>
        </div>
      </div>
    </section>
  );
}
