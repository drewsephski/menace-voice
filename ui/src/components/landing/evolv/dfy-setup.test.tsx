import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { DFY_SETUP_PAYMENT_LINK, DfySetup } from "./dfy-setup";

vi.mock("./dfy-setup.module.css", () => ({ default: {} }));
vi.mock("./primitives.module.css", () => ({ default: {} }));

describe("DfySetup", () => {
  it("renders the DFY checkout CTA with the Stripe payment link", () => {
    render(<DfySetup />);

    const section = document.getElementById("dfy-setup");
    expect(section).toBeTruthy();

    expect(screen.getByText("Done-for-you")).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        name: "Need one production agent live — without building it yourself?",
      }),
    ).toBeTruthy();

    const checkout = screen.getByRole("link", {
      name: "Get a production agent set up",
    });
    expect(checkout.getAttribute("href")).toBe(DFY_SETUP_PAYMENT_LINK);
    expect(checkout.getAttribute("target")).toBe("_blank");
    expect(checkout.getAttribute("rel")).toBe("noopener noreferrer");
  });
});
