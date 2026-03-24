import React from 'react';

const PromptingBasics: React.FC = () => {
  return (
    <section id="prompting" className="section-container prompting-section">
      <h2 className="section-title">Основы Эффективного Промптинга</h2>
      <div className="content-grid two-cols">
        <div className="image-wrapper">
          <img 
            src="/english-tips/prompting_anime_student_1774356728359.png" 
            alt="Преподаватель пишет промпт на голографической клавиатуре" 
            className="rounded-image"
          />
        </div>
        <div className="text-content">
          <h3>Формула Идеального Запроса</h3>
          <p>Чем точнее запрос, тем лучше результат. Используйте структуру <strong>"Роль + Контекст + Задача + Формат"</strong>.</p>
          <ul className="feature-list">
            <li><span className="icon">🎯</span> <strong>Роль:</strong> "Действуй как опытный CELTA преподаватель английского..."</li>
            <li><span className="icon">🌍</span> <strong>Контекст:</strong> "Студенты уровня B1, тема 'Экология', возраст 14-16 лет..."</li>
            <li><span className="icon">📝</span> <strong>Задача:</strong> "Напиши текст на 300 слов и составь к нему True/False вопросы..."</li>
            <li><span className="icon">📊</span> <strong>Формат:</strong> "Выведи текст отдельно, а задания оформи в виде таблицы."</li>
          </ul>
          <div className="pro-tip glass-panel" style={{marginTop: '20px', padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', borderLeft: '3px solid var(--accent)'}}>
            <h4 style={{marginBottom: '5px'}}>💡 Pro Tip: Уточнение CEFR</h4>
            <p style={{fontSize: '0.9rem', color: '#ccc'}}>Добавляйте в промпт фразу: <i>"Ограничь лексику списком уровня A2 по школе CEFR, исключая идиомы и сложную грамматику."</i> Это спасет текст от неадекватной сложности.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptingBasics;
