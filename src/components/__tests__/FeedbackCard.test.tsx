import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import FeedbackCard from "../FeedbackCard";
import type { Feedback } from "@/data/feedback";
import { LanguageProvider } from "@/lib/language";

const recognitionFeedback: Feedback = {
  id: "demo-feedback",
  kind: "recognition",
  caption: { en: "Colleague at VUS", vi: "Đồng nghiệp tại VUS" },
  imageSrc: undefined,
};

function renderCard(feedback: Feedback) {
  return render(
    <LanguageProvider>
      <FeedbackCard feedback={feedback} />
    </LanguageProvider>,
  );
}

describe("FeedbackCard", () => {
  it("renders the caption and a placeholder when imageSrc is missing", () => {
    renderCard(recognitionFeedback);

    expect(screen.getByText("Colleague at VUS")).toBeInTheDocument();
    expect(screen.getByText("Screenshot coming soon")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders the image when imageSrc is provided", () => {
    renderCard({ ...recognitionFeedback, imageSrc: "/images/feedback/feedback-1.jpg" });

    expect(screen.getByRole("img")).toHaveAttribute("alt", "Colleague at VUS");
  });

  it("spans full width for bulletin-kind feedback", () => {
    const { container } = renderCard({
      id: "bulletin-demo",
      kind: "bulletin",
      caption: { en: "Digital Class Folder bulletin", vi: "Bản tin Digital Class Folder" },
      imageSrc: undefined,
    });

    expect(container.querySelector("figure")).toHaveClass("lg:col-span-3");
  });
});
