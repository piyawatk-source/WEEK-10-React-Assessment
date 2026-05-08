My Understanding - React Assessment

ภาพรวม Project
React Web Application ทำเพื่อสำหรับจัดการข้อมูลสมาชิก โดยแบ่งเป็น 2 ส่วน คือ User Section และ Admin Section

- User Section (ดูข้อมูล)
- Admin Section (เพิ่ม/ลบข้อมูล)
  โดยเชื่อมกับ Mock API ด้วย fetch()

---

1. การแบ่ง Components
   ตามความเข้าใจ คือการแบ่งตาม หน้าที่ของแต่ละหน้า จุดประสงค์เพื่อให้แต่ละ Components นั้นทำหน้าที่ของตัวเองอย่างชัดเจน ง่ายต่อการแก้ไข :

- Navbar - เมนูด้านบน แยกออกมาเพราะใช้ทุกหน้า
- Home - หน้าแรกของเว็บ
- UserSection - หน้าดูข้อมูลสมาชิก
- AdminSection - หน้าจัดการสมาชิก
- Owner - หน้าโปรไฟล์เจ้าของ

---

2. State Variables ที่ใช้

- UserSection
  => members (array) - เก็บรายชื่อจาก API
  => loading (boolean) - บอกว่ากำลังโหลดข้อมูลอยู่ไหม

- AdminSection
  => members (array) - รายชื่อในตาราง
  => name, lastName, position (string) - ค่าใน input ฟอร์ม

ใช้ useState เพราะเมื่อค่าเปลี่ยน React จะ render ใหม่ให้อัตโนมัติ
ถ้าใช้ตัวแปรปกติ (let) หน้าจอจะไม่อัปเดต

---

3. Props vs Context
   ใช้ Local State (useState ในแต่ละ component) ไม่ใช้ Props หรือ Context

เหตุผล: UserSection และ AdminSection อยู่คนละหน้ากัน (คนละ route)
ไม่ต้อง share state ระหว่างกัน แต่ละหน้า fetch ข้อมูลใหม่จาก API เอง

ถ้าจะใช้ Context เหมาะกรณีที่ต้องการ share ข้อมูลระหว่างหน้า
เช่น login user, theme

---

## AI Use Reflection: 5

ผมใช้ AI ในการสอนวิธีเขียนเกือบทั้งหมด และได้ทดลองเขียนเอง แต่ไม่สามารถทำได้ ผมเพียงแค่เข้าใจ concept บางแนวคิดเท่านั้น จึงเป็นการเสร็จงานแบบ vibe code เกือบ 100% และให้ช่วยอธิบายแนวคิด React (useState, useEffect, async/await) และดูตัวอย่างโค้ดเพื่อเข้าใจ structure
