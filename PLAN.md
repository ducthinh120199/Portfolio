# PLAN — Portfolio Nguyễn Đức Thịnh

## 0. Research — 5 portfolio developer tham khảo

| Site | Type pairing | Màu | Bố cục hero | Structural device |
|---|---|---|---|---|
| brittanychiang.com | Mono cho label + sans cho body | Navy đậm nền, 1 accent mint xanh lá | Sidebar trái cố định (tên, social), nội dung cuộn phải | Numbered sections ("01. About"), sticky sidebar, fade-in scroll 1 lần |
| leerob.io | System sans, gần như không trang trí | Trắng/đen thuần, gần như không màu | Avatar nhỏ + 2-3 câu bio + list bài viết dạng text link | Mật độ nội dung cao, tối giản tối đa, tốc độ là điểm nhấn |
| rauno.me | Sans hiển thị lớn, rất typographic | Nền sáng, chữ đen, accent màu nhạt | Chữ lớn chiếm màn hình, nhiều khoảng trắng | 1 micro-interaction đặc trưng (không tràn lan), cursor/tilt effect |
| tobiasahlin.com (portfolio cũ) | Sans đậm, hình học | Trung tính, ảnh làm điểm nhấn màu | Grid dự án, hover reveal ảnh | Hover-driven project grid |
| Dev portfolio dạng Awwwards/Godly | Sans lớn cho tên + mono cho meta (ngày, tag) | Nền trung tính, 1-2 accent | Tên lớn phủ màn hình, case-study style project (có metric) | Asymmetric 2 cột, scroll-reveal nhẹ, "case study" thay vì mô tả suông |

**Điểm chung rút ra**: label đánh số bằng mono font, nav tối giản, hero là 1 câu tuyên ngôn thay vì đoạn văn, project trình bày kiểu case-study (có kết quả/số liệu), animation chỉ xảy ra 1 lần lúc load hoặc reveal nhẹ khi cuộn — không lặp, không rải rác.

## 1. Hướng thiết kế riêng cho Thịnh (tự kiểm tra chéo 3 "look mặc định AI")

Tránh: (a) cream+serif+cam đất nung, (b) nền đen + 1 neon xanh/đỏ, (c) newspaper/hairline dày đặc bo góc 0.

→ Chọn: **nền sáng trung tính lạnh (không cream)** + **display font hình học kỹ thuật** (Space Grotesk) + **body sans dễ đọc** (Inter) + **mono cho mọi metadata/label** (JetBrains Mono) + **2 accent**: indigo điện làm màu chính, amber dùng cực hạn chế (<5% diện tích) cho 1 điểm nhấn duy nhất — không phải "1 neon trên nền đen" vì nền là sáng trung tính, không phải đen.

**Self-check (mục 3.2)**: nếu dùng prompt tương tự cho brief khác, có ra y hệt không? → Không, vì tín hiệu đặc trưng nằm ở *nội dung* của signature element (mục 3 bên dưới) — nó lấy đúng dữ kiện thật của Thịnh (5+ năm, stack, dự án seckill đang build) chứ không phải hiệu ứng trang trí chung chung. Palette/type là khung sườn trung tính, nhưng nội dung khiến nó không thể tái dùng nguyên xi cho người khác.

### 1.1 Design tokens (định nghĩa trong `src/app/globals.css` qua `@theme`)

**Color**
| Token | Hex | Ý nghĩa dùng |
|---|---|---|
| `--color-paper` | `#F5F6F8` | Nền chính — xám trắng lạnh, không cream |
| `--color-paper-raised` | `#FFFFFF` | Nền card/surface nổi trên paper |
| `--color-ink` | `#12141A` | Text chính, gần đen ánh navy |
| `--color-ink-muted` | `#5B6270` | Text phụ/caption/mô tả |
| `--color-line` | `#E4E6EB` | Hairline border, divider |
| `--color-signal` | `#4A3AFF` | Accent chính — link, CTA, số thứ tự section |
| `--color-signal-soft` | `#EEECFF` | Nền nhạt của signal (badge, hover) |
| `--color-flash` | `#F2A93B` | Accent phụ — dùng cực hạn chế: 1 chi tiết trong signature element (liên tưởng "flash sale/seckill") |

