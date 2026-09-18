# S-Insight Showcase

**TH:** เว็บโชว์ผลงานระบบภายในที่ทำให้องค์กร สร้างด้วย React
**EN:** A showcase site for the internal systems I built at work, made with React.

`React 19` · `Vite 7` · `Tailwind CSS 4` · `JavaScript`

---

## 🇹🇭 ภาษาไทย

### ทำไว้ทำไม

ระบบภายในที่ทำมาหลายตัวไม่มีใครเห็นนอกจากคนในบริษัท เวลาจะเล่าให้คนอื่นฟังว่าทำอะไรไปบ้างก็เล่ายาก เลยทำหน้าเว็บรวมไว้ กดดูรายละเอียดแต่ละโปรเจคได้

### โครงสร้าง

```
src/
├── App.jsx          → โครงหลักของหน้า
├── Header.jsx       → ส่วนหัว
├── ProjectList.jsx  → แสดงรายการโปรเจคทั้งหมด
├── ProjectCard.jsx  → การ์ดของแต่ละโปรเจค
├── ProjectModal.jsx → ป๊อปอัปดูรายละเอียด
├── Footer.jsx       → ส่วนท้าย
└── projects.js      → ข้อมูลโปรเจคทั้งหมด (แก้ที่นี่ที่เดียว)
```

ข้อมูลโปรเจคแยกออกมาไว้ใน `projects.js` ตัวเดียว เพิ่มโปรเจคใหม่ไม่ต้องแตะ component

### รัน

```bash
npm install
npm run dev     # โหมดพัฒนา
npm run build   # build ขึ้น production
```

---

## 🇬🇧 English

### Why it exists

The internal systems I've built aren't visible to anyone outside the company, which makes them hard to talk about. This site collects them in one place, with a detail view for each.

### Structure

```
src/
├── App.jsx          → page shell
├── Header.jsx
├── ProjectList.jsx  → renders every project
├── ProjectCard.jsx  → a single project card
├── ProjectModal.jsx → detail popup
├── Footer.jsx
└── projects.js      → all project data, in one place
```

Project data lives entirely in `projects.js`, so adding a project never means touching a component.

### Running it

```bash
npm install
npm run dev
npm run build
```
