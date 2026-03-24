import React from 'react';

const RussianModels: React.FC = () => {
  return (
    <section id="russian" className="section-container russian-section">
      <h2 className="section-title">Российские Нейросети</h2>
      <div className="content-grid two-cols">
        <div className="image-wrapper">
          <img 
            src="/english-tips/russian_anime_models_1774356760741.png" 
            alt="Студент использует российский ИИ" 
            className="rounded-image glow-purple"
          />
        </div>
        <div className="text-content">
          <h3>Текстовые и Визуальные Решения</h3>
          <p>Отечественные ИИ, доступные без VPN, которые отлично справляются с подготовкой базовых заданий и переводами.</p>
          <ul className="feature-list">
            <li><span className="icon">🇷🇺</span> <strong>YandexGPT & GigaChat:</strong> Создание глоссариев, быстрый и точный перевод сложных текстов, генерация идей для warm-up.</li>
            <li><span className="icon">🎨</span> <strong>Kandinsky & Шедеврум:</strong> Бесплатная генерация визуального контента на русском. Отличная альтернатива Midjourney.</li>
            <li><span className="icon">🛡️</span> <strong>Без барьеров:</strong> Идеально для образовательных учреждений, где доступ к западным сервисам ограничен.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RussianModels;
