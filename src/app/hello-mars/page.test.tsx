import { render, screen } from "@testing-library/react";
import HelloMars from "./page";

describe("HelloMars", () => {
  it("renders Hello Mars heading", () => {
    render(<HelloMars />);
    expect(screen.getByRole("heading", { name: /hello mars/i })).toBeInTheDocument();
  });
});
