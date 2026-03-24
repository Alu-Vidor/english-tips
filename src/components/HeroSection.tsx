import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section glass-panel">
      <div className="hero-content">
        <h1 className="hero-title">ИИ для Преподавателей ИЯ</h1>
        <p className="hero-subtitle">
          Откройте новую эпоху в образовании! Создавайте потрясающие уроки, генерируйте интерактивные задания и экономьте часы на подготовке с помощью современных нейросетей.
        </p>
        <div className="hero-actions">
          <a href="#prompting" className="btn-primary">Начать Погружение</a>
        </div>
      </div>
      <div className="hero-image-container">
        <img 
          src="/english-tips/hero_anime_teacher_1774356712870.png" 
          alt="Учитель будущего с ИИ" 
          className="hero-image floating-anim" 
        />
        <div className="glow-effect"></div>
      </div>
    </section>
  );
};

export default HeroSection;
