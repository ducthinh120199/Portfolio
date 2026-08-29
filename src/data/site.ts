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
  cvUrl: "/cv/CV_NguyenDucThinh_General.pdf",
  portraitSrc: "/images/profile/portrait.jpg" as string | undefined,
  timeline: [
    {
      period: { en: "10/2020 — 08/2022", vi: "10/2020 — 08/2022" } as LocalizedText,
      org: "JV-IT Techs",
    },
    {
      period: { en: "08/2022 — Present", vi: "08/2022 — nay" } as LocalizedText,
      org: "VUS",
    },
  ],
  tiktok: {
    handle: "@thinhbuilds",
    url: "https://www.tiktok.com/@thinhbuilds",
    videoUrls: [
      "https://www.tiktok.com/@thinhbuilds/video/7648905721676827911",
      "https://www.tiktok.com/@thinhbuilds/video/7665135985822403848",
      "https://www.tiktok.com/@thinhbuilds/video/7651638734684769554"
    ] as string[],
  },
};
