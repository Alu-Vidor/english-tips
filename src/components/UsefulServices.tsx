import React from 'react';

const UsefulServices: React.FC = () => {
  return (
    <section id="services" className="section-container services-section">
      <h2 className="section-title">Специализированные ИИ-Сервисы</h2>
      <div className="content-grid two-cols reversed">
        <div className="text-content">
          <h3>Инструменты для Преподавателей</h3>
          <p>Помимо универсальных чат-ботов, существуют платформы, созданные специально для учителей. Они экономят часы рутинной работы.</p>
          <div className="card-grid">
            <div className="model-card glass-panel" style={{borderTop: '3px solid #f39c12'}}>
              <h4>Twee.com</h4>
              <p>Создание заданий к YouTube видео: транскрипты, словари, вопросы, заполнение пропусков — в 2 клика.</p>
            </div>
            <div className="model-card glass-panel" style={{borderTop: '3px solid #9b59b6'}}>
              <h4>Diffit</h4>
              <p>Адаптация любого текста под нужный уровень сложности (CEFR) и автоматическая генерация рабочих листов.</p>
            </div>
            <div className="model-card glass-panel" style={{borderTop: '3px solid #3498db'}}>
              <h4>MagicSchool.ai</h4>
              <p>Огромный хаб: от проверки эссе и генерации шуток до написания планов уроков и писем родителям.</p>
            </div>
            <div className="model-card glass-panel" style={{borderTop: '3px solid #2ecc71'}}>
              <h4>Quizlet AI (Q-Chat)</h4>
              <p>Интерактивный ИИ-репетитор внутри Quizlet, который тестирует студентов по вашим сетам карточек.</p>
            </div>
          </div>
        </div>
        <div className="image-wrapper">
          <img 
            src="/english-tips/services_anime_1774356791883.png" 
            alt="Аниме маскот и визуальные сервисы" 
            className="rounded-image glow-purple"
          />
        </div>
      </div>
    </section>
  );
};

export default UsefulServices;