**Type** (khai báo qua `next/font/google`, biến CSS `--font-display`, `--font-body`, `--font-mono`)
- Display: **Space Grotesk** — dùng cho H1, H2, H3, tên nav
- Body: **Inter** — dùng cho paragraph, list
- Mono: **JetBrains Mono** — dùng cho label đánh số section, tag công nghệ, status panel, caption ngày tháng

Type scale:
| Cấp | Font | Size/LH desktop | Size/LH mobile (375px) | Weight |
|---|---|---|---|---|
| H1 | display | 56px/1.05 | 34px/1.12 | 600 |
| H2 (section title) | display | 32px/1.15 | 26px/1.2 | 600 |
| H3 (card title) | display | 20px/1.3 | 19px/1.3 | 600 |
| Body | body | 17px/1.6 | 16px/1.6 | 400 |
| Caption/meta | mono | 13px/1.5, uppercase, tracking .08em | 12px/1.5 | 500 |

**Layout**: max-width nội dung 1120px, padding ngang 24px (mobile) → 64px (desktop), spacing giữa section 96px desktop / 56px mobile. Nav sticky-top (không sidebar) để đơn giản hoá responsive và tránh trùng bố cục brittanychiang.

**Signature element — "Build Status" panel trong Hero**
Một khối giống bảng trạng thái hệ thống/dashboard kỹ thuật, đặt cạnh hero statement, hiển thị 4 dòng dữ kiện thật (không trang trí giả):
```
STATUS       ONLINE — OPEN TO WORK
EXPERIENCE   5+ YRS · FRONTEND-HEAVY FULL-STACK
STACK        NEXT.JS · REACT/VUE · SPRING BOOT (LEARNING) · ORACLE APEX
BUILDING NOW SECKILL — HIGH-CONCURRENCY FLASH-SALE SYSTEM
```
- Font mono, khung viền `--color-line`, 1 dấu chấm nhỏ màu `--color-flash` nhấp nháy 1 lần cạnh "STATUS" khi load (chỉ 1 lần, tắt hẳn nếu `prefers-reduced-motion`).
- Đây là điểm nhấn DUY NHẤT có motion ngoài scroll-reveal nhẹ.

## 2. Sitemap / Wireframe (ASCII)

### Nav (sticky top)
```
[ THINH.DEV ]                 About  Skills  Projects  Feedback  TikTok    [Contact] [CV]
```

### Hero
```
01 / INTRO
┌───────────────────────────────┐  ┌─────────────────────────────┐
│ Nguyễn Đức Thịnh                │  │  BUILD STATUS PANEL (mono)  │
│ Full-stack Developer            │  │  STATUS ...                 │
│                                  │  │  EXPERIENCE ...              │
│ "5+ năm nối enterprise system   │  │  STACK ...                   │
│  (D365, Oracle APEX) với web    │  │  BUILDING NOW ...             │
│  hiện đại — giờ tự học Spring   │  └─────────────────────────────┘
│  Boot để khép kín full-stack."  │
│                                  │
│ [Xem Projects] [Tải CV] [Liên hệ]│
└───────────────────────────────┘
(mobile: panel xuống dưới, full width)
```

### About
```
02 / ABOUT
Đoạn giới thiệu (career objective rút gọn)
Timeline:
  2020 ── 2022   JV-IT Techs
  2022 ── nay    VUS
```

### Skills
```
03 / SKILLS
[Frontend]        [Backend & Database]   [D365 & ERP]
tag tag tag        tag tag tag            tag tag
[Cloud & DevOps]   [AI Tools]
tag tag             tag tag
```
(grid 2 cột mobile → 5 cột desktop, mỗi group = card viền hairline)

### Projects
```
04 / PROJECTS
┌──────────────┐ ┌──────────────┐
│ [image 16:10]│ │ [image 16:10]│
│ Title         │ │ Title         │
│ mô tả ngắn    │ │ mô tả ngắn    │
│ tag tag tag   │ │ tag tag tag   │
│ GitHub →      │ │ GitHub →      │
└──────────────┘ └──────────────┘
```

### Feedback
```
05 / FEEDBACK
Carousel/grid card:
┌─────────────┐
│ [screenshot] │
│ "Colleague at VUS" — caption
└─────────────┘
```

### TikTok
```
06 / TIKTOK
Tên kênh + mô tả + link
[oEmbed blockquote video 1] [oEmbed blockquote video 2]
```

### Contact/Footer
```
07 / CONTACT
Email · WhatsApp · GitHub · [Download CV]
© năm hiện tại — Nguyễn Đức Thịnh
```

## 3. Kiến trúc code

