import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ActionButton from "./ActionButton.jsx";

describe("Action button component", () => {
  const label = "Click me";
  const path = "/home";
  const ariaLabel = "Go to Home";

  it("renders button correctly with passed props", () => {
    render(
      <MemoryRouter>
        <ActionButton label={label} path={path} ariaLabel={ariaLabel} />
      </MemoryRouter>
    );

    const buttonLink = screen.getByRole("link", { name: ariaLabel });
    expect(buttonLink).toBeInTheDocument();
    expect(buttonLink).toHaveAttribute("href", path);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("defaults to label when aria-label is not provided", () => {
    render(
      <MemoryRouter>
        <ActionButton label={label} path={path} />
      </MemoryRouter>
    );

    const buttonLink = screen.getByRole("link", { name: label });
    expect(buttonLink).toBeInTheDocument();
    expect(buttonLink).toHaveAttribute("href", path);
  });
});
