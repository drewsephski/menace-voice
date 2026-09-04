import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { TelephonyProviderMetadata } from "@/client/types.gen";

import { ProviderSetupResources } from "./ProviderSetupResources";

const provider: TelephonyProviderMetadata = {
  provider: "twilio",
  display_name: "Twilio",
  fields: [],
  docs_url: "https://voice.menaceui.com/docs/integrations/telephony/twilio",
  estimated_phone_number_price: "From $1.15/mo · US local",
  phone_number_url:
    "https://www.twilio.com/docs/numbers-and-senders/phone-number-senders",
  pricing_url: "https://www.twilio.com/en-us/voice/pricing/us",
};

describe("ProviderSetupResources", () => {
  it("shows qualified pricing and provider-specific links", () => {
    render(<ProviderSetupResources provider={provider} />);

    expect(screen.getByText(/From \$1\.15\/mo · US local/)).toBeTruthy();
    expect(screen.getByRole("link", { name: /Setup guide/ }).getAttribute("href")).toBe(
      provider.docs_url,
    );
    expect(screen.getByRole("link", { name: /Get a number/ }).getAttribute("href")).toBe(
      provider.phone_number_url,
    );
    expect(screen.getByRole("link", { name: /Pricing/ }).getAttribute("href")).toBe(
      provider.pricing_url,
    );
  });

  it("omits unavailable external resources without hiding the estimate", () => {
    render(
      <ProviderSetupResources
        provider={{
          ...provider,
          provider: "ari",
          display_name: "Asterisk ARI",
          estimated_phone_number_price: "Carrier priced separately",
          phone_number_url: null,
          pricing_url: null,
        }}
      />,
    );

    expect(screen.getByText(/Carrier priced separately/)).toBeTruthy();
    expect(screen.queryByRole("link", { name: /Get a number/ })).toBeNull();
    expect(screen.queryByRole("link", { name: /Pricing/ })).toBeNull();
  });
});
