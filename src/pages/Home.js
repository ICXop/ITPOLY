import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h1>
      <p>
        สาขาเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา มุ่งมั่นพัฒนานักศึกษาให้มีความรู้ความสามารถด้านเทคโนโลยี พร้อมรับมือกับโลกดิจิทัลในปัจจุบัน
      </p>

      <div className="department-details">
        <h2>เกี่ยวกับสาขา</h2>
        <p>
          หลักสูตรของเรามุ่งเน้นการเรียนรู้ที่ผสมผสานทั้งทฤษฎีและปฏิบัติ ครอบคลุมหัวข้อด้านการเขียนโปรแกรม เครือข่าย การพัฒนาเว็บไซต์ และความปลอดภัยทางไซเบอร์ พร้อมเตรียมนักศึกษาเข้าสู่ตลาดแรงงานที่มีการเปลี่ยนแปลงอย่างรวดเร็ว
        </p>
      </div>

      <div className="activities">
        <h2>กิจกรรมล่าสุด</h2>
        <div className="grid">
          {/* การ์ดกิจกรรม 1 */}
          <div className="card">
            <img src="/images/activity1.jpg" alt="กิจกรรม 1" className="card-img" />
            <h3>เวิร์กช็อป: พื้นฐาน AI</h3>
            <p>เรียนรู้พื้นฐานของปัญญาประดิษฐ์และการเรียนรู้ของเครื่องผ่านการลงมือปฏิบัติจริง</p>
          </div>

          {/* การ์ดกิจกรรม 2 */}
          <div className="card">
            <img src="/images/activity2.jpg" alt="กิจกรรม 2" className="card-img" />
            <h3>บูทแคมป์พัฒนาเว็บไซต์</h3>
            <p>สร้างเว็บไซต์แรกของคุณด้วย HTML, CSS และ JavaScript</p>
          </div>

          {/* การ์ดกิจกรรม 3 */}
          <div className="card">
            <img src="/images/activity3.jpg" alt="กิจกรรม 3" className="card-img" />
            <h3>การตระหนักรู้ด้านความปลอดภัยไซเบอร์</h3>
            <p>เรียนรู้วิธีการป้องกันข้อมูลและรักษาความปลอดภัยบนโลกออนไลน์</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
