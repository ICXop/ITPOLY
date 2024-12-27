import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // เคลียร์ข้อความเตือนเมื่อผู้ใช้พิมพ์ข้อมูล
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "กรุณากรอกชื่อของคุณ";
    }
    if (!formData.email.trim()) {
      newErrors.email = "กรุณากรอกอีเมลของคุณ";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "กรุณากรอกอีเมลให้ถูกต้อง";
    }
    if (!formData.message.trim()) {
      newErrors.message = "กรุณากรอกข้อความของคุณ";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("ส่งข้อความเรียบร้อยแล้ว!");
      setFormData({ name: "", email: "", message: "" }); // รีเซ็ตฟอร์ม
    }
  };

  return (
    <div className="contact">
      <h1>ติดต่อเรา</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ชื่อ</label>
          <input
            type="text"
            name="name"
            placeholder="ชื่อของคุณ"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>อีเมล</label>
          <input
            type="email"
            name="email"
            placeholder="อีเมลของคุณ"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>ข้อความ</label>
          <textarea
            name="message"
            placeholder="ข้อความของคุณ"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit" className="btn">
          ส่งข้อความ
        </button>
      </form>
      <div className="map">
        <iframe
          title="แผนที่ Google"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.480409056795!2d99.00593867540793!3d18.796859987159023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3177f6e8efcd%3A0xe7b9e12a2b32b41c!2z4Lit4Liy4LiE4Lij4Liw4Lih4LiB4LmJ4LiX4Lie4LijIOC4peC4o-C4seC4iuC4ouC4teC4o-C5jOC5hOC4oeC4reC5gOC4reC4meC4o-C5jCDguJ7guITguKrguLLguKPguKfguJnguJnguKPguLUg4Lia4LiU4Liy4LiY4Li04Lih4LmA4Lig4Lit4LiH4LmJ4Liy4LiZ!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