```
src/
  app/
    layout.tsx        // metadata, fonts, <Nav/>, <Footer/>
    page.tsx           // ghép các section theo thứ tự
    globals.css         // @theme tokens
  components/
    Nav.tsx
    Hero.tsx
    BuildStatusPanel.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    ProjectCard.tsx
    Feedback.tsx
    FeedbackCard.tsx
    TikTok.tsx
    Contact.tsx (footer)
    SectionHeading.tsx  // label mono "0X / NAME" dùng chung
  data/
    projects.ts
    feedback.ts
    skills.ts
    site.ts             // thông tin liên hệ, social, CV link
public/
  images/
    projects/.gitkeep
    feedback/.gitkeep
  cv/ (chờ file CV thật)
tests/ (hoặc __tests__ cạnh component)
```

`ProjectCard` nhận prop `imageSrc?: string` — nếu rỗng, render khối placeholder xám `bg-paper-raised border border-line` với text `Screenshot sắp có` + comment `// TODO: cần ảnh screenshot của [tên project]`. Tương tự `FeedbackCard`.

## 4. Task breakdown

1. [x] Scaffold Next.js + TS + Tailwind (App Router, src dir)
2. [x] Thiết lập design tokens trong `globals.css` + import 3 Google Fonts qua `next/font/google`
3. [x] `data/site.ts`, `data/skills.ts`, `data/projects.ts` (mock/thật theo mục 7 PRD), `data/feedback.ts` (mock, placeholder ảnh)
4. [x] `SectionHeading`, `Nav`, `Footer/Contact`
5. [x] `Hero` + `BuildStatusPanel` (signature element, tôn trọng `prefers-reduced-motion`)
6. [x] `About` (career objective + timeline)
7. [x] `Skills` (grouped tags)
8. [x] `Projects` + `ProjectCard` (placeholder ảnh + TODO)
9. [x] `Feedback` + `FeedbackCard` (placeholder ảnh + TODO)
10. [x] `TikTok` section (oEmbed blockquote, placeholder handle/link)
11. [x] Responsive pass 375px → desktop (grid/flex responsive, nav horizontal-scroll trên mobile), focus-visible states toàn trang (`:focus-visible` global trong `globals.css`)
12. [x] Scroll-reveal nhẹ (`.reveal` class + `ScrollReveal` IntersectionObserver, tắt hoàn toàn khi `prefers-reduced-motion: reduce`)
13. [x] Unit test: Nav, Hero, ProjectCard, FeedbackCard (Vitest + RTL) — 9/9 pass
14. [x] `npm run build` xanh, `npm run lint` xanh, `npm run dev` trả 200 (kiểm tra tự động, không có trình duyệt để soi breakpoint bằng mắt trong môi trường này — cần Thịnh tự xem lại trên trình duyệt thật)
15. [x] Viết checklist bàn giao (ảnh/link cần, cách thay data thật) — xem mục 5, 6 và phần bàn giao cuối file

## 5. Checklist ảnh/asset cần bổ sung (chưa có — dùng placeholder tạm)

| # | File cần đặt vào | Kích thước khuyến nghị | Ghi chú |
|---|---|---|---|
| 1 | `public/images/projects/seckill.jpg` | 1200×800 (3:2) | Screenshot terminal/kiến trúc/benchmark dự án Seckill |
| 2 | `public/images/projects/<project-2>.jpg` | 1200×800 | Tên project #2 — chưa có, đang dùng mock data |
| 3 | `public/images/feedback/feedback-1.jpg` | 1000×750 (hoặc theo tỉ lệ ảnh chụp màn hình thật) | Screenshot feedback Aspiration #1 |
| 4 | `public/images/feedback/feedback-2.jpg` | 1000×750 | Screenshot feedback Aspiration #2 |
| 5 | `public/images/feedback/feedback-3.jpg` | 1000×750 | Screenshot feedback Aspiration #3 (tuỳ chọn) |
| 6 | `public/cv/nguyen-duc-thinh-cv.pdf` | — | File CV tĩnh cho nút "Tải CV" (hoặc thay bằng link Drive trong `data/site.ts`) |

Thư mục `.gitkeep` đã tạo sẵn ở `public/images/projects/` và `public/images/feedback/` để giữ cấu trúc git.

## 6. Câu hỏi/thông tin còn thiếu (giữ nguyên theo PRD mục 8 — KHÔNG tự bịa)

