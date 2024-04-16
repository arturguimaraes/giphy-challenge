import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("button renders children", () => {
    render(<Button onClick={() => {}}>Test</Button>);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
  });

  test("button renders with correct styles", () => {
    render(<Button onClick={() => {}}>Test</Button>);
    const button = screen.getByText("Test");
    expect(button).toHaveClass(
      "px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-md shadow-sm",
    );
  });
});
