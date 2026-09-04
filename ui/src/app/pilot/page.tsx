import type { Metadata } from "next";

import { PilotQualificationForm } from "@/components/pilot/PilotQualificationForm";

export const metadata: Metadata = {
  title: "HVAC missed-call recovery pilot | Menace Voice",
  description: "A bounded $750 prepaid HVAC missed-call recovery pilot.",
};

export default function PilotPage() {
  return <PilotQualificationForm />;
}
