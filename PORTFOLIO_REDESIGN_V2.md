# REDESIGN NOTES v2 — Addendum cho PORTFOLIO_PRD.md

> File này BỔ SUNG và GHI ĐÈ một số phần của `PORTFOLIO_PRD.md` gốc, dựa trên feedback sau khi xem bản build đầu tiên. Đọc file này SAU khi đã đọc PRD gốc — các mục không nhắc tới ở đây vẫn giữ nguyên theo PRD gốc.

---

## 1. Feedback về bản build hiện tại

Bản hiện tại (chạy ở `localhost:3000/#about`) đang thiên về hướng **"dashboard/terminal"**: label kiểu mã hoá (`01 / INTRO`, `02 / ABOUT`), stat-block (STATUS / EXPERIENCE / STACK / BUILDING NOW), font sans-serif hệ thống + monospace cho label. Vấn đề:

- Cảm giác khô, giống spec sheet/README hơn là 1 trang giới thiệu con người — thiếu yếu tố cá nhân ngay từ hero.
- Không có ảnh cá nhân — người xem không "thấy" được ai đang nói chuyện với họ.
- Ngôn ngữ lẫn lộn: label tiếng Anh (`STATUS`, `EXPERIENCE`) xen với nút bấm tiếng Việt (`XEM PROJECTS`, `TẢI CV`, `LIÊN HỆ`) và mô tả tiếng Việt — không nhất quán, trông thiếu chỉn chu.

## 2. Hướng thiết kế mới — rút ra từ template tham khảo (KHÔNG copy y nguyên)

Template tham khảo (Envato, dạng creative director/photographer) có điểm mạnh: ảnh cá nhân lớn chiếm phần lớn hero, tên hiển thị cỡ chữ khổng lồ, tông màu ấm làm điểm nhấn. Tuy nhiên đây là template chung chung cho ngành sáng tạo (ảnh phong cảnh + "Hi, I'm X" overlay) — bản thân nó cũng là 1 "default look" của thị trường template, không nên copy y nguyên bố cục overlay-text-trên-ảnh (dễ vướng vấn đề contrast/đọc khó, và không đặc trưng cho 1 developer).

**Áp dụng có chọn lọc — hướng mới cho hero:**
- Bố cục **split layout**: 1 bên là ảnh chân dung thật (đã có, sẽ cung cấp), 1 bên là tên + intro + CTA — không overlay chữ lên ảnh, đảm bảo đọc rõ và tách bạch 2 khối thị giác.
- Tên vẫn giữ cỡ chữ lớn, đậm — nhưng đổi sang 1 font display có cá tính hơn (xem mục 3), không dùng font hệ thống mặc định.
- Thêm 1 màu accent ấm (cam/vàng đất hoặc màu khác có chủ đích — Claude Code tự đề xuất và giải thích lý do chọn trong `PLAN.md`, không chọn ngẫu nhiên), dùng có kiểm soát (1 màu, không lạm dụng).
- Phần thông tin nhanh (status/experience/stack) vẫn giữ lại vì hữu ích, nhưng thu nhỏ lại thành yếu tố phụ (caption nhỏ dưới intro, hoặc badge ngắn) — không làm thành khối bảng chiếm nửa màn hình như hiện tại.

## 3. Font — đổi lại theo hướng có cá tính hơn

- Font hiện tại: sans-serif hệ thống mặc định + monospace cho label → quá "an toàn", không có điểm nhận diện riêng.
- Yêu cầu: chọn 1 cặp font mới — 1 display face có cá tính (dùng cho tên + heading, có thể là serif tương phản cao, hoặc sans-serif có nét riêng — Claude Code tự chọn dựa trên research mục 3.1 của PRD gốc) + 1 body face dễ đọc, khác hẳn font hệ thống mặc định của trình duyệt/Tailwind.
- Ghi rõ trong `PLAN.md`: chọn font gì, lý do chọn (không chỉ vì "đẹp" mà vì phù hợp cá tính "dev đang chuyển mình, tự học, chỉn chu").

## 4. Wording — viết lại toàn bộ copy

- Bỏ giọng "stat block" khô cứng (`STATUS: ONLINE — OPEN TO WORK`) làm phần chính — chuyển thành giọng văn tự nhiên hơn, vẫn ngắn gọn nhưng có "người" hơn.
- Rewrite hero intro: giữ ý chính (5+ năm kinh nghiệm enterprise system, tự học Spring Boot để khép kín full-stack) nhưng viết lại tự nhiên, tránh câu ghép cứng nhắc.
- Rà soát toàn bộ trang, không chỉ hero — áp dụng nguyên tắc viết trong PRD gốc mục 3 (design principles): copy phải giúp người đọc hiểu nhanh, không phải để "nghe cho oai".

## 5. Ngôn ngữ — Bilingual EN/VI (thay đổi so với PRD gốc)

PRD gốc ghi "không cần i18n" ở bản đầu — **cập nhật: cần hỗ trợ 2 ngôn ngữ (English/Tiếng Việt)** với nút toggle chuyển đổi (góc header, ví dụ "EN / VI").

**Cách làm đơn giản, không cần thư viện i18n nặng:**
- Tạo 1 file `data/content.ts` chứa object `{ en: {...}, vi: {...} }` cho toàn bộ text trong trang.
- Dùng React Context hoặc state đơn giản ở layout để lưu ngôn ngữ đang chọn, toggle client-side — không cần routing riêng `/en` `/vi` (đơn giản hơn, đủ dùng cho quy mô 1 trang).
- Mặc định: English (đối tượng xem đa số là recruiter, kể cả VN lẫn SG, English là mẫu số chung an toàn nhất).
- Toàn bộ label/nút bấm phải nhất quán theo ngôn ngữ đang chọn — không còn tình trạng lẫn lộn như bản hiện tại.

## 6. Ảnh chân dung — bổ sung vào checklist ảnh còn thiếu

- Sẽ cung cấp ảnh chân dung cá nhân cho hero (thay thế hoàn toàn hướng "không cần ảnh lớn" trước đó).
- Claude Code: chuẩn bị sẵn vị trí `public/images/profile/portrait.jpg` (hoặc .png/.webp), component nhận ảnh này làm 1 khối riêng trong split-layout hero (mục 2), để placeholder xám cho tới khi ảnh thật được thêm vào.
- Cập nhật checklist "Thông tin còn thiếu" trong PRD gốc: ảnh chân dung → chuyển từ "chưa cần" thành "sẽ cung cấp, cần placeholder đúng vị trí, đúng tỷ lệ khung hình (đề xuất 4:5 hoặc 1:1, Claude Code chọn tỷ lệ phù hợp bố cục split-layout)".

---

## Tóm tắt việc Claude Code cần làm tiếp

1. Cập nhật `PLAN.md`: bổ sung phần bilingual content structure, font mới (kèm lý do), color accent mới (kèm lý do), bố cục hero split-layout với ảnh chân dung.
2. Viết lại toàn bộ copy (không chỉ hero) theo tinh thần mục 4.
3. Implement toggle EN/VI đơn giản (Context + object, không cần next-intl hay thư viện nặng).
4. Chuẩn bị placeholder ảnh chân dung đúng vị trí trong hero.
5. Sau khi xong, show lại cho tôi xem bản mới trước khi đi tiếp các section còn lại (Projects/Feedback/TikTok) — tránh việc làm hết toàn bộ trang rồi mới phát hiện hướng thiết kế chưa đúng ý, giống lần này.