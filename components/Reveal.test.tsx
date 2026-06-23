import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Reveal } from "@/components/Reveal";

describe("Reveal", () => {
  it("renderiza os filhos", () => {
    render(<Reveal>conteúdo revelado</Reveal>);
    expect(screen.getByText("conteúdo revelado")).toBeInTheDocument();
  });

  it("aceita a variante label", () => {
    render(<Reveal variant="label">rótulo</Reveal>);
    expect(screen.getByText("rótulo")).toBeInTheDocument();
  });
});
