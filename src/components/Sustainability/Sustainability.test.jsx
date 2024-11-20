import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Sustainability from "./Sustainability.jsx";

describe("Sustainability component", () => {
  it("renders text correctly", () => {
    render(
      <MemoryRouter>
        <Sustainability />
      </MemoryRouter>
    );

    const sectionText = screen.getAllByRole("paragraph");
    expect(sectionText).toHaveLength(2);
    expect(sectionText[0]).toHaveTextContent(/Mindful for your space, gentle on the planet/i);
    expect(sectionText[1]).toHaveTextContent(
      /Our products are made with over 60% recycled materials based on product weight./i
    );
  });
});
