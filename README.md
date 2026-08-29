# Portfolio — Nguyễn Đức Thịnh

Portfolio cá nhân (Next.js App Router + TypeScript + TailwindCSS v4). Xem `PLAN.md` để biết design system, wireframe, task breakdown và checklist ảnh/link còn thiếu.

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run test` — unit test (Vitest + React Testing Library)

## Thay data thật

Toàn bộ nội dung động nằm trong `src/data/`:

- `site.ts` — thông tin cá nhân (không phụ thuộc ngôn ngữ): email, GitHub, WhatsApp, CV, timeline, TikTok handle/link, `portraitSrc` cho ảnh chân dung hero
- `content.ts` — toàn bộ copy UI song ngữ `{ en, vi }` (nav, hero, section title, CTA...) dùng qua hook `useLanguage()` trong `src/lib/language.tsx`
- `skills.ts` — nhóm kỹ năng
- `projects.ts` — project cá nhân, `description` là `{ en, vi }`; thêm `imageSrc: "/images/projects/<file>.jpg"` khi có ảnh thật
- `feedback.ts` — feedback, `caption` là `{ en, vi }`, mỗi item cần khai `kind: "recognition"` (thẻ ghi nhận Aspiration, ảnh đứng) hoặc `kind: "bulletin"` (bản tin nội bộ, ảnh ngang full-width); thêm `imageSrc: "/images/feedback/<file>.jpg"` khi có ảnh thật

Ảnh đặt vào `public/images/profile/`, `public/images/projects/` hoặc `public/images/feedback/` đúng tên và tỉ lệ khai trong `PLAN.md` mục 7.2. Không cần sửa component — placeholder tự biến mất khi `imageSrc`/`portraitSrc` được set.

## Deploy

Đẩy lên GitHub rồi import vào [Vercel](https://vercel.com/new) — auto CI/CD theo mặc định, không cần cấu hình thêm.
