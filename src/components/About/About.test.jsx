import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "./About";
import { MemoryRouter } from "react-router-dom";

describe("About component", () => {
  it("renders main content correctly", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(screen.getByText(/At Tanoshi, we believe that/i)).toBeInTheDocument();
    expect(screen.getByText(/Whether you're searching for a perfect gift/i)).toBeInTheDocument();

    const button = screen.getByLabelText("visit products page");
    expect(button).toBeInTheDocument();

    const img = screen.getByAltText("");
    expect(img).toBeInTheDocument();
  });
});
