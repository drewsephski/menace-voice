import Link from "next/link";

import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";

export const PILOT_OFFER_TERMS = [
  "$750 prepaid",
  "14-day",
  "one-number",
  "one-workflow",
  "300-connected-minute",
] as const;

export const PILOT_SAFETY_LIMITATION =
  "No autonomous dispatch, diagnosis, hazardous repair advice, price/quote/warranty determination, appointment/technician/part/service guarantee, licensed-technician impersonation, emergency-response promise, jurisdiction-specific emergency statement unless customer-configured, or claim that a human received data without evidence.";

export function PilotOffer({ onRequestQualification }: { onRequestQualification: () => void }) {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <Link aria-label="Menace Voice home" href="/">
          <BrandLogo inverse className="h-7" />
        </Link>
        <span className="text-sm text-zinc-400">HVAC missed-call recovery pilot</span>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-start lg:pt-24">
        <div>
          <h1 className="max-w-3xl text-4xl font-light tracking-[-0.04em] text-zinc-50 sm:text-6xl">
            Recover HVAC calls that would otherwise go to voicemail.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            A tightly scoped missed-call recovery pilot for one operator: one number, one workflow, and a clear review point after 14 days.
          </p>
          <ul aria-label="Pilot offer terms" className="mt-8 grid max-w-xl gap-2 border-y border-zinc-800 py-5 text-sm text-zinc-300 sm:grid-cols-2">
            {PILOT_OFFER_TERMS.map((term) => <li className="border-l border-zinc-700 pl-3" key={term}>{term}</li>)}
          </ul>
          <Button className="mt-8 bg-white text-zinc-950 hover:bg-zinc-200" onClick={onRequestQualification} size="lg" type="button">
            Request pilot qualification
          </Button>
        </div>

        <aside className="border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-lg font-medium">A bounded operating pilot</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            This is not a replacement for your dispatch, safety, or service judgment. It gathers the context needed for a truthful callback or escalation path.
          </p>
          <p className="mt-4 text-xs leading-5 text-zinc-500">{PILOT_SAFETY_LIMITATION}</p>
        </aside>
      </section>
    </>
  );
}
