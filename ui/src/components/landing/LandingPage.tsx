import EvolvAiLanding from "./evolv";

interface LandingPageProps {
  authProvider: "local" | "stack" | string;
  signupEnabled: boolean;
}

export function LandingPage(_props: LandingPageProps) {
  return <EvolvAiLanding />;
}
