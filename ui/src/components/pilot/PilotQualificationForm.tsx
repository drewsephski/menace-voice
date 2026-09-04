"use client";

import posthog from "posthog-js";
import { type FormEvent, useEffect, useRef, useState } from "react";

import { CaptchaChallenge } from "@/components/lead-forms/CaptchaChallenge";
import { detectCountry, detectTimezone } from "@/components/lead-forms/detectCountry";
import { isValidEmail } from "@/components/lead-forms/isPersonalEmail";
import { postLeadToService } from "@/components/lead-forms/onboardingServiceClient";
import { PhoneField } from "@/components/lead-forms/PhoneField";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PostHogEvent } from "@/constants/posthog-events";
import logger from "@/lib/logger";

import { PilotOffer } from "./PilotOffer";
import {
  AFTER_HOURS_OPTIONS,
  CARRIER_OPTIONS,
  Field,
  INITIAL_VALUES,
  type QualificationValues,
  SelectField,
  TEAM_SIZES,
  VOLUME_OPTIONS,
} from "./PilotQualificationFields";

function isComplete(values: QualificationValues) {
  return (
    Boolean(values.company.trim()) &&
    Boolean(values.contact.trim()) &&
    isValidEmail(values.email) &&
    Boolean(values.phone.trim()) &&
    Boolean(values.serviceArea.trim()) &&
    Boolean(values.teamSize) &&
    Boolean(values.afterHoursHandling) &&
    Boolean(values.volume) &&
    Boolean(values.carrier)
  );
}

export function PilotQualificationForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "invalid" | "error" | "success">("idle");
  const started = useRef(false);
  const formRef = useRef<HTMLElement>(null);

  useEffect(() => {
    posthog.capture(PostHogEvent.PILOT_PAGE_VIEWED, { source: "pilot" });
  }, []);

  const update = <Key extends keyof QualificationValues>(key: Key, value: QualificationValues[Key]) => {
    setStatus("idle");
    setValues((current) => ({ ...current, [key]: value }));
  };

  const trackStarted = () => {
    if (started.current) return;
    started.current = true;
    posthog.capture(PostHogEvent.PILOT_QUALIFICATION_STARTED, { source: "pilot" });
  };

  const focusQualification = () => {
    posthog.capture(PostHogEvent.PILOT_PRIMARY_CTA_CLICKED, { source: "pilot" });
    trackStarted();
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    requestAnimationFrame(() => document.getElementById("pilot-company")?.focus());
  };

  const beginSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackStarted();
    if (!isComplete(values)) {
      setStatus("invalid");
      return;
    }
    setCaptchaOpen(true);
  };

  const submitQualification = async () => {
    setCaptchaOpen(false);
    setSubmitting(true);
    setStatus("idle");
    posthog.capture(PostHogEvent.PILOT_QUALIFICATION_SUBMISSION_ATTEMPTED, { source: "pilot" });

    try {
      const result = await postLeadToService("hire_expert", {
        source: "pilot",
        origin: "website",
        country: detectCountry(),
        timezone: detectTimezone(),
        name: values.contact,
        company: values.company,
        email: values.email,
        phone: values.phone,
        volume: values.volume,
        jobTitle: "HVAC owner/operator",
        agentGoal: "HVAC missed-call recovery pilot",
        serviceArea: values.serviceArea,
        teamSize: values.teamSize,
        afterHoursHandling: values.afterHoursHandling,
        carrier: values.carrier,
        fieldServiceTool: values.fieldServiceTool || undefined,
      });

      if (result?.ok === true) {
        posthog.capture(PostHogEvent.PILOT_QUALIFICATION_SUBMITTED, { source: "pilot" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error: unknown) {
      logger.warn("Pilot qualification submission failed", {
        failure: error instanceof DOMException && error.name === "AbortError" ? "timeout" : "unexpected",
      });
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#181818] text-zinc-50">
      <main>
        <PilotOffer onRequestQualification={focusQualification} />

        <section className="border-t border-zinc-800 bg-zinc-950/50" id="qualification" ref={formRef} tabIndex={-1}>
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
            <h2 className="text-3xl font-light tracking-[-0.03em]">See whether your operation is a fit.</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Keep it brief. Qualified prospects receive a manual payment link; there is no checkout on this page.
            </p>

            {status === "success" ? (
              <div aria-live="polite" className="mt-8 border border-emerald-800 bg-emerald-950/30 p-5 text-emerald-100">
                <p className="font-medium">We received your qualification.</p>
                <p className="mt-1 text-sm text-emerald-200">If it is a fit, we will follow up with a manually issued payment link.</p>
              </div>
            ) : (
              <form aria-label="Pilot qualification" className="mt-8 grid gap-5" noValidate onFocus={trackStarted} onSubmit={beginSubmission}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company" id="pilot-company"><Input id="pilot-company" value={values.company} onChange={(event) => update("company", event.target.value)} required /></Field>
                  <Field label="Contact name" id="pilot-contact"><Input id="pilot-contact" value={values.contact} onChange={(event) => update("contact", event.target.value)} required /></Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Work email" id="pilot-email"><Input id="pilot-email" type="email" value={values.email} onChange={(event) => update("email", event.target.value)} required /></Field>
                  <Field label="Phone" id="pilot-phone"><PhoneField id="pilot-phone" value={values.phone} onChange={(phone) => update("phone", phone)} required /></Field>
                </div>
                <Field label="Service area" id="pilot-service-area"><Input id="pilot-service-area" value={values.serviceArea} onChange={(event) => update("serviceArea", event.target.value)} required /></Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField id="pilot-team-size" label="Team size" onValueChange={(value) => update("teamSize", value)} options={TEAM_SIZES} value={values.teamSize} />
                  <SelectField id="pilot-after-hours" label="After-hours handling" onValueChange={(value) => update("afterHoursHandling", value)} options={AFTER_HOURS_OPTIONS} value={values.afterHoursHandling} />
                  <SelectField id="pilot-volume" label="Approximate monthly call volume" onValueChange={(value) => update("volume", value)} options={VOLUME_OPTIONS} value={values.volume} />
                  <SelectField id="pilot-carrier" label="Current carrier" onValueChange={(value) => update("carrier", value)} options={CARRIER_OPTIONS} value={values.carrier} />
                </div>
                <Field label="Field-service or CRM tool (optional)" id="pilot-field-service"><Input id="pilot-field-service" value={values.fieldServiceTool} onChange={(event) => update("fieldServiceTool", event.target.value)} /></Field>

                {status === "invalid" ? (
                  <div aria-live="polite" className="border border-red-900 bg-red-950/30 p-4 text-sm text-red-100">
                    <p className="font-medium">Complete the required fields before requesting qualification.</p>
                  </div>
                ) : null}
                {status === "error" ? (
                  <div aria-live="polite" className="border border-red-900 bg-red-950/30 p-4 text-sm text-red-100">
                    <p className="font-medium">We could not send your qualification.</p>
                    <p className="mt-1 text-red-200">Your details are still here. Check the required fields and retry.</p>
                  </div>
                ) : null}

                <Button className="mt-1 w-full bg-white text-zinc-950 hover:bg-zinc-200 sm:w-fit" disabled={submitting} type="submit">
                  {submitting ? "Sending qualification…" : "Request pilot qualification"}
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Dialog onOpenChange={setCaptchaOpen} open={captchaOpen}>
        <DialogContent aria-describedby={undefined} className="max-w-xs border-0 bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">Spam check</DialogTitle>
          <CaptchaChallenge onCancel={() => setCaptchaOpen(false)} onVerified={() => void submitQualification()} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
