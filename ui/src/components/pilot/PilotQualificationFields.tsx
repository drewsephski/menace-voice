import type { ReactNode } from "react";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type QualificationValues = {
  company: string;
  contact: string;
  email: string;
  phone: string;
  serviceArea: string;
  teamSize: string;
  afterHoursHandling: string;
  volume: string;
  carrier: string;
  fieldServiceTool: string;
};

export const INITIAL_VALUES: QualificationValues = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  serviceArea: "",
  teamSize: "",
  afterHoursHandling: "",
  volume: "",
  carrier: "",
  fieldServiceTool: "",
};

export const TEAM_SIZES = [["1-5", "1–5 people"], ["6-15", "6–15 people"], ["16-50", "16–50 people"], ["50-plus", "More than 50 people"]] as const;
export const AFTER_HOURS_OPTIONS = [["voicemail", "Voicemail"], ["forwarded", "Forwarded to a team member"], ["answering-service", "Answering service"], ["other", "Other"]] as const;
export const VOLUME_OPTIONS = [["0-5k", "0–5k calls"], ["5k-100k", "5k–100k calls"], ["100k+", "100k+ calls"], ["not-sure", "Not sure"]] as const;
export const CARRIER_OPTIONS = [["telnyx", "Telnyx"], ["twilio", "Twilio"], ["vonage", "Vonage"], ["other", "Other / not sure"]] as const;

export function Field({ children, id, label }: { children: ReactNode; id: string; label: string }) {
  return <div className="grid gap-2"><Label htmlFor={id}>{label}</Label>{children}</div>;
}

export function SelectField({ id, label, onValueChange, options, value }: {
  id: string;
  label: string;
  onValueChange: (value: string) => void;
  options: readonly (readonly [string, string])[];
  value: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Select onValueChange={onValueChange} value={value}>
        <SelectTrigger className="w-full" id={id}><SelectValue placeholder="Select" /></SelectTrigger>
        <SelectContent>{options.map(([optionValue, optionLabel]) => <SelectItem key={optionValue} value={optionValue}>{optionLabel}</SelectItem>)}</SelectContent>
      </Select>
    </div>
  );
}
