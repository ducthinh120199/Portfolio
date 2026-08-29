import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";
import type { Project } from "@/data/projects";
import { LanguageProvider } from "@/lib/language";

const baseProject: Project = {
  slug: "demo",
  title: "Demo Project",
  description: {
    en: "A demo project used for testing.",
    vi: "Một project demo dùng để test.",
  },
  tech: ["Next.js", "TypeScript"],
  githubUrl: "https://github.com/example/demo",
  imageSrc: undefined,
};

function renderCard(project: Project) {
  return render(
    <LanguageProvider>
      <ProjectCard project={project} />
    </LanguageProvider>,
  );
}

describe("ProjectCard", () => {
  it("renders title, description, tech tags and GitHub link", () => {
    renderCard(baseProject);

    expect(screen.getByRole("heading", { name: "Demo Project" })).toBeInTheDocument();
    expect(screen.getByText("A demo project used for testing.")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub/ })).toHaveAttribute(
      "href",
      "https://github.com/example/demo",
    );
  });

  it("shows a placeholder when imageSrc is missing", () => {
    renderCard(baseProject);

    expect(screen.getByText("Screenshot coming soon")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders the image when imageSrc is provided", () => {
    renderCard({ ...baseProject, imageSrc: "/images/projects/demo.jpg" });

    expect(screen.getByRole("img")).toHaveAttribute("alt", "Screenshot — Demo Project");
  });

  it("omits the GitHub link when githubUrl is missing", () => {
    renderCard({ ...baseProject, githubUrl: undefined });

    expect(screen.queryByRole("link", { name: /GitHub/ })).not.toBeInTheDocument();
  });
});
