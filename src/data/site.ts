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
    { period: "2020 — 2022", org: "JV-IT Techs" },
    { period: "2022 — nay", org: "VUS" },
  ],
  // TODO: cần handle/link kênh TikTok thật + link video muốn nhúng — xem PLAN.md mục 6
  tiktok: {
    handle: "@thinh.dev (placeholder)",
    url: "https://www.tiktok.com/@thinh.dev",
    videoUrls: [] as string[],
  },
};
