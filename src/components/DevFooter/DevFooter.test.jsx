import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DevFooter from "./DevFooter";

describe("DevFooter component", () => {
  it("renders author and github link correctly", () => {
    render(<DevFooter />);

    const ghIcon = screen.getByAltText("github profile");
    expect(ghIcon).toBeInTheDocument();
    expect(ghIcon).toHaveAttribute("src", expect.stringContaining("gh-icon.svg"));

    const link = screen.getByRole("link", { name: "github profile" });
    expect(link).toHaveAttribute("href", "https://github.com/arthwr");
  });

  it("displays the author name and copyright year", () => {
    render(<DevFooter />);

    expect(screen.getByText(/Designed & Developed by Arthur Utegenov/i)).toBeInTheDocument();

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© Copyright ${currentYear}`))).toBeInTheDocument();
  });
});
