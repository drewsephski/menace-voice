import { Mic, Phone, Plug, Sparkles } from "lucide-react";
import Link from "next/link";

import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";

const FEATURES = [
  {
    icon: Mic,
    title: "Speech-to-speech",
    description:
      "Build natural voice agents with real-time transcription, reasoning, and synthesis in one pipeline.",
  },
  {
    icon: Plug,
    title: "MCP-native tools",
    description:
      "Connect external systems and custom actions through the Model Context Protocol.",
  },
  {
    icon: Sparkles,
    title: "Bring your own models",
    description:
      "Use Menace-managed models or plug in your own LLM, TTS, and STT providers.",
  },
  {
    icon: Phone,
    title: "Telephony ready",
    description:
      "Deploy agents on phone lines and WebRTC with SIP, campaigns, and call routing.",
  },
] as const;

const HIGHLIGHTS = ["Speech-to-speech", "MCP-native", "BYOK — any model"] as const;

interface LandingPageProps {
  authProvider: "local" | "stack" | string;
  signupEnabled: boolean;
}

export function LandingPage({ authProvider, signupEnabled }: LandingPageProps) {
  const loginHref = authProvider === "stack" ? "/handler/sign-in" : "/auth/login";
  const signupHref = authProvider === "stack" ? "/handler/sign-up" : "/auth/signup";

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 size-[32rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--cta), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 size-[28rem] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--cta), transparent 70%)" }}
      />

      <header className="relative z-10 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" aria-label="Menace Voice home">
            <BrandLogo className="h-8" />
          </Link>
          <Button variant="outline" asChild>
            <Link href={loginHref}>Sign in</Link>
          </Button>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <section className="mx-auto max-w-3xl text-center">
          <ul className="mb-6 flex flex-wrap justify-center gap-2">
            {HIGHLIGHTS.map((point) => (
              <li
                key={point}
                className="rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {point}
              </li>
            ))}
          </ul>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Build and deploy voice AI agents
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Menace Voice is the platform for conversational agents over phone and
            WebRTC — design workflows, connect tools, and ship production voice
            experiences.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {signupEnabled ? (
              <Button
                asChild
                size="lg"
                className="min-w-[10rem] bg-[var(--cta)] text-[var(--cta-foreground)] hover:bg-[color-mix(in_oklch,var(--cta)_82%,black)]"
              >
                <Link href={signupHref}>Get started</Link>
              </Button>
            ) : null}
            <Button variant="outline" asChild size="lg" className="min-w-[10rem]">
              <Link href={loginHref}>Sign in</Link>
            </Button>
          </div>
        </section>

        <section className="mt-24 grid gap-6 sm:grid-cols-2">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-border/60 bg-background">
                <Icon className="size-5 text-[var(--cta)]" aria-hidden />
              </div>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        <p>Menace Voice — voice AI for production deployments</p>
      </footer>
    </div>
  );
}
