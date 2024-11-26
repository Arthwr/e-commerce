import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import NavBar from "./NavBar.jsx";

describe("NavBar component", () => {
  it("renders inner links correctly", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link", { name: /Home|Products|About us|Sustainability|Cart/i, hidden: true });

    expect(links).toHaveLength(5);
    expect(links[0]).toHaveAttribute("href", "/");
    expect(links[1]).toHaveAttribute("href", "/products");
    expect(links[2]).toHaveAttribute("href", "/about");
    expect(links[3]).toHaveAttribute("href", "/sustainability");
    expect(links[4]).toHaveAttribute("href", "/cart");
  });

  it("renders img icons correctly", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const icons = screen.getAllByRole("presentation");

    expect(icons).toHaveLength(3);
    icons.forEach((icon) => expect(icon).toBeInTheDocument());
  });

  it("renders search button correctly", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const searchButton = screen.getByRole("button", { name: /Search/i });
    expect(searchButton).toBeInTheDocument();
  });
});
