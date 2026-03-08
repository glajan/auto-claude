import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 MyApp/i)).toBeInTheDocument();
  });

  it("renders Privacy link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /privacy/i })).toBeInTheDocument();
  });

  it("renders Terms link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /terms/i })).toBeInTheDocument();
  });

  it("renders Contact link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
  });
});
