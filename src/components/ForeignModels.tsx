import React from 'react';

const ForeignModels: React.FC = () => {
  return (
    <section id="foreign" className="section-container foreign-section dark-alt">
      <h2 className="section-title">Зарубежные Нейросети</h2>
      <div className="content-grid two-cols reversed">
        <div className="text-content">
          <h3>Мировые Лидеры ИИ</h3>
          <p>Мощные модели для глубокой работы с английским языком, генерации текстов, аудио и визуальных материалов.</p>
          <div className="card-grid">
            <div className="model-card glass-panel">
              <h4>ChatGPT & Claude</h4>
              <p>Отлично справляются с генерацией планов уроков, тестов и объяснением сложной грамматики.</p>
            </div>
            <div className="model-card glass-panel">
              <h4>Gemini & Perplexity</h4>
              <p>Идеальны для поиска свежей информации с ссылками на источники и анализа актуальных статей.</p>
            </div>
            <div className="model-card glass-panel">
              <h4>Character.ai</h4>
              <p>Ролевые боты для тренировки speaking. Создайте бота-селебрити или персонажа для диалога.</p>
            </div>
            <div className="model-card glass-panel">
              <h4>Midjourney & DALL-E</h4>
              <p>Генерация уникальных Flashcards и иллюстраций без авторских прав.</p>
            </div>
          </div>
        </div>
        <div className="image-wrapper">
          <img 
            src="/english-tips/foreign_anime_models_1774356744289.png" 
            alt="Студенты общаются с ИИ" 
            className="rounded-image glow-blue"
          />
        </div>
      </div>
    </section>
  );
};

export default ForeignModels;
