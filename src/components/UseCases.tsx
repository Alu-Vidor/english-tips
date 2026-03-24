import React from 'react';

const cases = [
  {
    icon: '01',
    title: 'Из видео в полноценный урок',
    text: 'Загрузите транскрипт или субтитры, попросите модель выделить ключевые идеи, частотную лексику, трудные фразы и затем собрать pre-, while- и post-viewing activities.',
  },
  {
    icon: '02',
    title: 'Гибкая дифференциация',
    text: 'Один и тот же текст можно за минуты превратить в версии A2, B1 и B2, сохранив тему, но изменив длину предложений, лексику и типы вопросов.',
  },
  {
    icon: '03',
    title: 'Speaking-симуляторы',
    text: 'ИИ может играть роль интервьюера, клиента, администратора, экзаменатора или конфликтного собеседника, а затем давать точечную коррекцию.',
  },
  {
    icon: '04',
    title: 'Проверка письма по rubric',
    text: 'Вместо общей похвалы преподаватель получает полуавтоматическую предварительную разметку по критериям: содержание, организация, словарь, грамматика.',
  },
  {
    icon: '05',
    title: 'Лексический рециклинг',
    text: 'На основе списка слов модель быстро создает карточки, примеры, collocations, короткие диалоги и задания на retrieval practice.',
  },
  {
    icon: '06',
    title: 'Подготовка к дебатам и проектам',
    text: 'Нейросеть умеет собирать аргументы pro et contra, формулировать позиции команд, готовить discussion prompts и наборы useful phrases.',
  },
];

const UseCases: React.FC = () => {
  return (
    <section id="cases" className="section-container cases-section dark-alt">
      <h2 className="section-title">Практические сценарии применения</h2>
      <div className="cases-grid expanded">
        {cases.map((item) => (
          <div key={item.title} className="case-card glass-panel">
            <div className="icon case-number">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="info-panel glass-panel">
        <h3>Сценарий, который особенно экономит время преподавателя</h3>
        <p className="panel-lead">
          Наиболее продуктивный рабочий цикл выглядит так: материал, критерии,
          генерация, редактирование, проверка на уровень, финальная упаковка.
        </p>
        <div className="workflow-grid">
          <div className="workflow-step">
            <strong>Шаг 1</strong>
            <span>Дайте модели исходный текст, тему или ссылку на транскрипт.</span>
          </div>
          <div className="workflow-step">
            <strong>Шаг 2</strong>
            <span>Укажите возраст, CEFR, учебную цель и ограничения.</span>
          </div>
          <div className="workflow-step">
            <strong>Шаг 3</strong>
            <span>Попросите набор заданий разных типов с ключами.</span>
          </div>
          <div className="workflow-step">
            <strong>Шаг 4</strong>
            <span>Запросите упрощение, если когнитивная нагрузка слишком высока.</span>
          </div>
          <div className="workflow-step">
            <strong>Шаг 5</strong>
            <span>Отредактируйте результат под стиль вашей группы и программы.</span>
          </div>
        </div>
      </div>

      <div className="prompt-example glass-panel">
        <h3>Готовый промпт для превращения статьи в урок</h3>
        <pre>{`Ты методист курса английского языка. На основе статьи создай комплект материалов для 45-минутного занятия уровня B1. Мне нужны:
1. lead-in на 3-4 минуты;
2. 8 ключевых слов с простыми англоязычными объяснениями;
3. 6 вопросов на понимание текста;
4. 4 утверждения true/false;
5. одно speaking task в парах;
6. одно письменное задание на 120-150 слов;
7. answer key.
Сделай результат компактным, логичным и готовым к печати.`}</pre>
      </div>

      <div className="cases-image-container">
        <img
          src="/english-tips/use_cases_anime_1774356776217.png"
          alt="Сценарии применения ИИ в преподавании английского"
          className="rounded-image wide-image hover-zoom"
        />
      </div>
    </section>
  );
};

export default UseCases;
