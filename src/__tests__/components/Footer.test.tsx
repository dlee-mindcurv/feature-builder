import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "@/components/ui/Footer";

describe("Footer", () => {
  it("renders using semantic footer element", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });

  it("displays TaskFlow brand name", () => {
    render(<Footer />);
    expect(screen.getByRole("heading", { name: "TaskFlow" })).toBeInTheDocument();
  });

  it("displays copyright line with TaskFlow 2026", () => {
    render(<Footer />);
    expect(screen.getByText(/TaskFlow 2026/i)).toBeInTheDocument();
  });

  it("includes Home navigation link", () => {
    render(<Footer />);
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("includes About navigation link", () => {
    render(<Footer />);
    const aboutLink = screen.getByRole("link", { name: "About" });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");
  });

  it("includes Privacy navigation link", () => {
    render(<Footer />);
    const privacyLink = screen.getByRole("link", { name: "Privacy" });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute("href", "/privacy");
  });

  it("uses pink color scheme with gradient", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer?.className).toContain("from-pink-400");
    expect(footer?.className).toContain("to-pink-600");
  });

  it("includes dark mode pink variant classes", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer?.className).toContain("dark:from-pink-900");
    expect(footer?.className).toContain("dark:to-pink-800");
  });

  it("includes decorative SVG element with aria-hidden", () => {
    const { container } = render(<Footer />);
    const svg = container.querySelector("svg[aria-hidden='true']");
    expect(svg).toBeInTheDocument();
  });

  it("has navigation with proper aria-label", () => {
    render(<Footer />);
    expect(screen.getByRole("navigation", { name: "Footer navigation" })).toBeInTheDocument();
  });

  it("includes at least three navigation links", () => {
    render(<Footer />);
    const nav = screen.getByRole("navigation");
    const links = nav.querySelectorAll("a");
    expect(links.length).toBeGreaterThanOrEqual(3);
  });

  it("applies hover and focus state classes to links", () => {
    render(<Footer />);
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink.className).toContain("hover:text-pink-100");
    expect(homeLink.className).toContain("focus:text-pink-100");
    expect(homeLink.className).toContain("focus:ring");
  });

  it("uses responsive layout classes for mobile and desktop", () => {
    const { container } = render(<Footer />);
    const layoutContainer = container.querySelector(".flex");
    expect(layoutContainer?.className).toContain("flex-col");
    expect(layoutContainer?.className).toContain("md:flex-row");
  });

  it("centers content on mobile with text-center class", () => {
    const { container } = render(<Footer />);
    const layoutContainer = container.querySelector(".flex");
    expect(layoutContainer?.className).toContain("text-center");
    expect(layoutContainer?.className).toContain("md:text-left");
  });
});
