import type { Metadata } from "next";

import { DocsPage } from "@/components/docs/DocsPage";

export const metadata: Metadata = {
  title: "Docs | Menace Voice",
  description:
    "Build, test, and ship voice agents with Menace Voice. Start with the product guides or switch to agent docs for implementation patterns.",
};

export default function DocsRoute() {
  return <DocsPage />;
}
