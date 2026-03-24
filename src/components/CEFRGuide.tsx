import React from 'react';

const levels = [
  {
    level: 'A1-A2',
    focus: 'простые инструкции, высокая опора на контекст, короткие предложения, частотная лексика',
    prompt: `Адаптируй материал для уровня A2. Используй предложения не длиннее 10-12 слов, частотную лексику, минимум абстрактных понятий, четкие инструкции и примеры перед заданием. Добавь визуальную или смысловую опору.`,
    task: 'Подходят matching, true/false, short answers, guided speaking.',
  },
  {
    level: 'B1-B2',
    focus: 'умеренная когнитивная нагрузка, развитие аргументации, работа с opinion language',
    prompt: `Подготовь материал для уровня B1-B2. Сохрани естественный английский, но избегай редких идиом. Добавь задания на объяснение мнения, сравнение идей, выбор аргумента и краткое письменное высказывание.`,
    task: 'Подходят discussion prompts, paragraph writing, role-play, text analysis.',
  },
  {
    level: 'C1-C2',
    focus: 'академичность, нюансированная лексика, сложные жанры и критическая дискуссия',
    prompt: `Создай задания для уровня C1. Используй естественный академический регистр, сложные аргументативные вопросы, задания на synthesis и evaluation. После каждого задания кратко поясни, какой навык оно развивает.`,
    task: 'Подходят debates, article critique, essay planning, advanced speaking simulation.',
  },
];

const adaptationRules = [
  {
    title: 'Управляйте длиной текста',
    text: 'Если уровень ниже B1, задавайте не только уровень CEFR, но и ориентир по количеству слов и длине предложения.',
  },
  {
    title: 'Фиксируйте словарные рамки',
    text: 'Полезно прямо просить частотную лексику, избегать идиом и ограничивать число новых единиц в одном материале.',
  },
  {
    title: 'Разделяйте сложность языка и задачи',
    text: 'Даже при простом тексте сама задача может быть сложной. Указывайте, должен ли ответ быть репродуктивным, интерпретационным или аналитическим.',
  },
  {
    title: 'Просите дифференциацию',
    text: 'Для смешанных групп стоит сразу получать два варианта упражнения: базовый и усиленный.',
  },
];

const promptPairs = [
  {
    weak: 'Сделай текст проще.',
    strong:
      'Адаптируй текст для A2. Сократи его до 180 слов, замени редкую лексику на частотную, убери пассивный залог, добавь glossary из 6 слов и 4 вопроса на понимание.',
  },
  {
    weak: 'Сделай вопросы по теме.',
    strong:
      'Создай 8 speaking questions для уровня B1 по теме "Healthy habits": от личного опыта к выражению мнения, без сложной абстрактной лексики.',
  },
  {
    weak: 'Подготовь задание на письмо.',
    strong:
      'Подготовь writing task для B2: opinion paragraph на 140-170 слов, с 3 guiding questions, checklist для самопроверки и краткими критериями оценки.',
  },
];

const CEFRGuide: React.FC = () => {
  return (
    <section className="section-container tab-section">
      <h2 className="section-title">CEFR и адаптация промптов</h2>

      <div className="info-panel glass-panel">
        <h3>Как менять запрос под уровень группы</h3>
        <div className="matrix-grid">
          {levels.map((item) => (
            <article key={item.level} className="matrix-card">
              <h4>{item.level}</h4>
              <p>
                <strong>Фокус:</strong> {item.focus}
              </p>
              <p>
                <strong>Тип задач:</strong> {item.task}
              </p>
              <pre>{item.prompt}</pre>
            </article>
          ))}
        </div>
      </div>

      <div className="info-panel glass-panel">
        <h3>Методические правила адаптации</h3>
        <div className="info-grid">
          {adaptationRules.map((rule) => (
            <div key={rule.title} className="info-card">
              <h4>{rule.title}</h4>
              <p>{rule.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prompts-section">
        <h3 className="subsection-title">Из слабого промпта в сильный</h3>
        <div className="prompt-grid">
          {promptPairs.map((pair, index) => (
            <article key={index} className="prompt-card glass-panel">
              <h4>Пример {index + 1}</h4>
              <p><strong>Слишком общий вариант:</strong></p>
              <pre>{pair.weak}</pre>
              <p><strong>Методически точный вариант:</strong></p>
              <pre>{pair.strong}</pre>
            </article>
          ))}
        </div>
      </div>

      <div className="prompt-example glass-panel">
        <h3>Практический шаблон для смешанной группы</h3>
        <pre>{`Создай упражнение по теме "Daily routines" для смешанной группы A2-B1.
Сначала дай базовую версию для A2:
- простые инструкции;
- 6 коротких вопросов;
- vocabulary support.

Затем дай усложненную версию для B1:
- 6 вопросов с opinion element;
- одно pair discussion task;
- 5 useful phrases.

В конце кратко поясни, чем отличаются когнитивная и языковая сложность двух версий.`}</pre>
      </div>
    </section>
  );
};

export default CEFRGuide;
