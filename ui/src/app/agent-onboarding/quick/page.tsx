import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

import { QuickAgentComposer } from "@/components/workflow/QuickAgentComposer";

export default function QuickAgentSetupPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-3xl flex-col px-5 py-8 sm:px-8">
      <Link href="/workflow" className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Agents
      </Link>

      <div className="my-auto py-12 sm:py-20">
        <div className="mb-7">
          <p className="mb-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Quick setup
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Describe it. Bring it to life.</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            Tell us who your agent is and what it should do. AI will build the conversation for you.
          </p>
        </div>

        <QuickAgentComposer />

        <div className="mt-8 border-t border-border/60 pt-5 text-sm text-muted-foreground">
          Prefer to choose every detail?{" "}
          <Link href="/agent-onboarding" className="font-medium text-foreground underline-offset-4 hover:underline">Guided setup <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </div>
  );
}
