import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HeroSection from "./HeroSection.jsx";

describe("HeroSection component", () => {
  it("renders heading title and img", () => {
    render(<HeroSection />);

    const logo = screen.getByAltText("tanoshi leaf logo");
    expect(screen.getByRole("heading", { name: "Tanoshi" })).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("main-logo-large.svg"));
  });
});
