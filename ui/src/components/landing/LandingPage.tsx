import EvolvAiLanding from "./evolv";
import { getLandingNavigation } from "./evolv/landing-links";

interface LandingPageProps {
  authProvider: "local" | "stack" | string;
  signupEnabled: boolean;
}

export function LandingPage({ authProvider, signupEnabled }: LandingPageProps) {
  return (
    <EvolvAiLanding
      navigation={getLandingNavigation(authProvider, signupEnabled)}
    />
  );
}
