import React from "react";

const Courses = () => {
  return (
    <div className="courses">
      <h1>หลักสูตรของเรา</h1>
      <div className="grid">
        {/* การ์ดหลักสูตรที่ 1 */}
        <div className="card">
          <h2>โปรแกรม IT ระดับมัธยมศึกษา</h2>
          <p>
            เรียนรู้ทักษะพื้นฐานด้าน IT แนวคิดการเขียนโปรแกรมเบื้องต้น และเตรียมความพร้อมสำหรับอาชีพในสาย IT
          </p>
          {/* ลิงก์เพื่อดูไฟล์ PDF */}
          <a href="31903v3.pdf">
            ดูไฟล์ PDF
          </a>
        </div>

        {/* การ์ดหลักสูตรที่ 2 */}
        <div className="card">
          <h2>การพัฒนาเว็บไซต์ขั้นสูง</h2>
          <p>
            ศึกษาเชิงลึกเกี่ยวกับการสร้างเว็บแอปพลิเคชันแบบไดนามิก การใช้งาน API และการจัดการฐานข้อมูล
          </p>
          {/* ลิงก์เพื่อดูไฟล์ PDF */}
          <a href="/path/to/your/pdf/course2.pdf" target="_blank" rel="noopener noreferrer">
            ดูไฟล์ PDF
          </a>
        </div>

        {/* การ์ดหลักสูตรที่ 3 */}
        <div className="card">
          <h2>พื้นฐานความปลอดภัยไซเบอร์</h2>
          <p>
            เรียนรู้การปฏิบัติด้านความปลอดภัยไซเบอร์ที่จำเป็น การบริหารจัดการความเสี่ยง และวิธีป้องกันข้อมูลจากภัยคุกคาม
          </p>
          {/* ลิงก์เพื่อดูไฟล์ PDF */}
          <a href="/path/to/your/pdf/course3.pdf" target="_blank" rel="noopener noreferrer">
            ดูไฟล์ PDF
          </a>
        </div>

        {/* การ์ดหลักสูตรที่ 4 */}
        <div className="card">
          <h2>พื้นฐานความปลอดภัยไซเบอร์</h2>
          <p>
            เรียนรู้การปฏิบัติด้านความปลอดภัยไซเบอร์ที่จำเป็น การบริหารจัดการความเสี่ยง และวิธีป้องกันข้อมูลจากภัยคุกคาม
          </p>
          {/* ลิงก์เพื่อดูไฟล์ PDF */}
          <a href="/path/to/your/pdf/course3.pdf" target="_blank" rel="noopener noreferrer">
            ดูไฟล์ PDF
          </a>
        </div>

      </div>
    </div>
  );
};

export default Courses;