- [ ] Tên + mô tả các project cá nhân khác (ngoài Seckill) — đang dùng 1 mock project placeholder
- [ ] Screenshot/ảnh demo cho từng project cá nhân
- [x] Ảnh chân dung cho hero — đã có tại `public/images/profile/portrait.jpg`, nối vào `site.portraitSrc`
- [x] Ảnh thẻ ghi nhận Aspiration — đã có 6 ảnh (`feedback-1.jpg` … `feedback-6.jpg`)
- [x] Ảnh bản tin nội bộ "Digital Class Folder" — đã có tại `public/images/feedback/digital-class-folder.jpg`
- [ ] Handle/link kênh TikTok + link video muốn nhúng — đang dùng placeholder handle trong `data/site.ts`
- [x] File CV thật — `public/cv/CV_NguyenDucThinh_General.pdf`, đã nối vào `site.cvUrl`

## 7.1 Addendum v2 — theo `PORTFOLIO_REDESIGN_V2.md` (ghi đè 1 phần mục 1, 3, 4 ở trên)

Bản v1 (dashboard/terminal, mono-label làm chủ đạo, không ảnh cá nhân) bị nhận xét là khô, thiếu yếu tố con người, và lẫn ngôn ngữ Anh/Việt. Đã điều chỉnh:

**Font mới**: `Bricolage Grotesque` (display — tên/heading, grotesque sans có cá tính, nét cong riêng, không phải font "an toàn" mặc định) + `Inter` (body, giữ nguyên vì đã dễ đọc, không phải font hệ thống) + `JetBrains Mono` hạ vai trò xuống caption/eyebrow nhỏ (không còn làm khối bảng thống kê chiếm nửa hero).
Lý do chọn Bricolage: có nét "đang chuyển mình" — vừa geometric/kỹ thuật vừa có chi tiết bo mềm, hợp với hình ảnh 1 dev đang tự học mở rộng sang backend, không quá nghiêm túc như 1 serif tương phản cao, cũng không quá "corporate" như Inter dùng cho cả display.

**Màu accent mới**: đổi từ indigo `--color-signal` sang 1 màu ấm duy nhất `--color-ember` (`#C8672B`, cam đất nung ngả nâu) + `--color-ember-soft` (`#FBEEE1`) làm nền nhạt cho badge/tag. Lý do: ấm hơn để tạo cảm giác con người/gần gũi (bù lại cho phần "khô" bị chê), nhưng **chỉ 1 màu, dùng có kiểm soát** (CTA chính, link hover, chấm timeline, badge nhạt) — không lạm dụng.
**Self-check bắt buộc (đã làm)**: ember + Bricolage (sans, không phải serif) + nền `--color-paper` vẫn giữ xám lạnh `#F6F7F9` (không đổi sang cream) → tránh đúng combo cấm #1 của PRD gốc (cream + serif tương phản cao + cam đất nung) vì thiếu 2/3 yếu tố (không serif, không cream).

**Hero split-layout**: 2 cột (text trái — eyebrow/tên/role/intro/CTA/quick-facts caption nhỏ; ảnh chân dung phải, khung `aspect-[4/5]`, bo góc, không overlay chữ lên ảnh). Trên mobile ảnh xuống dưới. Panel "Build Status" kiểu dashboard đã bị loại bỏ khỏi hero — rút gọn còn 1 dòng caption mono nhỏ dưới CTA (`quickFacts`).

**Bilingual EN/VI**: `src/data/content.ts` chứa toàn bộ copy UI theo `{ en: {...}, vi: {...} }`, `src/lib/language.tsx` cung cấp `LanguageProvider` + hook `useLanguage()` (React Context, client-side, lưu lựa chọn vào `localStorage`). Toggle "EN / VI" đặt ở góc phải `Nav`. Mặc định English. Nội dung dài (mô tả project, caption feedback, đoạn about) chuyển sang kiểu `LocalizedText = { en, vi }` ngay trong `data/projects.ts`/`data/feedback.ts`. Tên riêng (Nguyễn Đức Thịnh, JV-IT Techs, VUS, tên category skill) giữ nguyên không dịch — theo thông lệ site bilingual.

