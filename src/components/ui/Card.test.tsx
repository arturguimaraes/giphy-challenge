import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  test("card renders children", () => {
    render(<Card>Test</Card>);
    const card = screen.getByText("Test");
    expect(card).toBeInTheDocument();
  });

  test("card renders with correct styles", () => {
    render(<Card>Test</Card>);
    const card = screen.getByText("Test");
    expect(card).toHaveClass("bg-white shadow-md rounded-md p-4");
  });
});
