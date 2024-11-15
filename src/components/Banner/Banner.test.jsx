import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Banner from "./Banner.jsx";

describe("Banner component", () => {
  it("renders the banner section correctly", () => {
    render(
      <MemoryRouter>
        <Banner />
      </MemoryRouter>
    );

    const bannerSection = screen.getByRole("banner");
    expect(bannerSection).toBeInTheDocument();
  });

  it("renders the banner image with correct attributes", () => {
    render(
      <MemoryRouter>
        <Banner />
      </MemoryRouter>
    );

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("main-banner.webp"));
    expect(image).toHaveAttribute("alt", "");
    expect(image).toHaveAttribute("width", "2292");
    expect(image).toHaveAttribute("height", "675");
  });

  it("renders correct text content", () => {
    render(
      <MemoryRouter>
        <Banner />
      </MemoryRouter>
    );

    const text1 = screen.getByText(/Curated with joy,/);
    const text2 = screen.getByText(/crafted to inspire every day./);
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });
});
