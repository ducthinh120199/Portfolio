export type Locale = "en" | "vi";

export type LocalizedText = {
  en: string;
  vi: string;
};

export type ContentShape = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    feedback: string;
    tiktok: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    intro: string;
    ctaProjects: string;
    ctaCv: string;
    ctaContact: string;
    quickFacts: string;
    portraitAlt: string;
  };
  about: {
    label: string;
    title: string;
    timelineLabel: string;
    paragraph: string;
  };
  skills: {
    label: string;
    title: string;
  };
  projects: {
    label: string;
    title: string;
    placeholder: string;
    github: string;
    live: string;
    viewMore: string;
    viewLess: string;
  };
  feedback: {
    label: string;
    title: string;
    placeholder: string;
  };
  tiktok: {
    label: string;
    title: string;
    description: string;
    pendingVideos: string;
    visitChannel: string;
  };
  contact: {
    label: string;
    title: string;
    downloadCv: string;
  };
};

export const content: Record<Locale, ContentShape> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      feedback: "Feedback",
      tiktok: "TikTok",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Hi, I'm",
      role: "Full-stack Developer",
      intro:
        "Full-stack Developer with 6 years of experience — particularly strong in frontend development and enterprise systems integration — building scalable web applications and customizing Microsoft Dynamics 365 (CRM). I'm also growing my backend expertise in Java/Spring Boot, and looking to contribute to enterprise digital transformation projects with a long-term growth mindset.",
      ctaProjects: "View projects",
      ctaCv: "Download CV",
      ctaContact: "Get in touch",
      quickFacts: "6 years experience · Frontend & D365 (CRM) · growing backend with Java/Spring Boot",
      portraitAlt: "Portrait of Nguyễn Đức Thịnh",
    },
    about: {
      label: "About",
      title: "Background",
      timelineLabel: "Timeline",
      paragraph:
        "6 years of experience as a Full-stack Developer, particularly strong in frontend development (Next.js, React, Vue.js) and enterprise systems integration — customizing Microsoft Dynamics 365 (CRM) and working on Oracle APEX/PL-SQL. At VUS I've shipped systems end-to-end as the main contributor — Digital Class Folder (rolled out nationwide, saving an estimated 450M+ VND/year), an AI grading system using the Gemini API, and 7 internal sub-systems — while setting up and tuning the servers behind them (a background job cut from 24+ hours to 13 minutes). Strong in system integration, automation, and cloud deployment (Google Cloud, Firebase, Cloudflare, Heroku, Docker), with growing backend expertise in Java/Spring Boot, Redis, and Kafka.",
    },
    skills: {
      label: "Skills",
      title: "What I work with",
    },
    projects: {
      label: "Projects",
      title: "Personal projects",
      placeholder: "Screenshot coming soon",
      github: "GitHub",
      live: "Live demo",
      viewMore: "View more",
      viewLess: "View less",
    },
    feedback: {
      label: "Feedback",
      title: "Company feedback",
      placeholder: "Screenshot coming soon",
    },
    tiktok: {
      label: "TikTok",
      title: "Code content",
      description: "A channel where I share bite-sized coding lessons.",
      pendingVideos: "Videos coming soon — waiting on links to embed",
      visitChannel: "Visit channel",
    },
    contact: {
      label: "Contact",
      title: "Let's build something",
      downloadCv: "Download CV",
    },
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      feedback: "Feedback",
      tiktok: "TikTok",
      contact: "Liên hệ",
    },
    hero: {
      eyebrow: "Xin chào, mình là",
      role: "Full-stack Developer",
      intro:
        "Full-stack Developer với 6 năm kinh nghiệm — mạnh nhất ở mảng frontend và tích hợp hệ thống doanh nghiệp — xây dựng ứng dụng web quy mô lớn và customize Microsoft Dynamics 365 (CRM). Mình cũng đang phát triển thêm năng lực backend với Java/Spring Boot, và mong muốn đóng góp vào các dự án chuyển đổi số doanh nghiệp với định hướng gắn bó lâu dài.",
      ctaProjects: "Xem dự án",
      ctaCv: "Tải CV",
      ctaContact: "Liên hệ",
      quickFacts: "6 năm kinh nghiệm · Frontend & D365 (CRM) · đang phát triển backend với Java/Spring Boot",
      portraitAlt: "Chân dung Nguyễn Đức Thịnh",
    },
    about: {
      label: "Giới thiệu",
      title: "Hành trình",
      timelineLabel: "Dòng thời gian",
      paragraph:
        "6 năm kinh nghiệm làm Full-stack Developer, mạnh nhất ở frontend (Next.js, React, Vue.js) và tích hợp hệ thống doanh nghiệp — customize Microsoft Dynamics 365 (CRM) và làm việc trên Oracle APEX/PL-SQL. Tại VUS, mình làm end-to-end với vai trò main contributor — Digital Class Folder (triển khai toàn quốc, tiết kiệm ước tính hơn 450 triệu VND/năm), hệ thống chấm điểm bằng AI dùng Gemini API, và 7 sub-system nội bộ — đồng thời tự dựng và tối ưu server phía sau (một background job giảm từ hơn 24 giờ xuống 13 phút). Mạnh về system integration, automation và triển khai cloud (Google Cloud, Firebase, Cloudflare, Heroku, Docker), đồng thời đang phát triển thêm backend với Java/Spring Boot, Redis và Kafka.",
    },
    skills: {
      label: "Kỹ năng",
      title: "Công cụ mình dùng",
    },
    projects: {
      label: "Dự án",
      title: "Dự án cá nhân",
      placeholder: "Ảnh chụp màn hình sắp có",
      github: "GitHub",
      live: "Xem demo",
      viewMore: "Xem thêm",
      viewLess: "Thu gọn",
    },
    feedback: {
      label: "Feedback",
      title: "Đánh giá từ công ty",
      placeholder: "Ảnh chụp màn hình sắp có",
    },
    tiktok: {
      label: "TikTok",
      title: "Nội dung về code",
      description: "Kênh chia sẻ những bài học code ngắn gọn, dễ hiểu.",
      pendingVideos: "Video sắp có — đang chờ link để nhúng",
      visitChannel: "Ghé kênh",
    },
    contact: {
      label: "Liên hệ",
      title: "Cùng làm gì đó nhé",
      downloadCv: "Tải CV",
    },
  },
};
