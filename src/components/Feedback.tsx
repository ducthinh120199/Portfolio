"use client";

import { feedbackItems } from "@/data/feedback";
import { useLanguage } from "@/lib/language";
import SectionHeading from "./SectionHeading";
import FeedbackCard from "./FeedbackCard";
import RecognitionCarousel from "./RecognitionCarousel";

export default function Feedback() {
  const { t } = useLanguage();
  const recognitionItems = feedbackItems.filter((item) => item.kind === "recognition");
  const bulletinItems = feedbackItems.filter((item) => item.kind === "bulletin");

  return (
    <section id="feedback" className="reveal border-y border-line/60 bg-paper-raised/75 backdrop-blur-xl">
      <div className="mx-auto max-w-280 px-6 py-16 sm:px-16 sm:py-20">
        <SectionHeading index="05" label={t.feedback.label} title={t.feedback.title} />

        <RecognitionCarousel items={recognitionItems} />

        {bulletinItems.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6">
            {bulletinItems.map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
