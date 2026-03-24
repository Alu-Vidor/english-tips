import React from 'react';

const foreignTools = [
  {
    title: 'ChatGPT',
    purpose: 'Универсальный ассистент для планов урока, рабочих листов, адаптации инструкций и обратной связи.',
  },
  {
    title: 'Claude',
    purpose: 'Особенно удобен для работы с длинными материалами: статьями, эссе, транскриптами и методическими документами.',
  },
  {
    title: 'Gemini',
    purpose: 'Полезен для интеграции с экосистемой Google и генерации учебных материалов на основе документов и заметок.',
  },
  {
    title: 'Perplexity',
    purpose: 'Подходит для поиска актуальных источников, сопоставления материалов и быстрого библиографического ориентирования.',
  },
  {
    title: 'DALL·E и Midjourney',
    purpose: 'Генерируют визуальные опоры: карточки, сцены для speaking, иллюстрации к лексическим темам и story prompts.',
  },
  {
    title: 'ElevenLabs и аналоги TTS',
    purpose: 'Позволяют создавать аудиофрагменты для listening, интонационных упражнений и фонетических разминок.',
  },
];

const ForeignModels: React.FC = () => {
  return (
    <section id="foreign" className="section-container foreign-section dark-alt">
      <h2 className="section-title">Зарубежные нейросети</h2>
      <div className="content-grid two-cols reversed">
        <div className="text-content">
          <h3>Когда выбирать международные инструменты</h3>
          <p>
            Зарубежные модели полезны в тех случаях, когда преподавателю нужны
            развитые диалоговые сценарии, гибкая работа с жанрами текста,
            качественная стилистическая правка английского и более широкая
            экосистема мультимодальных возможностей.
          </p>
          <div className="card-grid">
            {foreignTools.map((tool) => (
              <div key={tool.title} className="model-card glass-panel">
                <h4>{tool.title}</h4>
                <p>{tool.purpose}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="image-wrapper">
          <img
            src="/english-tips/foreign_anime_models_1774356744289.png"
            alt="Использование зарубежных ИИ-моделей в языковом обучении"
            className="rounded-image glow-blue"
          />
        </div>
      </div>

      <div className="info-panel glass-panel">
        <h3>Критерии отбора модели для учебной задачи</h3>
        <div className="info-grid">
          <div className="info-card">
            <h4>Точность языка</h4>
            <p>
              Для редактирования писем, эссе и speaking prompts выбирайте модели,
              которые устойчиво удерживают регистр, жанр и уровень формальности.
            </p>
          </div>
          <div className="info-card">
            <h4>Работа с длинным контекстом</h4>
            <p>
              Для анализа статей, сценариев видео и методических пособий удобны
              модели, способные удерживать большой объем исходного материала.
            </p>
          </div>
          <div className="info-card">
            <h4>Наличие ссылок</h4>
            <p>
              Для исследовательских и академических задач полезны инструменты,
              которые сразу показывают источники и сокращают время проверки.
            </p>
          </div>
          <div className="info-card">
            <h4>Мультимодальность</h4>
            <p>
              Если урок строится на изображениях, аудио и документах, ценность
              модели определяется не только качеством текста, но и широтой
              форматов ввода и вывода.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForeignModels;
