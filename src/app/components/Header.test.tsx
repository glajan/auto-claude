import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the app title", () => {
    render(<Header />);
    const appLink = screen.getByRole("link", { name: /myapp/i });
    expect(appLink).toBeInTheDocument();
  });

  it("renders Home link in header", () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header");
    const homeLinks = screen.getAllByRole("link", { name: /home/i });
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it("renders Mars link in header", () => {
    const { container } = render(<Header />);
    const marsLinks = screen.getAllByRole("link", { name: /mars/i });
    expect(marsLinks.length).toBeGreaterThan(0);
  });

  it("Home link in sidebar points to root", () => {
    render(<Header />);
    const homeLinks = screen.getAllByRole("link", { name: /home/i });
    homeLinks.forEach((link) => {
      if (link.textContent === "Home") {
        expect(link).toHaveAttribute("href", "/");
      }
    });
  });

  it("Mars link in sidebar points to hello-mars", () => {
    render(<Header />);
    const marsLinks = screen.getAllByRole("link", { name: /mars/i });
    marsLinks.forEach((link) => {
      if (link.textContent === "Mars") {
        expect(link).toHaveAttribute("href", "/hello-mars");
      }
    });
  });

  it("renders sidebar toggle button", () => {
    render(<Header />);
    expect(screen.getByRole("button", { name: /toggle sidebar/i })).toBeInTheDocument();
  });
});
