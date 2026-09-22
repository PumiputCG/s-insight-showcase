# S-Insight Showcase

## S-Insight Showcase คืออะไร / About

เว็บรวมระบบภายในที่ผมพัฒนาไว้ในหน้าเดียว แสดงแต่ละระบบเป็นการ์ด กดดูรายละเอียดได้ และมีลิงก์เข้าไปใช้งานระบบจริงได้ทันที

A single page that brings together the internal systems I built. Each system appears as a card with a detail view and a link straight into the live system.

## ทำอะไรได้บ้าง / Features

- แสดงทุกระบบเป็นการ์ดในหน้าเดียว
- กดการ์ดเพื่อเปิดรายละเอียดของแต่ละระบบ
- มีลิงก์เข้าไปใช้งานระบบจริง
- ข้อมูลทุกระบบอยู่ในไฟล์ `projects.js` ไฟล์เดียว เพิ่มระบบใหม่ได้โดยไม่ต้องแก้ component

* Every system shown as a card on one page
* A detail view for each system
* Links into each live system
* All project data lives in a single `projects.js` file, so adding a system needs no component changes

## Tech Stack

**Frontend:** React 19, JavaScript, Vite, Tailwind CSS, Lucide, AOS

## ติดตั้ง / Installation

ต้องมี Node.js 18 ขึ้นไป ตัวแอปอยู่ในโฟลเดอร์ย่อยที่มีไฟล์ `package.json` ให้เข้าไปในโฟลเดอร์นั้นก่อน แล้วรันคำสั่งด้านล่าง จากนั้นเปิดลิงก์ที่ Vite แสดงในหน้าจอ

Requires Node.js 18+. The app sits in the subfolder that contains `package.json`. Move into that folder first, run the commands below, then open the link Vite prints.

```bash
npm install
npm run dev
```
