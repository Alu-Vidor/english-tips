import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section glass-panel">
      <div className="hero-content">
        <p className="eyebrow">Методический навигатор</p>
        <h1 className="hero-title">ИИ для преподавателей английского языка</h1>
        <p className="hero-subtitle">
          Этот ресурс помогает встроить нейросети в учебный процесс
          академично, осмысленно и безопасно: от проектирования промптов до
          отбора сервисов, сценариев урока, речевой практики и оценивания.
        </p>
        <div className="hero-highlights">
          <div className="highlight-card">
            <strong>Практическая цель</strong>
            <span>
              Сократить время подготовки материалов без снижения качества
              методического решения.
            </span>
          </div>
          <div className="highlight-card">
            <strong>Педагогический фокус</strong>
            <span>
              Сохранять контроль преподавателя над уровнем CEFR, жанром задания
              и учебным результатом.
            </span>
          </div>
          <div className="highlight-card">
            <strong>Рабочий принцип</strong>
            <span>
              Использовать ИИ как ассистента по проектированию, адаптации и
              вариативности контента.
            </span>
          </div>
        </div>
        <div className="hero-actions">
          <a href="#tabs" className="btn-primary">
            Открыть рабочие вкладки
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <img
          src="/english-tips/hero_anime_teacher_1774356712870.png"
          alt="Преподаватель английского языка использует ИИ-инструменты"
          className="hero-image floating-anim"
        />
        <div className="glow-effect"></div>
      </div>
    </section>
  );
};

export default HeroSection;
