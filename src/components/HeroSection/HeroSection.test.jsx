import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import HeroSection from "./HeroSection.jsx";

describe("HeroSection component", () => {
  it("renders heading title and img", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("tanoshi leaf logo");
    expect(screen.getByRole("heading", { name: "Tanoshi" })).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("main-logo-large.svg"));
  });
});
