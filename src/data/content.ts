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
        "For 5+ years I've been the bridge between enterprise systems — D365, Oracle APEX — and modern web front ends. Lately I've been teaching myself Spring Boot on my own projects, closing the loop to full-stack.",
      ctaProjects: "View projects",
      ctaCv: "Download CV",
      ctaContact: "Get in touch",
      quickFacts: "5+ years experience · Next.js, React, Vue · learning Spring Boot",
      portraitAlt: "Portrait of Nguyễn Đức Thịnh",
    },
    about: {
      label: "About",
      title: "Background",
      timelineLabel: "Timeline",
      paragraph:
        "5+ years building software, with real depth in frontend (Next.js, React, Vue) and system integration (Microsoft D365, Oracle APEX/PL-SQL). Right now I'm deliberately going deeper into Java and Spring Boot through personal projects, rounding out a full-stack skill set.",
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
        "Hơn 5 năm nay mình là cầu nối giữa hệ thống doanh nghiệp — D365, Oracle APEX — với các ứng dụng web hiện đại. Gần đây mình tự học Spring Boot qua các dự án cá nhân để khép kín năng lực full-stack.",
      ctaProjects: "Xem dự án",
      ctaCv: "Tải CV",
      ctaContact: "Liên hệ",
      quickFacts: "5+ năm kinh nghiệm · Next.js, React, Vue · đang học Spring Boot",
      portraitAlt: "Chân dung Nguyễn Đức Thịnh",
    },
    about: {
      label: "Giới thiệu",
      title: "Hành trình",
      timelineLabel: "Dòng thời gian",
      paragraph:
        "5+ năm kinh nghiệm phát triển phần mềm, mạnh về Frontend (Next.js/React/Vue) và System Integration (Microsoft D365, Oracle APEX/PL-SQL). Hiện mình đang chủ động học sâu Java/Spring Boot qua các dự án cá nhân để hoàn thiện năng lực full-stack.",
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