**Feedback — 2 định dạng** (theo yêu cầu bổ sung sau khi xem mẫu ảnh Aspiration thật):
- `kind: "recognition"` — thẻ ghi nhận từ hệ thống Aspiration (dạng đứng, có avatar người gửi/ngày/lời khen ngắn/"câu chuyện về bạn") → hiển thị dạng ảnh chụp nguyên khung, tỉ lệ `aspect-[3/4]`, `object-cover` (ảnh loại này đã được thiết kế vuông vắn nên crop nhẹ không mất chữ).
- `kind: "bulletin"` — bản tin/email nội bộ nói về 1 dự án cụ thể (dạng ngang, nhiều chữ, ví dụ "Digital Class Folder") → card full-width (`col-span` hết hàng lưới), tỉ lệ `aspect-[8/5]`, `object-contain` để không cắt mất chữ/số liệu.
`FeedbackCard` tự chọn layout theo `kind`, không cần biết trước sẽ có bao nhiêu ảnh mỗi loại.

## 7.2 Checklist ảnh/asset — cập nhật theo v2 (ghi đè mục 5 ở trên)

| # | File cần đặt vào | Kích thước khuyến nghị | Ghi chú |
|---|---|---|---|
| 1 | `public/images/profile/portrait.jpg` | tỉ lệ **4:5** (ví dụ 1000×1250) | Ảnh chân dung hero, không overlay chữ, nên có background đơn giản/không rối |
| 2 | `public/images/projects/seckill.jpg` | 1200×800 (3:2) | Screenshot terminal/kiến trúc/benchmark Seckill |
| 3 | `public/images/projects/<project-2>.jpg` | 1200×800 | Project cá nhân #2 — chưa có tên |
| 4 | `public/images/feedback/feedback-1.jpg` … `feedback-6.jpg` | ✅ đã có — tỉ lệ thật ~0.55 (rộng:cao), không crop (`object-contain`) | Screenshot thẻ ghi nhận Aspiration (`kind: "recognition"`), click để phóng to trong Lightbox |
| 5 | `public/images/feedback/digital-class-folder.jpg` (đặt tên tuỳ ý, cập nhật `imageSrc` trong `data/feedback.ts`) | poster dọc dài, không giới hạn tỉ lệ cụ thể — card tự làm preview thu gọn + Lightbox xem full | Poster bản tin nội bộ "Digital Class Folder" (`kind: "bulletin"`) — thêm entry mới vào `data/feedback.ts` với `kind: "bulletin"` cho mỗi bản tin tương tự |
| 6 | `public/cv/nguyen-duc-thinh-cv.pdf` | — | File CV tĩnh cho nút "Download CV" |

Thư mục `.gitkeep` đã tạo sẵn ở `public/images/profile/`, `public/images/projects/`, `public/images/feedback/`.

## 7.2b Addendum v2.1 — fix hiển thị ảnh + nâng cấp thị giác (theo phản hồi "trang xám xịt")

**Bug đã sửa**: 6 ảnh feedback thật (`feedback-1.jpg` … `feedback-6.jpg`) đã được up vào `public/images/feedback/` nhưng `data/feedback.ts` vẫn còn `imageSrc: undefined` nên không hiển thị — đã nối lại đúng path. Ảnh thật đo được có tỉ lệ ~0.55 (rộng:cao), không phải 3:4 như giả định ban đầu → đổi `FeedbackCard` sang `aspect-[5/9]` + `object-contain` (không crop mất chữ).

**Bulletin (poster dài)**: ảnh mẫu "Digital Class Folder" bạn gửi là poster dọc rất dài (không phải bản tin ngang như đoán lúc đầu) — nếu nhúng thẳng vào lưới sẽ phá layout. Giải pháp: card hiển thị **preview thu gọn** (`aspect-[4/3]`, `object-cover` từ đỉnh ảnh) + hover overlay "View full poster ↗", click mở **Lightbox** (`src/components/Lightbox.tsx`, portal vào `document.body`, đóng bằng Esc/click nền/nút X) hiển thị ảnh đầy đủ `object-contain`, cuộn được nếu dài hơn màn hình. Áp dụng cho cả `recognition` (bấm để phóng to đọc rõ hơn) lẫn `bulletin`.

