import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BackToTop } from "./back-to-top";

vi.mock("./template.module.css", () => ({ default: {} }));

afterEach(() => vi.unstubAllGlobals());

describe("BackToTop", () => {
  it.each([false, true])("scrolls with reduced motion = %s", (reducedMotion) => {
    const scrollTo = vi.fn();
    vi.stubGlobal("scrollTo", scrollTo);
    vi.stubGlobal("matchMedia", () => ({ matches: reducedMotion }));
    render(<BackToTop />);
    fireEvent.click(screen.getByRole("link", { name: "Back to top" }));
    expect(scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  });
});
