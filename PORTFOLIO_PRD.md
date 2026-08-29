# PRD — Personal Portfolio Website (Nguyen Duc Thinh)

> Đưa nguyên file này cho Claude Code làm brief khởi động. Yêu cầu Claude Code: đọc hết file → viết `PLAN.md` (thiết kế + kiến trúc + task breakdown) → tự phản biện lại plan đó → rồi mới code → viết unit test → build/verify. Không code trước khi có plan được duyệt.

---

## 1. Mục tiêu & phi mục tiêu

**Mục tiêu:** Portfolio cá nhân chuẩn UX/UI thật sự (không phải trang "để có cho có"), dùng để gửi kèm CV khi apply Full-stack Developer — phải tạo được ấn tượng thị giác ngay từ giây đầu, vì đây cũng là bằng chứng sống về gu thẩm mỹ/kỹ năng frontend của tôi.

**Phi mục tiêu (không làm ở bản đầu):** blog/CMS, dark mode, animation phức tạp, contact form có backend (mailto link là đủ), i18n đa ngôn ngữ.

---

## 2. Tech stack

- Next.js (App Router) + TypeScript
- TailwindCSS — nhưng **không dùng theme mặc định** (xem mục 3)
- Deploy: Vercel, auto CI/CD từ GitHub
- Ảnh: lưu local trong `public/images/...`, import trực tiếp bằng `next/image`, **không dùng cloud storage/CDN ngoài** (không Cloudinary, không S3) — giữ đơn giản, ảnh đi kèm luôn trong repo.

---

## 3. Yêu cầu thiết kế (quan trọng nhất — đọc kỹ trước khi code)

