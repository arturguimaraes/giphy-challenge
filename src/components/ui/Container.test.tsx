import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Container", () => {
  test("container renders children", () => {
    render(<Container>Test</Container>);
    const container = screen.getByText("Test");
    expect(container).toBeInTheDocument();
  });

  test("container renders with correct styles", () => {
    render(<Container>Test</Container>);
    const container = screen.getByText("Test");
    expect(container).toHaveClass("max-w-7xl mx-auto px-4");
  });
});
