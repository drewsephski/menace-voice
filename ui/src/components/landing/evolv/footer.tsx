import styles from "./footer.module.css";
import { Brand } from "./primitives";

const groups = [
  {
    title: "Explore",
    links: [
      { href: "#platform", label: "Platform" },
      { href: "#use-cases", label: "Use cases" },
      { href: "#product-walkthrough", label: "Product walkthrough" },
      { href: "#integrations", label: "Integrations" },
    ],
  },
  {
    title: "Build",
    links: [
      { href: "https://docs.dograh.com/getting-started/first-agent", label: "First agent" },
      { href: "https://docs.dograh.com/getting-started/connect-telephony", label: "Connect telephony" },
      { href: "https://docs.dograh.com/getting-started/add-tools-and-knowledge-base", label: "Tools & knowledge" },
      { href: "https://docs.dograh.com/integrations/mcp", label: "Build with MCP" },
    ],
  },
  {
    title: "Developers",
    links: [
      { href: "https://docs.dograh.com", label: "Documentation" },
      { href: "https://docs.dograh.com/api-reference/overview", label: "API reference" },
      { href: "https://docs.dograh.com/sdks/introduction", label: "SDKs" },
      { href: "https://docs.dograh.com/developer/workflow-schema", label: "Workflow schema" },
    ],
  },
  {
    title: "Open source",
    links: [
      { href: "https://github.com/drewsephski/menace-voice", label: "GitHub" },
      { href: "https://docs.dograh.com/deployment/introduction", label: "Self-hosting" },
      { href: "https://docs.dograh.com/deployment/scaling", label: "Scaling" },
      { href: "https://docs.dograh.com/contribution/setup", label: "Contributing" },
    ],
  },
] as const;

function FooterBadge({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: string;
}) {
  return (
    <a aria-label={label} className={styles.social} href={href}>
      {children}
    </a>
  );
}

interface FooterProps {
  loginHref: string;
  signupEnabled: boolean;
  signupHref: string;
}

export function Footer({ loginHref, signupEnabled, signupHref }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.primary}>
        <div className={styles.brandColumn}>
          <Brand />
          <p>
            Build, test, and deploy voice agents across phone and WebRTC, with
            your models, your tools, and your infrastructure.
          </p>
          <div className={styles.subscribe}>
            <span>Start a conversation</span>
            <div className={styles.footerActions}>
              <a href={signupEnabled ? signupHref : loginHref}>
                {signupEnabled ? "Build your first agent" : "Sign in"}
              </a>
              <a href="https://docs.dograh.com">Read the docs</a>
            </div>
          </div>
        </div>
        <nav aria-label="Footer" className={styles.groups}>
          {groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(({ href, label }) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>© 2026 Menace Voice. Built by Menace.</p>
        <div className={styles.socials}>
          <FooterBadge href="https://docs.dograh.com" label="Documentation">
            DOC
          </FooterBadge>
          <FooterBadge
            href="https://github.com/drewsephski/menace-voice"
            label="GitHub"
          >
            GH
          </FooterBadge>
        </div>
      </div>
    </footer>
  );
}
