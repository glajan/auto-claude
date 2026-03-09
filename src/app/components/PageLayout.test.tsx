import { render, screen, fireEvent } from "@testing-library/react";
import PageLayout from "./PageLayout";

describe("PageLayout", () => {
  it("renders children", () => {
    render(<PageLayout><p>Test content</p></PageLayout>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders Header", () => {
    render(<PageLayout><p>content</p></PageLayout>);
    expect(screen.getByRole("link", { name: /myapp/i })).toBeInTheDocument();
  });

  it("renders Footer", () => {
    render(<PageLayout><p>content</p></PageLayout>);
    expect(screen.getByText(/© 2026 MyApp/i)).toBeInTheDocument();
  });

  it("opens sidebar when toggle button is clicked", () => {
    const { container } = render(<PageLayout><p>content</p></PageLayout>);
    const toggleBtn = screen.getByRole("button", { name: /toggle sidebar/i });
    fireEvent.click(toggleBtn);
    const backdrop = container.querySelector(".fixed.inset-0");
    expect(backdrop).toBeInTheDocument();
  });

  it("closes sidebar when close button is clicked", () => {
    const { container } = render(<PageLayout><p>content</p></PageLayout>);
    fireEvent.click(screen.getByRole("button", { name: /toggle sidebar/i }));
    fireEvent.click(screen.getByRole("button", { name: /close sidebar/i }));
    const backdrop = container.querySelector(".fixed.inset-0");
    expect(backdrop).not.toBeInTheDocument();
  });
});
