import EvolvAiLanding from "./evolv";

interface LandingPageProps {
  authProvider: "local" | "stack" | string;
  signupEnabled: boolean;
}

export function LandingPage({ authProvider, signupEnabled }: LandingPageProps) {
  const loginHref = authProvider === "stack" ? "/handler/sign-in" : "/auth/login";
  const signupHref = authProvider === "stack" ? "/handler/sign-up" : "/auth/signup";

  return (
    <EvolvAiLanding
      loginHref={loginHref}
      signupEnabled={signupEnabled}
      signupHref={signupHref}
    />
  );
}
