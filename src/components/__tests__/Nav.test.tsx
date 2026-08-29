import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "../Nav";
import { site } from "@/data/site";
import { content } from "@/data/content";
import { LanguageProvider } from "@/lib/language";

describe("Nav", () => {
  it("renders the site handle and section links in English by default", () => {
    render(
      <LanguageProvider>
        <Nav />
      </LanguageProvider>,
    );

    expect(screen.getByText(site.handle)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: content.en.nav.about })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(screen.getByRole("link", { name: content.en.nav.projects })).toHaveAttribute(
      "href",
      "#projects",
    );
    expect(screen.getByRole("link", { name: content.en.nav.contact })).toHaveAttribute(
      "href",
      "#contact",
    );
  });

  it("switches labels to Vietnamese when the language toggle is clicked", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <Nav />
      </LanguageProvider>,
    );

    await user.click(screen.getByRole("button", { name: /toggle language/i }));

    expect(screen.getByRole("link", { name: content.vi.nav.about })).toBeInTheDocument();
  });
});