**Nâng cấp thị giác** (phản hồi: trang phẳng/xám, chán):
- Hero: thêm gradient ấm toả góc trên-phải (`radial-gradient` bằng `--color-ember-soft`, chỉ trong hero, không lạm dụng ra toàn trang), khung ảnh chân dung có lớp accent lệch phía sau (offset ember block) + shadow thay vì hộp xám phẳng.
- Nhịp điệu section: xen kẽ nền `paper` (About/Projects/TikTok) và `paper-raised` có `border-y` (Skills/Feedback) để tránh 1 màu xám liền mạch từ đầu tới cuối.
- Contact/Footer: đổi nền tối `--color-ink` làm điểm kết mạnh (thường thấy ở portfolio đẹp — "dark closing band"), CTA download nổi bật trên nền tối.
- `SectionHeading`: thêm số thứ tự khổng lồ mờ (`text-ink/[0.04]`) phía sau tiêu đề — tạo chiều sâu thị giác mà không thêm màu mới.
- Card (`ProjectCard`, `FeedbackCard`, skill group card): thêm `shadow-sm` + hover `-translate-y-1 hover:shadow-lg`, bo góc `rounded-xl` thay `rounded-lg`, ảnh project có hover zoom nhẹ (`scale-105`, 300ms) — tất cả đều là hover micro-interaction do người dùng chủ động kích hoạt, không phải animation tự chạy, nên không vi phạm nguyên tắc "animation có chủ đích" của PRD gốc.
- Vẫn giữ đúng nguyên tắc "1 accent màu, dùng có kiểm soát" — độ phong phú thị giác đến từ shadow/gradient/nhịp nền, không thêm hue mới.

**Bug nav mobile đã sửa**: ở màn 375px, danh sách link bị bóp chỉ còn ~59px (do handle + toggle ngôn ngữ + nút Contact chiếm hết chỗ) → chỉ thấy "About S...", không thấy Projects/Feedback/TikTok. Đã sửa `Nav.tsx` dùng `flex-wrap` + `order` để mobile hiển thị 2 dòng (dòng 1: handle + EN/VI + Contact, dòng 2: link section full-width, scroll ngang được), desktop giữ nguyên 1 dòng — không nhân đôi DOM (tránh trùng lặp cho screen reader và giữ test đơn giản).

**Cách kiểm tra đã dùng**: cài Playwright cục bộ (`npm install --no-save playwright`, không ghi vào `package.json`), chụp screenshot desktop (1440px) + mobile (375px) của `localhost:3000` sau khi cuộn qua toàn trang (để trigger đúng scroll-reveal), soi từng vùng để phát hiện lỗi thật (không đoán). Đã xoá script/ảnh tạm sau khi xong.

## 7.2c Addendum v2.2 — recognition card slider dạng "fan" (tham khảo tasteskill.dev)

Thay lưới tĩnh 3 cột bằng `src/components/RecognitionCarousel.tsx`: các thẻ `kind: "recognition"` xếp chồng lấn nhau (overlap âm margin), thẻ giữa cao/to nhất (`z-index`, `scale` lớn nhất theo khoảng cách tới tâm), hover vào thẻ nào thẻ đó nổi lên trên cùng + phóng to nhẹ (`.fan-card` trong `globals.css`, chỉ áp dụng từ `sm:` trở lên qua `@media (min-width: 640px)` — dưới `sm` tự động fallback về hàng cuộn ngang `overflow-x-auto snap-x` bình thường, không có hiệu ứng chồng, đảm bảo dùng được ở 375px). Tối đa 5 thẻ/trang, có nút prev/next + dot điều hướng nếu nhiều hơn 5 item (`PAGE_SIZE = 5` trong component). Card `kind: "bulletin"` (poster dài) tách riêng, hiển thị full-width bên dưới carousel như cũ, không tham gia hiệu ứng fan.

Không copy nguyên bố cục 3D/marble của tasteskill.dev (sẽ lệch tông với phần còn lại của trang) — chỉ lấy cơ chế "stack chồng lấn, hover nổi lên trên" áp vào đúng hệ màu/token đã có (`--color-ember`, shadow, `rounded-xl`).

## 7.2d Addendum v2.3 — lớp nền ambient (aurora + grain), tránh cảm giác "web năm 2000"

Phản hồi: trang phẳng 1 màu nền xuyên suốt, thiếu chiều sâu kiểu web hiện đại — cần 1 lớp "ảnh/texture" phía dưới lớp màu, không phải đổi bảng màu.

