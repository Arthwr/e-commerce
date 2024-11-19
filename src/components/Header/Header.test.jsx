import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header component", () => {
  it("renders inner links correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link", { name: /Products|About us|Sustainability|Cart/i, hidden: true });

    expect(links).toHaveLength(4);
    expect(links[0]).toHaveAttribute("href", "/products");
    expect(links[1]).toHaveAttribute("href", "/about");
    expect(links[2]).toHaveAttribute("href", "/sustainability");
    expect(links[3]).toHaveAttribute("href", "/cart");
  });

  it("renders img icons correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const icons = screen.getAllByRole("presentation");

    expect(icons).toHaveLength(3);
    icons.forEach((icon) => expect(icon).toBeInTheDocument());
  });

  it("renders search button correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const searchButton = screen.getByRole("button", { name: /Search/i });
    expect(searchButton).toBeInTheDocument();
  });
});
