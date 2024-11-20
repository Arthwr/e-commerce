import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SegmentHeader from "./SegmentHeader.jsx";

describe("Section Header component", () => {
  const label = "Mock Section";

  it("render header with passed label correctly", () => {
    render(<SegmentHeader label={label} />);

    expect(screen.getByRole("heading", { name: label })).toBeInTheDocument();
  });
});