Thêm `src/components/AmbientBackground.tsx`, render 1 lần ở `layout.tsx` (đứng sau `<body>`, trước nội dung):
- **`.aurora`**: 3 khối gradient tròn mờ (`blur(110px)`), `position: fixed` phủ toàn viewport, 2 khối màu `--color-ember`, 1 khối `--color-mist` (tông xanh-tím rất nhạt, **chỉ dùng cho nền ambient, không dùng cho UI/text** — không phá nguyên tắc "1 accent" đã chốt, ghi rõ bằng comment trong CSS). Trôi rất chậm (40-55s/chu kỳ) khi không bật `prefers-reduced-motion`.
- **`.grain`**: lớp noise mịn phủ toàn trang bằng SVG `feTurbulence` inline (data URI, không cần tải ảnh ngoài), `mix-blend-mode: overlay`, opacity 0.05 — tạo cảm giác texture như nền đá của tasteskill.dev nhưng không cần ảnh nặng.

Để lớp aurora "lộ" ra, các section không còn nền đặc (`bg-paper`, `bg-paper-raised`) mà chuyển sang **bán trong suốt + `backdrop-blur-xl`** (`bg-paper/75`, `bg-paper-raised/75`) — About/Skills/Projects/Feedback/TikTok đều áp dụng đồng bộ. Card nội dung bên trong (ProjectCard, FeedbackCard, skill tag...) vẫn giữ nền đặc để đảm bảo tương phản chữ/ảnh (không hy sinh khả năng đọc để lấy hiệu ứng). Contact/Footer giữ nguyên `bg-ink` đặc — nền tối không hợp để lộ aurora sáng màu, giữ làm điểm kết chắc chắn.

## 7.2e Addendum v2.4 — bản tin nội bộ tự cuộn ("news ticker")

Bản tin "Digital Class Folder" là 1 poster dọc rất dài, xem trong khung nhỏ sẽ mất ngữ cảnh. Thay preview tĩnh + click-lightbox bằng `src/components/BulletinScroller.tsx`: khung cố định (`h-105` / `sm:h-130`), ảnh full-height bên trong tự cuộn dọc chậm (22px/s), lặp lại khi chạm đáy. Người dùng rê chuột vào là tự dừng (rời chuột lại chạy tiếp), trên mobile chạm cũng dừng; vẫn tự kéo tay được bất cứ lúc nào (`overflow-y-auto` thật, không phải hiệu ứng giả). Nút phóng to (icon 4 mũi tên góc phải trên) mở `Lightbox` xem full như cũ. Tắt hẳn animation nếu `prefers-reduced-motion: reduce` (vẫn kéo tay được).

**2 lỗi ngầm phát hiện khi tự kiểm tra bằng Playwright (không phải đoán, đo bằng số thật)**:
1. Set `scrollTop` từ 1 accumulator JS riêng thay vì đọc lại `track.scrollTop` mỗi frame — vì trình duyệt làm tròn `scrollTop` về số nguyên, đọc lại sẽ làm rớt phần lẻ pixel tích luỹ mỗi frame → animation gần như đứng yên.
2. Rule CSS toàn cục `* { scroll-behavior: smooth }` (dùng cho anchor link) vô tình áp cả lên việc set `scrollTop` bằng JS, khiến mỗi frame trình duyệt khởi động lại 1 animation "smooth" đè lên animation cũ → gần như không nhúc nhích. Sửa bằng `style={{ scrollBehavior: "auto" }}` riêng cho khung này.

Ảnh test tạm (poster giả có vạch đánh số) đã dùng để đo tốc độ thật (~22px/s khớp cấu hình, pause khi hover về đúng delta=0) rồi xoá, không còn trong repo.

## 7.2f Addendum v2.5 — Skills hết đơn điệu, chuyển sang bento layout

Phản hồi: mục Skills (5 card đều tăm tắp, cùng cỡ, cùng style tag) nhìn nhàm chán. Đã đổi:
- **Bố cục bento bất đối xứng** (`src/components/Skills.tsx`, chỉ áp dụng `lg:`): Frontend (thế mạnh chính) chiếm 2 cột hàng đầu, Backend & Database cao gấp đôi bên phải (`row-span-2`), D365/Cloud vuông vắn hàng giữa, AI Tools kéo full-width làm hàng đóng — không còn lưới đều tăm tắp.
- **Icon riêng mỗi nhóm** (`src/components/SkillIcon.tsx`, `data/skills.ts` thêm field `icon`) — line-icon tối giản tự vẽ (không cần thư viện ngoài), làm điểm neo thị giác cho từng card.
- **Phân cấp tag**: item đầu tiên mỗi nhóm (kỹ năng nổi bật nhất) hiển thị dạng pill đặc màu ember + chữ trắng; các item còn lại giữ dạng pill nhạt như cũ — tạo nhịp thị giác trong chính từng card, không thêm màu mới.
- **Glow góc card**: 1 khối blur tròn màu ember rất nhạt góc trên-phải mỗi card, hơi phóng to khi hover — nhất quán với kỹ thuật aurora đã dùng ở nền toàn trang (mục 7.2d), tạo chiều sâu thay vì nền phẳng.

