import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "@/components/ui/Footer";

describe("Footer", () => {
  it("renders a semantic footer element", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });

  it("displays the TaskFlow brand name", () => {
    render(<Footer />);
    expect(screen.getByRole("heading", { name: "TaskFlow" })).toBeInTheDocument();
  });

  it("displays the copyright line with TaskFlow 2026", () => {
    render(<Footer />);
    expect(screen.getByText(/TaskFlow 2026/i)).toBeInTheDocument();
  });

  it("includes navigation link to Home", () => {
    render(<Footer />);
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("includes navigation link to About", () => {
    render(<Footer />);
    const aboutLink = screen.getByRole("link", { name: "About" });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");
  });

  it("includes navigation link to Privacy", () => {
    render(<Footer />);
    const privacyLink = screen.getByRole("link", { name: "Privacy" });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute("href", "/privacy");
  });

  it("uses bold pink color scheme with gradient", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer?.className).toContain("bg-gradient-to-r");
    expect(footer?.className).toContain("from-pink-400");
    expect(footer?.className).toContain("to-pink-600");
  });

  it("includes dark mode support with darker pink variant", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer?.className).toContain("dark:from-pink-900");
    expect(footer?.className).toContain("dark:to-pink-800");
  });

  it("includes a funky wave SVG decorative element", () => {
    const { container } = render(<Footer />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("includes animation effect on brand name", () => {
    render(<Footer />);
    const heading = screen.getByRole("heading", { name: "TaskFlow" });
    expect(heading.className).toContain("animate-pulse");
  });

  it("has navigation links with hover and focus states", () => {
    render(<Footer />);
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink.className).toContain("hover:text-pink-100");
    expect(homeLink.className).toContain("focus:outline-none");
    expect(homeLink.className).toContain("focus:ring-2");
  });

  it("uses responsive layout classes for mobile and desktop", () => {
    const { container } = render(<Footer />);
    const layoutContainer = container.querySelector(".flex.flex-col.md\\:flex-row");
    expect(layoutContainer).toBeInTheDocument();
  });

  it("has text-center on mobile and text-left on desktop for brand section", () => {
    const { container } = render(<Footer />);
    const brandSection = container.querySelector(".text-center.md\\:text-left");
    expect(brandSection).toBeInTheDocument();
  });

  it("has legible white text color on pink background", () => {
    render(<Footer />);
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink.className).toContain("text-white");
  });

  it("includes copyright symbol in copyright line", () => {
    render(<Footer />);
    expect(screen.getByText(/©.*TaskFlow 2026/i)).toBeInTheDocument();
  });

  it("applies proper spacing and padding", () => {
    const { container } = render(<Footer />);
    const contentContainer = container.querySelector(".container.mx-auto.px-6.pt-16.pb-8");
    expect(contentContainer).toBeInTheDocument();
  });

  // US-002: Footer Social Media Icons tests
  describe("Social Media Icons", () => {
    it("displays at least four social media icons", () => {
      render(<Footer />);
      const githubLink = screen.getByLabelText("Visit TaskFlow on GitHub");
      const twitterLink = screen.getByLabelText("Visit TaskFlow on Twitter");
      const linkedinLink = screen.getByLabelText("Visit TaskFlow on LinkedIn");
      const discordLink = screen.getByLabelText("Visit TaskFlow on Discord");

      expect(githubLink).toBeInTheDocument();
      expect(twitterLink).toBeInTheDocument();
      expect(linkedinLink).toBeInTheDocument();
      expect(discordLink).toBeInTheDocument();
    });

    it("each icon is an accessible <a> element with target='_blank' and rel='noopener noreferrer'", () => {
      render(<Footer />);
      const githubLink = screen.getByLabelText("Visit TaskFlow on GitHub");

      expect(githubLink.tagName).toBe("A");
      expect(githubLink).toHaveAttribute("target", "_blank");
      expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("GitHub icon has descriptive aria-label", () => {
      render(<Footer />);
      const githubLink = screen.getByLabelText("Visit TaskFlow on GitHub");
      expect(githubLink).toHaveAttribute("aria-label", "Visit TaskFlow on GitHub");
    });

    it("Twitter icon has descriptive aria-label", () => {
      render(<Footer />);
      const twitterLink = screen.getByLabelText("Visit TaskFlow on Twitter");
      expect(twitterLink).toHaveAttribute("aria-label", "Visit TaskFlow on Twitter");
    });

    it("LinkedIn icon has descriptive aria-label", () => {
      render(<Footer />);
      const linkedinLink = screen.getByLabelText("Visit TaskFlow on LinkedIn");
      expect(linkedinLink).toHaveAttribute("aria-label", "Visit TaskFlow on LinkedIn");
    });

    it("Discord icon has descriptive aria-label", () => {
      render(<Footer />);
      const discordLink = screen.getByLabelText("Visit TaskFlow on Discord");
      expect(discordLink).toHaveAttribute("aria-label", "Visit TaskFlow on Discord");
    });

    it("icons use inline SVG and are sized consistently (24x24)", () => {
      const { container } = render(<Footer />);
      const svgIcons = container.querySelectorAll(".flex.justify-center.gap-6 svg");

      expect(svgIcons.length).toBeGreaterThanOrEqual(4);
      svgIcons.forEach((svg) => {
        expect(svg.classList.contains("w-6")).toBe(true);
        expect(svg.classList.contains("h-6")).toBe(true);
      });
    });

    it("icons have white or light-pink default color", () => {
      render(<Footer />);
      const githubLink = screen.getByLabelText("Visit TaskFlow on GitHub");
      expect(githubLink.className).toContain("text-white");
    });

    it("icons have scale hover animation", () => {
      render(<Footer />);
      const githubLink = screen.getByLabelText("Visit TaskFlow on GitHub");
      expect(githubLink.className).toContain("hover:scale-110");
    });

    it("icons have glow hover animation", () => {
      render(<Footer />);
      const githubLink = screen.getByLabelText("Visit TaskFlow on GitHub");
      expect(githubLink.className).toContain("hover:drop-shadow-");
    });

    it("icons have transition-all for smooth animations", () => {
      render(<Footer />);
      const githubLink = screen.getByLabelText("Visit TaskFlow on GitHub");
      expect(githubLink.className).toContain("transition-all");
      expect(githubLink.className).toContain("duration-200");
    });

    it("icons row is centered on mobile and appears below navigation links", () => {
      const { container } = render(<Footer />);
      const socialIconsContainer = container.querySelector(".flex.justify-center.gap-6");
      expect(socialIconsContainer).toBeInTheDocument();
      expect(socialIconsContainer?.className).toContain("justify-center");
    });

    it("social icons have dark mode support with appropriate contrast", () => {
      render(<Footer />);
      const githubLink = screen.getByLabelText("Visit TaskFlow on GitHub");
      expect(githubLink.className).toContain("dark:hover:text-pink-200");
    });

    it("social icons container has top margin and padding", () => {
      const { container } = render(<Footer />);
      const socialIconsContainer = container.querySelector(".flex.justify-center.gap-6.mt-8");
      expect(socialIconsContainer).toBeInTheDocument();
      expect(socialIconsContainer?.className).toContain("mt-8");
      expect(socialIconsContainer?.className).toContain("pt-6");
    });

    it("social icons container has border separator", () => {
      const { container } = render(<Footer />);
      const socialIconsContainer = container.querySelector(".flex.justify-center.gap-6");
      expect(socialIconsContainer?.className).toContain("border-t");
      expect(socialIconsContainer?.className).toContain("border-pink-300");
      expect(socialIconsContainer?.className).toContain("dark:border-pink-700");
    });

    it("icons have focus states for accessibility", () => {
      render(<Footer />);
      const githubLink = screen.getByLabelText("Visit TaskFlow on GitHub");
      expect(githubLink.className).toContain("focus:outline-none");
      expect(githubLink.className).toContain("focus:ring-2");
      expect(githubLink.className).toContain("focus:ring-white");
    });

    it("GitHub icon links to correct URL", () => {
      render(<Footer />);
      const githubLink = screen.getByLabelText("Visit TaskFlow on GitHub");
      expect(githubLink).toHaveAttribute("href", "https://github.com/taskflow");
    });

    it("Twitter icon links to correct URL", () => {
      render(<Footer />);
      const twitterLink = screen.getByLabelText("Visit TaskFlow on Twitter");
      expect(twitterLink).toHaveAttribute("href", "https://twitter.com/taskflow");
    });

    it("LinkedIn icon links to correct URL", () => {
      render(<Footer />);
      const linkedinLink = screen.getByLabelText("Visit TaskFlow on LinkedIn");
      expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/company/taskflow");
    });

    it("Discord icon links to correct URL", () => {
      render(<Footer />);
      const discordLink = screen.getByLabelText("Visit TaskFlow on Discord");
      expect(discordLink).toHaveAttribute("href", "https://discord.gg/taskflow");
    });
  });

  // US-003: Footer Newsletter Signup tests
  describe("Newsletter Signup", () => {
    it("displays a newsletter signup section with a heading", () => {
      render(<Footer />);
      const heading = screen.getByRole("heading", { name: /stay in the loop/i });
      expect(heading).toBeInTheDocument();
    });

    it("heading text is 'Stay in the loop'", () => {
      render(<Footer />);
      const heading = screen.getByRole("heading", { name: /stay in the loop/i });
      expect(heading).toHaveTextContent("Stay in the loop");
    });

    it("form contains an email input field with type='email'", () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveAttribute("type", "email");
    });

    it("email input has placeholder text", () => {
      render(<Footer />);
      const emailInput = screen.getByPlaceholderText("Enter your email");
      expect(emailInput).toBeInTheDocument();
    });

    it("form contains a submit button", () => {
      render(<Footer />);
      const submitButton = screen.getByRole("button", { name: /subscribe/i });
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute("type", "submit");
    });

    it("input and button are styled to complement the pink theme", () => {
      const { container } = render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      expect(emailInput.className).toContain("bg-white");
      expect(emailInput.className).toContain("dark:bg-gray-800");
      expect(submitButton.className).toContain("bg-pink-700");
      expect(submitButton.className).toContain("dark:bg-pink-600");
    });

    it("shows inline error message for empty email without page reload", async () => {
      render(<Footer />);
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      fireEvent.click(submitButton);

      await waitFor(() => {
        const errorMessage = screen.getByRole("alert");
        expect(errorMessage).toHaveTextContent("Email is required");
      });
    });

    it("shows inline error message for invalid email format without page reload", async () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      fireEvent.change(emailInput, { target: { value: "invalid-email" } });
      fireEvent.submit(emailInput.closest("form")!);

      await waitFor(() => {
        const errorMessage = screen.getByRole("alert");
        expect(errorMessage).toHaveTextContent("Please enter a valid email address");
      });
    });

    it("error message clears when user starts typing", async () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      // Trigger error
      fireEvent.click(submitButton);
      await waitFor(() => {
        expect(screen.getByRole("alert")).toBeInTheDocument();
      });

      // Type in input
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });

      // Error should be cleared
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });

    it("displays confirmation message on successful submission", async () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        const confirmationMessage = screen.getByRole("status");
        expect(confirmationMessage).toHaveTextContent("Thanks for subscribing!");
      });
    });

    it("confirmation message replaces the form after successful submission", async () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByRole("status")).toBeInTheDocument();
      });

      // Form should not be visible anymore
      expect(screen.queryByLabelText("Email address")).not.toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /subscribe/i })).not.toBeInTheDocument();
    });

    it("submit button has a visible focus ring", () => {
      render(<Footer />);
      const submitButton = screen.getByRole("button", { name: /subscribe/i });
      expect(submitButton.className).toContain("focus:outline-none");
      expect(submitButton.className).toContain("focus:ring-2");
      expect(submitButton.className).toContain("focus:ring-white");
    });

    it("email input has a visible focus ring", () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      expect(emailInput.className).toContain("focus:outline-none");
      expect(emailInput.className).toContain("focus:ring-2");
      expect(emailInput.className).toContain("focus:ring-white");
    });

    it("newsletter section has max-width and centered layout", () => {
      const { container } = render(<Footer />);
      const newsletterContainer = container.querySelector(".max-w-md.mx-auto.text-center");
      expect(newsletterContainer).toBeInTheDocument();
    });

    it("newsletter section has border separator", () => {
      const { container } = render(<Footer />);
      const newsletterSection = container.querySelector(".mt-8.pt-6.border-t");
      expect(newsletterSection).toBeInTheDocument();
      expect(newsletterSection?.className).toContain("border-pink-300");
      expect(newsletterSection?.className).toContain("dark:border-pink-700");
    });

    it("newsletter section stacks on mobile (flex-col) and goes horizontal on small screens (sm:flex-row)", () => {
      const { container } = render(<Footer />);
      const formContainer = container.querySelector(".flex.flex-col.sm\\:flex-row");
      expect(formContainer).toBeInTheDocument();
    });

    it("dark mode: input maintains readable contrast", () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      expect(emailInput.className).toContain("dark:text-white");
      expect(emailInput.className).toContain("dark:bg-gray-800");
      expect(emailInput.className).toContain("dark:placeholder-gray-400");
    });

    it("dark mode: button maintains consistent styling", () => {
      render(<Footer />);
      const submitButton = screen.getByRole("button", { name: /subscribe/i });
      expect(submitButton.className).toContain("dark:bg-pink-600");
      expect(submitButton.className).toContain("dark:hover:bg-pink-700");
    });

    it("email input has proper ARIA attributes when invalid", async () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(emailInput).toHaveAttribute("aria-invalid", "true");
        expect(emailInput).toHaveAttribute("aria-describedby", "email-error");
      });
    });

    it("email input does not have aria-invalid when valid", () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      expect(emailInput).toHaveAttribute("aria-invalid", "false");
    });

    it("error message has correct id for aria-describedby", async () => {
      render(<Footer />);
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      fireEvent.click(submitButton);

      await waitFor(() => {
        const errorMessage = screen.getByRole("alert");
        expect(errorMessage).toHaveAttribute("id", "email-error");
      });
    });

    it("submit button has hover state styling", () => {
      render(<Footer />);
      const submitButton = screen.getByRole("button", { name: /subscribe/i });
      expect(submitButton.className).toContain("hover:bg-pink-800");
    });

    it("heading has appropriate text size and styling", () => {
      render(<Footer />);
      const heading = screen.getByRole("heading", { name: /stay in the loop/i });
      expect(heading.className).toContain("text-xl");
      expect(heading.className).toContain("font-bold");
      expect(heading.className).toContain("text-white");
    });

    it("accepts valid email with multiple dots in domain", async () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      fireEvent.change(emailInput, { target: { value: "test@example.co.uk" } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByRole("status")).toHaveTextContent("Thanks for subscribing!");
      });
    });

    it("rejects email without @ symbol", async () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      fireEvent.change(emailInput, { target: { value: "testexample.com" } });
      fireEvent.submit(emailInput.closest("form")!);

      await waitFor(() => {
        expect(screen.getByRole("alert")).toHaveTextContent("Please enter a valid email address");
      });
    });

    it("rejects email with spaces", async () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      fireEvent.change(emailInput, { target: { value: "test @example.com" } });
      fireEvent.submit(emailInput.closest("form")!);

      await waitFor(() => {
        expect(screen.getByRole("alert")).toHaveTextContent("Please enter a valid email address");
      });
    });

    it("rejects email without domain extension", async () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      const submitButton = screen.getByRole("button", { name: /subscribe/i });

      fireEvent.change(emailInput, { target: { value: "test@example" } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByRole("alert")).toHaveTextContent("Please enter a valid email address");
      });
    });

    it("form has proper spacing (space-y-3)", () => {
      const { container } = render(<Footer />);
      const form = container.querySelector("form");
      expect(form?.className).toContain("space-y-3");
    });

    it("input has rounded corners", () => {
      render(<Footer />);
      const emailInput = screen.getByLabelText("Email address");
      expect(emailInput.className).toContain("rounded-lg");
    });

    it("button has rounded corners", () => {
      render(<Footer />);
      const submitButton = screen.getByRole("button", { name: /subscribe/i });
      expect(submitButton.className).toContain("rounded-lg");
    });

    it("button has transition for smooth hover effects", () => {
      render(<Footer />);
      const submitButton = screen.getByRole("button", { name: /subscribe/i });
      expect(submitButton.className).toContain("transition-colors");
      expect(submitButton.className).toContain("duration-200");
    });
  });

  // US-004: Footer Back-to-Top Button tests
  describe("Back to Top Button", () => {
    it("displays a Back to Top button in the footer", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton).toBeInTheDocument();
    });

    it("button is a <button> element with aria-label='Scroll to top'", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.tagName).toBe("BUTTON");
      expect(backToTopButton).toHaveAttribute("aria-label", "Scroll to top");
    });

    it("button displays an upward arrow icon", () => {
      const { container } = render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      const svg = backToTopButton.querySelector("svg");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("button displays text label 'Back to Top'", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton).toHaveTextContent("Back to Top");
    });

    it("button is styled as a pill/rounded shape", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("rounded-full");
    });

    it("button has contrasting color (white or pink-200) against pink footer background", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("bg-white");
      expect(backToTopButton.className).toContain("dark:bg-pink-200");
    });

    it("button has text color that contrasts with background", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("text-pink-600");
      expect(backToTopButton.className).toContain("dark:text-pink-900");
    });

    it("button has hover animation (lift effect)", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("hover:-translate-y-1");
    });

    it("button has hover shadow effect", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("shadow-md");
      expect(backToTopButton.className).toContain("hover:shadow-lg");
    });

    it("button has hover color shift", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("hover:bg-pink-50");
      expect(backToTopButton.className).toContain("dark:hover:bg-pink-100");
    });

    it("button has transition for smooth animations", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("transition-all");
      expect(backToTopButton.className).toContain("duration-200");
    });

    it("button has a visible focus ring", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("focus:outline-none");
      expect(backToTopButton.className).toContain("focus:ring-2");
      expect(backToTopButton.className).toContain("focus:ring-white");
    });

    it("button is centered on mobile", () => {
      const { container } = render(<Footer />);
      const buttonContainer = container.querySelector(".flex.justify-center.mt-6");
      expect(buttonContainer).toBeInTheDocument();
    });

    it("button is sized for easy tap targeting (min 44x44px)", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("min-h-[44px]");
    });

    it("button has proper padding for tap target", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("px-6");
      expect(backToTopButton.className).toContain("py-3");
    });

    it("clicking the button calls window.scrollTo with smooth behavior", () => {
      const scrollToSpy = vi.fn();
      window.scrollTo = scrollToSpy;

      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });

      fireEvent.click(backToTopButton);

      expect(scrollToSpy).toHaveBeenCalledWith({
        top: 0,
        behavior: "smooth"
      });
    });

    it("button has flex items-center gap layout for icon and text", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("flex");
      expect(backToTopButton.className).toContain("items-center");
      expect(backToTopButton.className).toContain("gap-2");
    });

    it("arrow icon has consistent sizing (w-5 h-5)", () => {
      const { container } = render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      const svg = backToTopButton.querySelector("svg");
      expect(svg?.classList.contains("w-5")).toBe(true);
      expect(svg?.classList.contains("h-5")).toBe(true);
    });

    it("arrow icon has bounce animation on hover", () => {
      const { container } = render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      const svg = backToTopButton.querySelector("svg");
      expect(svg?.classList.contains("group-hover:animate-bounce")).toBe(true);
    });

    it("button container has top margin and padding", () => {
      const { container } = render(<Footer />);
      const buttonContainer = container.querySelector(".flex.justify-center.mt-6.pt-6");
      expect(buttonContainer).toBeInTheDocument();
    });

    it("button container has border separator", () => {
      const { container } = render(<Footer />);
      const buttonContainer = container.querySelector(".flex.justify-center.mt-6.pt-6.border-t");
      expect(buttonContainer).toBeInTheDocument();
      expect(buttonContainer?.className).toContain("border-pink-300");
      expect(buttonContainer?.className).toContain("dark:border-pink-700");
    });

    it("dark mode: button colors adjust to maintain visibility and contrast", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("dark:bg-pink-200");
      expect(backToTopButton.className).toContain("dark:text-pink-900");
      expect(backToTopButton.className).toContain("dark:hover:bg-pink-100");
    });

    it("button has font-medium styling", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("font-medium");
    });

    it("button uses group class for child hover animations", () => {
      render(<Footer />);
      const backToTopButton = screen.getByRole("button", { name: /scroll to top/i });
      expect(backToTopButton.className).toContain("group");
    });
  });
});
