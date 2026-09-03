import Image from "next/image";
import styles from "./integrations.module.css";
import { ArrowIcon, SectionLabel, SparkleIcon } from "./primitives";

const integrations = [
  "apple",
  "sheets",
  "calendar",
  "outlook",
  "linkedin",
  "telegram",
  "slack",
  "google",
  "notion",
  "github",
  "snowflake",
  "drive",
  "discord",
  "youtube",
  "trello",
  "excel",
  "asana",
  "monday",
  "salesforce",
  "hubspot",
] as const;

const integrationSources = {
  apple: "/templates/evolv-ai/apple.png",
  sheets: "/templates/evolv-ai/sheets.png",
  calendar: "/templates/evolv-ai/calendar.png",
  outlook: "/templates/evolv-ai/outlook.png",
  linkedin: "/templates/evolv-ai/linkedin.png",
  telegram: "/templates/evolv-ai/telegram.png",
  slack: "/templates/evolv-ai/slack.png",
  google: "/templates/evolv-ai/google.png",
  notion: "/templates/evolv-ai/notion.png",
  github: "/templates/evolv-ai/github.png",
  snowflake: "/templates/evolv-ai/snowflake.png",
  drive: "/templates/evolv-ai/drive.png",
  discord: "/templates/evolv-ai/discord.png",
  youtube: "/templates/evolv-ai/youtube.png",
  trello: "/templates/evolv-ai/trello.png",
  excel: "/templates/evolv-ai/excel.png",
  asana: "/templates/evolv-ai/asana.png",
  monday: "/templates/evolv-ai/monday.png",
  salesforce: "/templates/evolv-ai/salesforce.png",
  hubspot: "/templates/evolv-ai/hubspot.png",
} satisfies Record<(typeof integrations)[number], string>;

type CellKind = (typeof integrations)[number] | "sparkle" | "stripe";

const cells: Array<{ id: string; kind: CellKind }> = [
  { id: "north-west", kind: "stripe" },
  { id: "apple", kind: "apple" },
  { id: "sheets", kind: "sheets" },
  { id: "calendar", kind: "calendar" },
  { id: "north-east", kind: "stripe" },
  { id: "outlook", kind: "outlook" },
  { id: "linkedin", kind: "linkedin" },
  { id: "telegram", kind: "telegram" },
  { id: "slack", kind: "slack" },
  { id: "google", kind: "google" },
  { id: "notion", kind: "notion" },
  { id: "github", kind: "github" },
  { id: "sparkle", kind: "sparkle" },
  { id: "snowflake", kind: "snowflake" },
  { id: "drive", kind: "drive" },
  { id: "discord", kind: "discord" },
  { id: "youtube", kind: "youtube" },
  { id: "trello", kind: "trello" },
  { id: "excel", kind: "excel" },
  { id: "asana", kind: "asana" },
  { id: "south-west", kind: "stripe" },
  { id: "monday", kind: "monday" },
  { id: "salesforce", kind: "salesforce" },
  { id: "hubspot", kind: "hubspot" },
  { id: "south-east", kind: "stripe" },
];

export function Integrations() {
  return (
    <section className={styles.section} id="integrations">
      <div className={styles.heading}>
        <SectionLabel>Integrations</SectionLabel>
        <h2>Connect every conversation to the systems behind it.</h2>
      </div>
      <div className={styles.grid}>
        {cells.map(({ id, kind }) => {
          if (kind === "stripe") {
            return (
              <div aria-hidden="true" className={styles.stripe} key={id} />
            );
          }
          if (kind === "sparkle") {
            return (
              <div className={`${styles.cell} ${styles.sparkle}`} key={id}>
                <span>
                  <SparkleIcon size={28} />
                </span>
              </div>
            );
          }
          return (
            <div className={styles.cell} key={id}>
              <Image
                alt={`${kind} integration`}
                height={112}
                src={integrationSources[kind]}
                width={112}
              />
            </div>
          );
        })}
      </div>
      <a
        className={styles.action}
        href="https://docs.dograh.com/integrations/telephony/overview"
      >
        Explore integrations <ArrowIcon />
      </a>
    </section>
  );
}
