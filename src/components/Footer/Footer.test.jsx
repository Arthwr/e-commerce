import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders all internal links correctly", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link", { name: /Help Center|Community|FAQ|Contact Us/i });
    expect(links).toHaveLength(4);

    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "/about");
    });
  });

  it("renders all external links correctly", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const twitterLink = screen.getByText("Twitter").closest("a");
    const instagramLink = screen.getByText("Instagram").closest("a");
    const faceboookLink = screen.getByText("Facebook").closest("a");

    expect(twitterLink).toHaveAttribute("href", "https://twitter.com");
    expect(instagramLink).toHaveAttribute("href", "https://instagram.com");
    expect(faceboookLink).toHaveAttribute("href", "https://facebook.com");
  });
});
