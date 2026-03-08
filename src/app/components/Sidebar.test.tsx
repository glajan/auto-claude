import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("renders Home link", () => {
    render(<Sidebar isOpen={true} onClose={() => {}} />);
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  });

  it("renders Mars link", () => {
    render(<Sidebar isOpen={true} onClose={() => {}} />);
    expect(screen.getByRole("link", { name: /mars/i })).toBeInTheDocument();
  });

  it("Home link points to root", () => {
    render(<Sidebar isOpen={true} onClose={() => {}} />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("Mars link points to hello-mars", () => {
    render(<Sidebar isOpen={true} onClose={() => {}} />);
    const marsLink = screen.getByRole("link", { name: /mars/i });
    expect(marsLink).toHaveAttribute("href", "/hello-mars");
  });

  it("renders when isOpen is true", () => {
    const { container } = render(
      <Sidebar isOpen={true} onClose={() => {}} />
    );
    const aside = container.querySelector("aside");
    expect(aside).toBeInTheDocument();
  });

  it("renders backdrop when isOpen is true", () => {
    const { container } = render(
      <Sidebar isOpen={true} onClose={() => {}} />
    );
    const backdrop = container.querySelector(
      ".fixed.inset-0.bg-black.bg-opacity-50"
    );
    expect(backdrop).toBeInTheDocument();
  });

  it("sidebar is positioned on the right side", () => {
    const { container } = render(
      <Sidebar isOpen={true} onClose={() => {}} />
    );
    const aside = container.querySelector("aside");
    expect(aside?.className).toContain("right-0");
  });

  it("sidebar has full screen height", () => {
    const { container } = render(
      <Sidebar isOpen={true} onClose={() => {}} />
    );
    const aside = container.querySelector("aside");
    expect(aside?.className).toContain("h-screen");
    expect(aside?.className).toContain("top-0");
  });

  it("sidebar slides out to the right when closed", () => {
    const { container } = render(
      <Sidebar isOpen={false} onClose={() => {}} />
    );
    const aside = container.querySelector("aside");
    expect(aside?.className).toContain("translate-x-full");
  });
});
