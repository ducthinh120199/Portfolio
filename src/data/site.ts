import type { LocalizedText } from "./content";

export const site = {
  name: "Nguyễn Đức Thịnh",
  handle: "thinh.dev",
  // TODO: cập nhật đúng domain thật khi deploy — dùng cho canonical URL, Open Graph, sitemap, robots.txt.
  url: "https://thinh.dev",
  title: "Full-stack Developer",
  location: "Ho Chi Minh City, Vietnam",
  relocation: "Open to remote / Singapore relocation",
  email: "ducthinh120199@gmail.com",
  github: "https://github.com/ducthinh120199",
  whatsapp: {
    vn: "+84792844082",
    sg: "+84865541926",
  },
  cvUrl: "/cv/CV_NguyenDucThinh.pdf",
  portraitSrc: "/images/profile/portrait.jpg" as string | undefined,
  timeline: [
    {
      period: { en: "10/2020 — 08/2023", vi: "10/2020 — 08/2023" } as LocalizedText,
      org: "JV-IT Techs",
    },
    {
      period: { en: "08/2023 — Present", vi: "08/2023 — nay" } as LocalizedText,
      org: "VUS",
    },
  ],
  tiktok: {
    handle: "@thinhbuilds",
    url: "https://www.tiktok.com/@thinhbuilds",
    // Static cards (self-hosted cover + link out) instead of TikTok's iframe player:
    // the player's API returns 403 when the browser blocks third-party storage
    // (empty msToken), which showed "Player authentication failed" to those visitors.
    // Covers: public/images/tiktok/<video id>.jpg (9:16).
    videos: [
      {
        url: "https://www.tiktok.com/@thinhbuilds/video/7648905721676827911",
        title: "Khi bạn mới nhận dự án .NET mà không một ai bàn giao…",
        duration: "0:43",
        cover: "/images/tiktok/7648905721676827911.jpg",
      },
      {
        url: "https://www.tiktok.com/@thinhbuilds/video/7665135985822403848",
        title: "EP 05: Figma đổi 1 nút — GitHub tự có PR",
        duration: "2:07",
        cover: "/images/tiktok/7665135985822403848.jpg",
      },
      {
        url: "https://www.tiktok.com/@thinhbuilds/video/7651638734684769554",
        title: "EP 02: Oracle APEX & GitHub Copilot",
        duration: "0:41",
        cover: "/images/tiktok/7651638734684769554.jpg",
      },
    ] as { url: string; title: string; duration: string; cover: string }[],
  },
};
