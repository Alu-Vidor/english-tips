import React from 'react';

const UseCases: React.FC = () => {
  return (
    <section id="cases" className="section-container cases-section dark-alt">
      <h2 className="section-title">Практические Кейсы (Use Cases)</h2>
      <div className="cases-grid">
        <div className="case-card glass-panel">
          <div className="icon">📚</div>
          <h3>От YouTube до Урока</h3>
          <p>1. Скопируйте транскрипт видео.<br/>2. Попросите ИИ (Claude/ChatGPT) сделать summary.<br/>3. Сгенерируйте 5 gap-fill вопросов и список из 10 полезных слов.</p>
        </div>
        <div className="case-card glass-panel">
          <div className="icon">🧩</div>
          <h3>Умные Квизы</h3>
          <p>Вставьте готовый текст и попросите: "Создай тест из 5 вопросов Multiple Choice (A,B,C,D) с одним правильным ответом, укажи ключи."</p>
        </div>
        <div className="case-card glass-panel">
          <div className="icon">💬</div>
          <h3>Ролевые боты (Speaking)</h3>
          <p>Промпт для ученика: "Act as a grumpy barista in London. I am a customer. Let's practice ordering coffee. Correct my mistakes after the conversation."</p>
        </div>
      </div>
      <div className="cases-image-container">
        <img 
          src="/english-tips/use_cases_anime_1774356776217.png" 
          alt="Учитель с сотнями парящих заданий" 
          className="rounded-image wide-image hover-zoom"
        />
      </div>
    </section>
  );
};

export default UseCases;
