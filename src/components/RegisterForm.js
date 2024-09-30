import React, { useState } from 'react';
import '../styles/RegisterForm.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi dữ liệu
    alert(`Tên: ${name}, SĐT: ${phone}, Email: ${email}`);
  };

  return (
    <section className="register-form">
      <h2>Đăng ký nhận tư vấn</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Họ và Tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Đăng ký</button>
      </form>
    </section>
  );
};

export default RegisterForm;
