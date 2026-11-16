import type { LocalizedText } from "./content";

export type Project = {
  slug: string;
  title: string;
  description: LocalizedText;
  highlights?: LocalizedText[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  // Ảnh chưa có — để trống, ProjectCard tự render placeholder + TODO.
  // TODO: cần ảnh screenshot của project này — xem PLAN.md mục 5/6
  imageSrc?: string;
  // Optional — nếu có video demo (mp4, nên là dọc/portrait cho featured card), ưu tiên hiển thị thay imageSrc.
  videoSrc?: string;
};

export const projects: Project[] = [
  {
    slug: "momentum",
    title: "Momentum",
    description: {
      en: "A mobile-first PWA for tracking personal goals — built solo end-to-end, from a runtime-driven form engine to a Beeminder-style pace tracker, iOS push notifications, and AI-generated insights.",
      vi: "PWA theo dõi mục tiêu cá nhân, mobile-first — tự làm end-to-end một mình, từ form engine dựng động lúc runtime, pace tracker kiểu Beeminder, push notification trên iOS, đến AI insight.",
    },
    highlights: [
      {
        en: "Dynamic entry schema — each goal builds its own log form at runtime, validated with Zod",
        vi: "Dynamic entry schema — mỗi mục tiêu tự dựng form nhật ký riêng lúc runtime, validate bằng Zod",
      },
      {
        en: "Beeminder-style pace engine — daily ahead / on-track / behind / at-risk status for both increasing and decreasing goals",
        vi: "Pace engine kiểu Beeminder — tính trạng thái ahead/onTrack/behind/atRisk mỗi ngày, cho cả mục tiêu tăng lẫn giảm",
      },
      {
        en: "Streaks with 2 forgiven misses a month, auto-repaired on backfilled entries",
        vi: "Streak có tha lỗi 2 lần/tháng, tự vá khi log bù ngày cũ",
      },
      {
        en: "Self-hosted Web Push (VAPID) that actually works on iOS, no FCM",
        vi: "Web Push chuẩn VAPID tự host, chạy thật trên iOS, không qua FCM",
      },
      {
        en: "Per-user local-time reminder cron on Cloudflare Workers, with its own healthcheck",
        vi: "Cron nhắc nhở theo giờ local từng user trên Cloudflare Workers, có healthcheck riêng",
      },
      {
        en: "Gemini-powered insights on progress and habits, plus opt-in family sharing",
        vi: "AI insight (Gemini) phân tích tiến độ/thói quen, kèm family sharing dạng opt-in",
      },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Firestore",
      "Cloudflare Workers",
      "Web Push (VAPID)",
      "Gemini API",
      "Serwist",
      "Zod",
    ],
    githubUrl: undefined,
    liveUrl: "https://go-momentum.vercel.app/",
    imageSrc: undefined,
    videoSrc: "/videos/projects/momentum.mp4",
  },
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot",
    description: {
      en: "A retrieval-augmented chatbot built from scratch in Python — no frameworks — and deployed live on Streamlit Cloud.",
      vi: "Chatbot RAG (retrieval-augmented) tự viết từ đầu bằng Python — không dùng framework — và deploy chạy thật trên Streamlit Cloud.",
    },
    highlights: [
      {
        en: "Hybrid search (dense + BM25 + RRF) with cross-encoder reranking, source citations, and OCR fallback for scanned PDFs",
        vi: "Hybrid search (dense + BM25 + RRF) kèm cross-encoder reranking, trích dẫn nguồn và OCR fallback cho PDF scan",
      },
      {
        en: "Agent that routes between semantic search and Text-to-SQL on Postgres with SQL guardrails — list-type question accuracy rose from 5/16 to 16/16",
        vi: "Agent tự chọn giữa semantic search và Text-to-SQL trên Postgres, có SQL guardrails — độ chính xác câu hỏi dạng liệt kê tăng từ 5/16 lên 16/16",
      },
      {
        en: "Retry/rate-limit handling, incremental data sync (CDC), RAGAS evaluation, and latency profiling",
        vi: "Xử lý retry/rate-limit, đồng bộ dữ liệu incremental (CDC), đánh giá bằng RAGAS và đo latency",
      },
    ],
    tech: ["Python", "Gemini API", "ChromaDB", "pgvector", "PostgreSQL", "Streamlit", "Docker", "Ollama"],
  },
  {
    slug: "design-to-production",
    title: "Design-to-Production Automation",
    description: {
      en: "A fully automated workflow that carries a Figma design change all the way through to the live page, with no manual steps.",
      vi: "Workflow tự động hoàn toàn, đưa một thay đổi thiết kế trên Figma đi thẳng tới trang live mà không cần thao tác tay.",
    },
    tech: ["Figma API", "Anthropic SDK"],
  },
  {
    slug: "dev-assistant-bot",
    title: "Dev Assistant Bot",
    description: {
      en: "A chat agent that automatically pulls the latest Git changes at the start of each day when the machine is opened.",
      vi: "Chat agent tự động pull thay đổi Git mới nhất mỗi sáng khi mở máy.",
    },
    highlights: [
      {
        en: "Runs on a local LLM (Ollama), so no code leaves the machine",
        vi: "Chạy trên LLM local (Ollama), code không rời khỏi máy",
      },
    ],
    tech: ["Python", "Ollama", "Git"],
  },
  {
    slug: "seckill",
    title: "Seckill — Flash Sale System",
    description: {
      en: "A personal project simulating a high-load flash-sale system ('seckill'), built to teach myself Java/Spring Boot while solving real concurrency and race-condition problems when many users try to buy a limited-stock item at once.",
      vi: "Dự án cá nhân mô phỏng hệ thống flash-sale chịu tải cao (kiểu 'seckill'), tự học Java/Spring Boot để giải quyết bài toán concurrency, race condition khi nhiều người dùng cùng mua 1 sản phẩm giới hạn số lượng trong thời gian ngắn.",
    },
    tech: ["Java", "Spring Boot", "Redis", "Kafka", "MySQL"],
    githubUrl: "https://github.com/ducthinh120199",
    // Tạm thời dùng diagram kiến trúc — thay bằng screenshot/demo thật khi có.
    imageSrc: "/images/projects/seckill.svg",
  },
];
