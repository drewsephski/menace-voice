import { isNextRouterError } from "next/dist/client/components/is-next-router-error";
import { redirect } from "next/navigation";

import { getWorkflowCountApiV1WorkflowCountGet } from "@/client/sdk.gen";
import { LandingPage } from "@/components/landing/LandingPage";
import {
  getServerAccessToken,
  getServerAuthProvider,
  getServerUser,
} from "@/lib/auth/server";
import { getSignupEnabled } from "@/lib/auth/config";
import logger from "@/lib/logger";
import { getRedirectUrl } from "@/lib/utils";

export const dynamic = "force-dynamic";

async function redirectAuthenticatedLocalUser(accessToken: string) {
  const countResponse = await getWorkflowCountApiV1WorkflowCountGet({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  logger.debug("[HomePage] Found workflows for local provider:", {
    total: countResponse.data?.total,
    active: countResponse.data?.active,
  });

  if (countResponse.data && countResponse.data.active > 0) {
    redirect("/workflow");
  }

  redirect("/workflow/create");
}

export default async function Home() {
  logger.debug("[HomePage] Starting Home page render");
  const [authProvider, signupEnabled] = await Promise.all([
    getServerAuthProvider(),
    getSignupEnabled(),
  ]);
  logger.debug("[HomePage] Auth provider:", authProvider);

  if (authProvider === "local") {
    logger.debug("[HomePage] Local provider detected, checking session");

    try {
      const accessToken = await getServerAccessToken();
      if (accessToken) {
        await redirectAuthenticatedLocalUser(accessToken);
      }
    } catch (error) {
      if (isNextRouterError(error)) {
        throw error;
      }

      logger.error("[HomePage] Error checking workflows for local provider:", error);
      redirect("/workflow/create");
    }

    return (
      <LandingPage authProvider={authProvider} signupEnabled={signupEnabled} />
    );
  }

  logger.debug("[HomePage] Getting server user...");
  const user = await getServerUser();

  logger.debug("[HomePage] Server user result:", {
    hasUser: !!user,
    userId: user?.id,
    authProvider,
  });

  if (user) {
    try {
      if (authProvider === "stack" && "getAuthJson" in user) {
        logger.debug("[HomePage] Getting auth token from Stack user...");
        const token = await user.getAuthJson();
        logger.debug("[HomePage] Got auth token:", { hasToken: !!token?.accessToken });
        const permissions =
          "listPermissions" in user && "selectedTeam" in user
            ? (await user.listPermissions(user.selectedTeam!)) ?? []
            : [];
        logger.debug("[HomePage] Got permissions:", { count: permissions.length });
        const redirectUrl = await getRedirectUrl(token?.accessToken ?? "", permissions);
        logger.debug("[HomePage] Redirecting to:", redirectUrl);
        redirect(redirectUrl);
      }
    } catch (error) {
      if (
        error instanceof Error &&
        "digest" in error &&
        typeof error.digest === "string" &&
        error.digest.startsWith("NEXT_REDIRECT")
      ) {
        throw error;
      }

      console.error("API unavailable, showing landing page:", error);
    }
  }

  return (
    <LandingPage authProvider={authProvider} signupEnabled={signupEnabled} />
  );
}
