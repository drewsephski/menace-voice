import type { Metadata } from "next";

import { DocsPage } from "@/components/docs/DocsPage";
import { getLandingNavigation } from "@/components/landing/evolv/landing-links";
import { getAuthProvider, getSignupEnabled } from "@/lib/auth/config";

export const metadata: Metadata = {
  title: "Docs | Menace Voice",
  description:
    "Build, test, and ship voice agents with Menace Voice. Start with the product guides or switch to agent docs for implementation patterns.",
};

export const dynamic = "force-dynamic";

export default async function DocsRoute() {
  const [authProvider, signupEnabled] = await Promise.all([
    getAuthProvider(),
    getSignupEnabled(),
  ]);
  const navigation = getLandingNavigation(authProvider, signupEnabled);
  return (
    <DocsPage
      signInHref={navigation.signIn}
      startBuildingHref={navigation.startBuilding}
    />
  );
}
