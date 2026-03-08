import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders Hello World heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /hello world/i })).toBeInTheDocument();
  });
});
