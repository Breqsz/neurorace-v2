import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MetricBar } from "@/components/signal/MetricBar";

describe("MetricBar", () => {
  it("expõe o valor via progressbar acessível", () => {
    render(<MetricBar label="Foco médio" value={72} />);
    const bar = screen.getByRole("progressbar", { name: "Foco médio" });
    expect(bar).toHaveAttribute("aria-valuenow", "72");
  });
});
