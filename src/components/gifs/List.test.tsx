import { render, screen } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  it("should render the component", () => {
    render(<List />);
    expect(screen.getByText("Please search for a gif")).toBeInTheDocument();
  });
});
