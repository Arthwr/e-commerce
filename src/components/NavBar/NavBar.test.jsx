import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { useCart } from "@contexts/CartContext.jsx";
import NavBar from "./NavBar.jsx";

vi.mock("@contexts/CartContext.jsx", () => ({
  useCart: vi.fn(),
}));

describe("NavBar component", () => {
  it("renders cart counter correctly with mocked cart items", () => {
    useCart.mockReturnValue({ cartItems: [{ id: 1 }, { id: 2 }] });

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const cartCounter = screen.getByText("2");
    expect(cartCounter).toBeInTheDocument();
  });

  it("renders empty cart counter when no items in cart", () => {
    useCart.mockReturnValue({ cartItems: [] });

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const cartCounter = screen.getByText("0");
    expect(cartCounter).toBeInTheDocument();
  });

  it("renders inner links correctly", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link", { name: /Home|Products|About us|Cart/i, hidden: true });

    expect(links).toHaveLength(4);
    expect(links[0]).toHaveAttribute("href", "/");
    expect(links[1]).toHaveAttribute("href", "/products");
    expect(links[2]).toHaveAttribute("href", "/about");
    expect(links[3]).toHaveAttribute("href", "/cart");
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
