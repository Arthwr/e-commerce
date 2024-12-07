import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";

describe("Product card component", () => {
  const mockProduct = {
    title: "Model 002 Green & White",
    price: 10,
    description: "Good, durable and cute",
    rating: 4,
    sku: "adsQfaX",
    images: [],
  };

  it("render product card details and text correctly", () => {
    render(
      <MemoryRouter>
        <ProductCard {...mockProduct} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price} $`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  it("renders correct number of filled stars", () => {
    render(
      <MemoryRouter>
        <ProductCard {...mockProduct} />
      </MemoryRouter>
    );

    const ratingDiv = screen.getByLabelText(`Rating: ${mockProduct.rating} stars`);
    expect(ratingDiv).toBeInTheDocument();
    const starIcons = within(ratingDiv).getAllByRole("img");
    expect(starIcons.length).toBe(5);
    const filledStars = starIcons.filter((star) => star.className.includes("filled"));
    expect(filledStars.length).toBe(Math.floor(mockProduct.rating));
  });
});