## 7.2g Addendum v2.6 — đối chiếu lại Skills theo CV thật

Đã có `public/cv/CV_NguyenDucThinh_General.pdf` — đọc trực tiếp mục TECHNICAL SKILLS trong CV và sửa `data/skills.ts` cho khớp 100%, không tự bịa thêm công nghệ nào ngoài CV. Thay đổi chính so với bản trước (bản trước là dữ liệu mẫu, chưa đối chiếu CV):
- **Frontend**: bỏ TailwindCSS (không có trong CV dù site này build bằng Tailwind), thêm đúng theo CV: JavaScript (ES6), Nuxt.js, HTML5/CSS3, SCSS, Ant Design.
- **Backend & Database**: bỏ Node.js (không có trong CV), Oracle APEX chuyển từ nhóm D365 sang đây theo đúng cách CV phân loại, thêm SQL Server, Redis (learning) và Kafka (learning) — 2 công nghệ CV ghi rõ đang tự học qua chính dự án Seckill.
- **D365 & ERP**: đổi thành đúng danh sách CV: Dynamics 365 CE/CRM, Custom Web Resources, Plugins, FetchXML, XrmToolBox (bỏ "System Integration" — không phải tên công nghệ cụ thể).
- **Cloud & DevOps**: bỏ Vercel (không có trong CV), đổi thành Google Cloud, Firebase, Cloudflare, Git, CI/CD.
- **AI Tools**: sai hoàn toàn ở bản trước (Claude Code, GitHub Copilot — không có trong CV) → đổi đúng theo CV: OpenAI API, Google Gemini API, v0.dev, Lovable, Google AI Studio.
- **Design**: nhóm mới, CV có ghi riêng — Figma, Adobe XD, Photoshop, Illustrator, Canva. Bento layout (`Skills.tsx`) cập nhật thêm 1 ô cho nhóm này, icon cọ vẽ mới trong `SkillIcon.tsx`.
- **Project Seckill**: thêm `Kafka` vào tech stack — CV ghi rõ "Java/Spring Boot, Redis, and Kafka" cho đúng dự án này (`data/projects.ts`).

**File CV**: path thật là `public/cv/CV_NguyenDucThinh_General.pdf` (khác tên đã đoán trong plan trước đó) — đã sửa `site.cvUrl` khớp đúng, đã tự kiểm tra link trả về HTTP 200.

## 7.3 Trạng thái bàn giao v2

Đã làm xong theo yêu cầu "Tóm tắt việc cần làm tiếp" trong `PORTFOLIO_REDESIGN_V2.md`: cập nhật PLAN, viết lại toàn bộ copy song ngữ, implement toggle EN/VI, chuẩn bị placeholder ảnh chân dung đúng vị trí, VÀ (theo yêu cầu bổ sung ngoài file v2) cập nhật luôn Feedback section để phân biệt 2 định dạng ảnh thật (recognition card / bulletin). Build, lint, unit test đều xanh (11/11 test pass).

## 7. Phản biện cuối cùng trước khi code

- **Rủi ro trùng look mặc định**: đã kiểm tra ở mục 1 — nền sáng trung tính (không cream, không đen), 2 accent trong đó accent phụ dùng cực hạn chế, structural device (numbered mono label) là kỹ thuật phổ biến trong dev portfolio nhưng không phải 1 trong 3 "look cấm". Chấp nhận được.
- **Rủi ro over-animate**: giới hạn animation ở (a) blink 1 lần của status dot, (b) scroll-reveal fade+translateY nhẹ (opacity/transform only, ~400ms, chạy 1 lần/section khi vào viewport). Không dùng parallax, không hover-tràn-lan.
- **Rủi ro thiếu dữ liệu thật**: đã tách toàn bộ nội dung project/feedback/TikTok ra `data/*.ts` để dễ thay, và mọi ảnh thiếu đều có placeholder rõ ràng + TODO comment, không tự bịa ảnh/link.
- **Kết luận**: plan đủ cụ thể để code. Tiến hành scaffold.
