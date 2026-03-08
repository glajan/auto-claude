import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the app title", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /myapp/i })).toBeInTheDocument();
  });

  it("renders Home link", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  });

  it("renders Mars link", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /mars/i })).toBeInTheDocument();
  });

  it("Home link points to root", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("Mars link points to hello-mars", () => {
    render(<Header />);
    const marsLink = screen.getByRole("link", { name: /mars/i });
    expect(marsLink).toHaveAttribute("href", "/hello-mars");
  });
});
