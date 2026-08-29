import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
import { site } from "@/data/site";
import { content } from "@/data/content";
import { LanguageProvider } from "@/lib/language";

describe("Hero", () => {
  it("renders name, role and intro copy (default English locale)", () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>,
    );

    expect(screen.getByRole("heading", { level: 1, name: site.name })).toBeInTheDocument();
    expect(screen.getByText(content.en.hero.intro)).toBeInTheDocument();
    expect(screen.getByText(content.en.hero.role)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: content.en.hero.portraitAlt })).toBeInTheDocument();
  });

  it("renders the primary CTAs", () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>,
    );

    expect(
      screen.getByRole("link", { name: content.en.hero.ctaProjects }),
    ).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: content.en.hero.ctaCv })).toHaveAttribute(
      "href",
      site.cvUrl,
    );
  });
});
