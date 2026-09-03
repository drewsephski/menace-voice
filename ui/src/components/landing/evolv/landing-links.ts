export interface LandingNavigation {
  docs: string;
  github: string;
  productHunt: string;
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
    docs: "https://docs.dograh.com",
    github: "https://github.com/drewsephski/menace-voice",
    productHunt: "https://www.producthunt.com/products/dograh",
    signIn,
    startBuilding: signupEnabled ? signUp : signIn,
  };
}
