export interface LandingNavigation {
  docs: string;
  signIn: string;
  startBuilding: string;
}

export function getLandingNavigation(
  authProvider: string,
  signupEnabled: boolean,
): LandingNavigation {
  const isStack = authProvider === "stack";
  const signIn = isStack ? "/handler/sign-in" : "/auth/login";
  const signUp = isStack ? "/handler/sign-up" : "/auth/signup";

  return {
    docs: "/docs",
    signIn,
    startBuilding: signupEnabled ? signUp : signIn,
  };
}
