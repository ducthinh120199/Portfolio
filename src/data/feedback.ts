import type { LocalizedText } from "./content";

export type FeedbackKind = "recognition" | "bulletin";

export type Feedback = {
  id: string;
  // "recognition": thẻ ghi nhận/khen thưởng từ hệ thống Aspiration (dạng card đứng, cao ~0.55x rộng — KHÔNG crop, dùng object-contain).
  // "bulletin": bản tin/poster nội bộ nói về 1 dự án cụ thể (dạng poster dọc rất dài) — hiển thị dạng preview + click để xem full trong lightbox.
  kind: FeedbackKind;
  caption: LocalizedText;
  // Ảnh chưa có — để trống, FeedbackCard tự render placeholder + TODO.
  imageSrc?: string;
};

export const feedbackItems: Feedback[] = [
  {
    id: "feedback-1",
    kind: "recognition",
    caption: { en: "Recognition card — Aspiration (VUS)", vi: "Thẻ ghi nhận — Aspiration (VUS)" },
    imageSrc: "/images/feedback/feedback-1.jpg",
  },
  {
    id: "feedback-2",
    kind: "recognition",
    caption: { en: "Recognition card — Aspiration (VUS)", vi: "Thẻ ghi nhận — Aspiration (VUS)" },
    imageSrc: "/images/feedback/feedback-2.jpg",
  },
  {
    id: "feedback-3",
    kind: "recognition",
    caption: { en: "Recognition card — Aspiration (VUS)", vi: "Thẻ ghi nhận — Aspiration (VUS)" },
    imageSrc: "/images/feedback/feedback-3.jpg",
  },
  {
    id: "feedback-4",
    kind: "recognition",
    caption: { en: "Recognition card — Aspiration (VUS)", vi: "Thẻ ghi nhận — Aspiration (VUS)" },
    imageSrc: "/images/feedback/feedback-4.jpg",
  },
  {
    id: "feedback-5",
    kind: "recognition",
    caption: { en: "Recognition card — Aspiration (VUS)", vi: "Thẻ ghi nhận — Aspiration (VUS)" },
    imageSrc: "/images/feedback/feedback-5.jpg",
  },
  {
    id: "feedback-6",
    kind: "recognition",
    caption: { en: "Recognition card — Aspiration (VUS)", vi: "Thẻ ghi nhận — Aspiration (VUS)" },
    imageSrc: "/images/feedback/feedback-6.jpg",
  },
  {
    id: "bulletin-digital-class-folder",
    kind: "bulletin",
    caption: {
      en: "Internal bulletin — Digital Class Folder project",
      vi: "Bản tin nội bộ — dự án Digital Class Folder",
    },
    imageSrc: "/images/feedback/digital-class-folder.jpg",
  },
];
