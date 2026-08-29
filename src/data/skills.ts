export type SkillIcon = "frontend" | "backend" | "erp" | "cloud" | "ai" | "design";

export type SkillGroup = {
  category: string;
  icon: SkillIcon;
  items: string[];
};

// Nguồn: public/cv/CV_NguyenDucThinh_General.pdf (mục TECHNICAL SKILLS) — giữ đúng theo CV,
// không tự thêm công nghệ ngoài CV.
export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "frontend",
    items: [
      "Next.js",
      "React",
      "JavaScript (ES6)",
      "TypeScript",
      "Vue.js",
      "Nuxt.js",
      "HTML5/CSS3",
      "SCSS",
      "Ant Design",
    ],
  },
  {
    category: "Backend & Database",
    icon: "backend",
    items: [
      "Oracle APEX",
      "PL/SQL",
      "SQL Server",
      "Java (learning)",
      "Spring Boot (learning)",
      "Redis (learning)",
      "Kafka (learning)",
    ],
  },
  {
    category: "D365 & ERP",
    icon: "erp",
    items: ["Dynamics 365 CE/CRM", "Custom Web Resources", "Plugins", "FetchXML", "XrmToolBox"],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    items: ["Google Cloud", "Firebase", "Cloudflare", "Git", "CI/CD"],
  },
  {
    category: "AI Tools",
    icon: "ai",
    items: ["OpenAI API", "Google Gemini API", "v0.dev", "Lovable", "Google AI Studio"],
  },
  {
    category: "Design",
    icon: "design",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"],
  },
];
