import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProductCard from "./ProductCard";

describe("Product card component", () => {
  const mockProduct = {
    name: "Model 002 Green & White",
    price: 10,
    description: "Good, durable and cute",
    rating: 4,
  };

  it("render product card details and text correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price} $`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  it("renders correct number of filled stars", () => {
    render(<ProductCard product={mockProduct} />);

    const filledStars = screen.getAllByAltText("star rating icon").filter((star) => star.className.includes("filled"));
    expect(filledStars).toHaveLength(mockProduct.rating);
  });
});
