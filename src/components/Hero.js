import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Chào mừng Quý khách đến với Bảo Hiểm Tốt!</h1>
        <p>Chúng tôi giúp người Việt yên tâm nắm bắt hiện tại, vững tin theo đuổi tương lai.</p>
        <a href="#register" className="cta-button">Nhận tư vấn từ chuyên gia</a>
      </div>
      <div className="hero-image">
        <img src="/happyfamily.jpg" alt="Gia đình hạnh phúc" />
      </div>
    </section>
  );
}

export default Hero;