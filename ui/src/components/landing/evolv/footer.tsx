import styles from "./footer.module.css";
import type { LandingNavigation } from "./landing-links";
import { ArrowIcon, Brand } from "./primitives";

function getGroups(navigation: LandingNavigation) {
  return [
    {
      title: "Product",
      links: [
        { label: "Platform", href: "#platform" },
        { label: "Use cases", href: "#use-cases" },
        { label: "Walkthrough", href: "#product-walkthrough" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Build",
      links: [
        { label: "Documentation", href: navigation.docs },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Workspace",
      links: [
        { label: "Get started", href: navigation.startBuilding },
        { label: "Sign in", href: navigation.signIn },
      ],
    },
  ];
}

export function Footer({ navigation }: { navigation: LandingNavigation }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.primary}>
        <div className={styles.brandColumn}>
          <Brand />
          <p>
            Voice agents for the way your team handles calls.
            Build a workflow, test it, and make it your own.
          </p>
          <a className={styles.releaseLink} href={navigation.docs}>
            Explore the docs <ArrowIcon />
          </a>
        </div>
        <nav aria-label="Footer" className={styles.groups}>
          {getGroups(navigation).map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>© 2026 Menace Voice. Built by Menace.</p>

      </div>
    </footer>
  );
}
