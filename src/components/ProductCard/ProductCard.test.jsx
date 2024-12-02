import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";

describe("Product card component", () => {
  const mockProduct = {
    name: "Model 002 Green & White",
    price: 10,
    description: "Good, durable and cute",
    rating: 4,
  };

  it("render product card details and text correctly", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price} $`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  it("renders correct number of filled stars", () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    const filledStars = screen.getAllByAltText("star rating icon").filter((star) => star.className.includes("filled"));
    expect(filledStars).toHaveLength(mockProduct.rating);
  });
});