### 3.1 Bắt buộc: research trước khi thiết kế
Trước khi viết bất kỳ dòng CSS/component nào, hãy:
1. Liệt kê 4-6 portfolio developer được đánh giá cao về UI/UX (ví dụ tham khảo: brittanychiang.com, leerob.io, rauno.me, tobiasahlin.com, hoặc các portfolio đoạt giải trên Awwwards/Godly.website dạng "developer portfolio") — phân tích ngắn gọn: họ dùng type pairing gì, bảng màu gì, bố cục hero ra sao, structural device gì (numbering, dividers...).
2. Từ đó rút ra 1 hướng thiết kế **riêng cho tôi** — không copy nguyên 1 style nào, không rơi vào 3 "look mặc định của AI" sau (tự kiểm tra chéo, tránh né):
   - Nền cream/be (#F4F1EA) + serif tương phản cao + accent màu đất nung/cam gạch
   - Nền gần đen + 1 màu accent xanh lá chói hoặc đỏ tươi duy nhất
   - Bố cục kiểu báo in, hairline rules, bo góc = 0, cột dày đặc kiểu newspaper

### 3.2 Design token system — viết ra trước, code sau
Trong `PLAN.md`, định nghĩa rõ:
- **Color**: 4-6 mã hex có tên gọi (không dùng tên biến kiểu `primary-500` chung chung của Tailwind mặc định — đặt tên theo ý nghĩa, ví dụ `ink`, `signal`, `paper`...)
- **Type**: tối thiểu 2 font family khác nhau (display face dùng có chừng mực + body face dễ đọc), khai báo rõ type scale (kích thước, weight, line-height cho H1/H2/H3/body/caption)
- **Layout**: mô tả bố cục bằng ASCII wireframe cho từng section chính (Hero, Projects, Feedback...)
- **Signature element**: 1 chi tiết/thành phần riêng biệt, đại diện cho cá tính trang này — không phải hiệu ứng trang trí tràn lan, mà 1 điểm nhấn duy nhất được đầu tư kỹ

Sau khi viết token system, tự phản biện lại: "Nếu tôi làm 1 prompt tương tự cho brief khác, tôi có ra kết quả y hệt thế này không?" — nếu có, chỉnh lại cho đặc trưng hơn với nội dung thật của tôi (dev full-stack, đang học Java/Spring Boot, có kênh TikTok dạy code).

### 3.3 Quality floor (bắt buộc, không thương lượng)
- Responsive đầy đủ xuống tới mobile (375px)
- Focus state rõ ràng cho keyboard navigation
- Tôn trọng `prefers-reduced-motion`
- Animation nếu có: đúng lúc, có chủ đích (page-load 1 lần hoặc scroll-reveal nhẹ) — không hiệu ứng rải rác khắp nơi gây cảm giác "AI làm"

---

## 4. Kiến trúc thông tin — các mục bắt buộc phải có

### 4.1 Hero / Giới thiệu
- Tên, title: "Full-stack Developer"
- 1 dòng thesis statement — không phải câu chung chung kiểu "I'm a passionate developer..."
- CTA: xem Projects / Tải CV / Liên hệ

### 4.2 Background (About)
- Dựa theo Career Objective thật: 5+ năm kinh nghiệm, mạnh Frontend (Next.js/React/Vue) + System Integration (D365, Oracle APEX/PL-SQL), đang chủ động học sâu Java/Spring Boot qua dự án cá nhân.
- Có thể thêm timeline ngắn: JV-IT Techs (2020-2022) → VUS (2022-nay).

### 4.3 Skills
- Nhóm theo category giống CV: Frontend / Backend & Database / D365 & ERP / Cloud & DevOps / AI Tools.

### 4.4 Personal Projects — cần ảnh, raise rõ cho tôi
Hiển thị các dự án cá nhân đã làm. Với mỗi project, Claude Code cần:
- Mô tả ngắn (vấn đề giải quyết, tech stack, kết quả/insight)
- Link GitHub repo nếu public được
- Ảnh screenshot/demo — vì tôi chưa cung cấp, Claude Code cần: (a) tạo placeholder rõ ràng trong code (component nhận prop `imageSrc`, để trống kèm comment `// TODO: cần ảnh screenshot của [tên project]`), và (b) liệt kê ra 1 checklist cuối `PLAN.md` ghi rõ: "Cần ảnh: 1. Seckill project — screenshot terminal/kiến trúc/benchmark; 2. [project cá nhân khác — tôi sẽ điền tên sau]"

> Danh sách project cụ thể tôi sẽ điền vào `PLAN.md` hoặc issue riêng — Claude Code cứ scaffold section này với dữ liệu mẫu (mock data) trước, cấu trúc code phải dễ thay data thật vào sau (tách riêng 1 file `data/projects.ts` chẳng hạn).

### 4.5 Company Feedback / Testimonials — cần ảnh, raise rõ cho tôi
- Feedback thật lấy từ hệ thống nội bộ Aspiration (do chính tôi build tại VUS) — sẽ là dạng ảnh chụp màn hình feedback đó (không phải text thuần), nên component cần hiển thị được ảnh (không chỉ quote text).
- Claude Code: tạo component nhận `imageSrc` cho từng feedback card, để placeholder + TODO note y như mục 4.4, liệt kê vào checklist cuối `PLAN.md`: "Cần ảnh: 2-3 screenshot feedback từ Aspiration — tôi sẽ tự chọn và cung cấp sau."
- Layout gợi ý: dạng carousel hoặc grid card, mỗi card = 1 ảnh screenshot + có thể thêm caption ngắn (tên người feedback nếu muốn public, hoặc "Colleague at VUS" nếu ẩn danh).

### 4.6 TikTok Channel (kênh dạy/dựng nội dung code)
- 1 section riêng giới thiệu kênh TikTok về code — cần: tên kênh/handle, link, mô tả ngắn ("Kênh chia sẻ về lập trình/code"), và có thể nhúng 1-2 video tiêu biểu (TikTok hỗ trợ oEmbed — Claude Code có thể dùng `<blockquote class="tiktok-embed">` chính thức của TikTok, không cần build player riêng).
- Cần tôi cung cấp: handle/link kênh TikTok + link 1-2 video muốn nhúng — Claude Code note rõ trong checklist TODO.

### 4.7 Contact / Footer
- Email, WhatsApp (link `wa.me`), GitHub, nút tải CV (link file tĩnh trong `public/` hoặc link Drive).
- Không cần form liên hệ có backend — `mailto:` link là đủ.

---

## 5. Xử lý ảnh (local, không cloud)

- Tất cả ảnh (project screenshots, feedback screenshots) lưu trong `public/images/projects/` và `public/images/feedback/`.
- Dùng `next/image` cho tối ưu tự động (lazy load, resize) — không cần dịch vụ cloud nào khác.
- Vì ảnh thật CHƯA có, Claude Code phải:
  1. Tạo cấu trúc thư mục sẵn (`public/images/projects/.gitkeep`, `public/images/feedback/.gitkeep`)
  2. Dùng placeholder màu xám (không gọi API/service ngoài) cho tới khi có ảnh thật
  3. Ghi rõ trong `PLAN.md` một checklist "Assets cần bổ sung" liệt kê chính xác file nào cần thay, kích thước khuyến nghị (ví dụ 1200x800 cho project screenshot)

---

## 6. Testing & quy trình bàn giao

1. **Viết `PLAN.md` trước** — gồm: design token system (mục 3.2), sitemap/wireframe, task breakdown, checklist ảnh còn thiếu (mục 4.4/4.5/4.6), danh sách câu hỏi/thông tin còn cần tôi cung cấp.
2. **Tự phản biện plan** theo đúng câu hỏi ở mục 3.2 trước khi code.
3. **Scaffold code** theo plan đã chốt.
4. **Unit test**: dùng Vitest/Jest + React Testing Library cho các component chính (Hero, ProjectCard, FeedbackCard, Nav) — test render đúng props, không cần test chi tiết animation/style.
5. **Build & verify**: chạy `npm run build` đảm bảo không lỗi, chạy `npm run dev` để tự kiểm tra các breakpoint chính (mobile/tablet/desktop) nếu môi trường hỗ trợ.
6. Sau khi xong, liệt kê rõ: (a) checklist ảnh/link tôi cần cung cấp, (b) hướng dẫn ngắn cách thay data mẫu ở `data/projects.ts` bằng data thật.

---

## 7. Thông tin có sẵn (dùng ngay, không cần hỏi lại)

- Tên: Nguyen Duc Thinh — Title: Full-stack Developer
- Location: Ho Chi Minh City, Vietnam (open to remote / Singapore relocation)
- Email: ducthinh120199@gmail.com
- GitHub: https://github.com/ducthinh120199
- WhatsApp: +84 792 844 082 (VN) / +84 865 541 926 (khi ở Singapore)
- Career background: xem mục 4.2

## 8. Thông tin còn thiếu — Claude Code liệt kê thành checklist, KHÔNG tự bịa

- [ ] Tên + mô tả các project cá nhân (ngoài dự án seckill Java đang làm)
- [ ] Screenshot/ảnh demo cho từng project cá nhân
- [ ] 2-3 ảnh screenshot feedback từ hệ thống Aspiration
- [ ] Handle/link kênh TikTok + link video muốn nhúng
- [ ] Link file CV (Drive) để gắn nút "Download CV"
