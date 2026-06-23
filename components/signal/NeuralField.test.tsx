import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { NeuralField } from "@/components/signal/NeuralField";

describe("NeuralField", () => {
  it("renderiza decorativo (aria-hidden)", () => {
    const { container } = render(<NeuralField />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden");
    expect(container.querySelectorAll("circle").length).toBeGreaterThan(0);
  });
});
