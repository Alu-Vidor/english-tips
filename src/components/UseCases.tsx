import React from 'react';
import useCasesImage from '../assets/images/use_cases_anime_1774356776217.png';

const cases = [
  {
    icon: '01',
    title: 'Из видео в полноценный урок',
    text: 'Преподаватель берет транскрипт YouTube-видео, просит выделить основную мысль, полезную лексику, comprehension tasks и post-viewing discussion. Это особенно удобно для разговорных клубов и тематических уроков.',
  },
  {
    icon: '02',
    title: 'Дифференциация одной темы',
    text: 'Один и тот же материал можно превратить в версии A2, B1 и B2: меняются длина текста, тип вопросов, плотность новой лексики и степень самостоятельности учащихся.',
  },
  {
    icon: '03',
    title: 'Speaking-симуляторы',
    text: 'ИИ играет роль интервьюера, администратора, экзаменатора, коллеги или клиента. Это помогает быстро создавать диалоги с понятной ролевой рамкой.',
  },
  {
    icon: '04',
    title: 'Формирующее оценивание письма',
    text: 'Модель не заменяет преподавателя, но помогает выдать предварительную обратную связь по критериям и быстрее выделить типичные проблемные места.',
  },
  {
    icon: '05',
    title: 'Лексический рециклинг',
    text: 'На основе списка слов можно получить карточки, collocations, mini-dialogues, retrieval prompts и задания на различение близких по смыслу слов.',
  },
  {
    icon: '06',
    title: 'Подготовка дебатов и проектной работы',
    text: 'Нейросеть помогает собирать аргументы, строить discussion prompts, формулировать роли участников и генерировать language support для публичного выступления.',
  },
];

const realExamples = [
  {
    title: 'Подготовка урока reading за 20 минут',
    details:
      'Преподаватель вставляет новостной текст, просит адаптацию до B1, glossary, 6 вопросов на понимание, 1 pair discussion и ответный ключ. После этого остается только проверить формулировки и оформить материал.',
    prompt: `Адаптируй текст для B1, сохрани его смысл, сократи до 250 слов, добавь glossary из 8 слов, 6 comprehension questions, 4 true/false statements, speaking task в парах и answer key.`,
  },
  {
    title: 'Быстрая подготовка speaking клуба',
    details:
      'Если тема встречи известна заранее, модель может собрать discussion ladder: warm-up, opinion questions, role-play и блок useful phrases.',
    prompt: `Создай speaking pack для уровня B2 по теме "Remote work". Мне нужны warm-up, 8 вопросов для обсуждения от простых к сложным, role-play scenario, 10 useful phrases и 5 follow-up questions для сильных студентов.`,
  },
  {
    title: 'Работа с типичными ошибками группы',
    details:
      'После проверки домашних заданий преподаватель анонимизирует 12 ошибок и просит модель сгруппировать их по темам, а затем создать мини-тренажер на повторение.',
    prompt: `Сгруппируй ошибки по категориям grammar, vocabulary, word order. Затем создай по 3 коротких упражнения на каждую категорию и дай ключи. Сделай задания подходящими для уровня A2-B1.`,
  },
];

const stageExamples = [
  {
    stage: 'Warm-up',
    description:
      'Попросите модель сделать 3-5 коротких вопросов, которые активируют личный опыт и вводят тему без перегрузки лексикой.',
  },
  {
    stage: 'Presentation',
    description:
      'Используйте ИИ для генерации контрастных примеров грамматической структуры, мини-диалога и быстрого rule summary.',
  },
  {
    stage: 'Practice',
    description:
      'Модель может дать controlled practice, затем semi-controlled tasks и наконец короткий communicative task.',
  },
  {
    stage: 'Production',
    description:
      'Хорошо работают role cards, debate positions, story continuations и problem-solving scenarios.',
  },
  {
    stage: 'Assessment',
    description:
      'ИИ помогает быстро создать rubric, checklist для peer feedback и варианты exit ticket.',
  },
];

const UseCases: React.FC = () => {
  return (
    <section className="section-container cases-section tab-section">
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
        <h3>Примеры по этапам урока</h3>
        <div className="workflow-grid lesson-stage-grid">
          {stageExamples.map((item) => (
            <div key={item.stage} className="workflow-step">
              <strong>{item.stage}</strong>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="prompts-section">
        <h3 className="subsection-title">Реальные рабочие примеры</h3>
        <div className="prompt-grid">
          {realExamples.map((example) => (
            <article key={example.title} className="prompt-card glass-panel">
              <h4>{example.title}</h4>
              <p>{example.details}</p>
              <pre>{example.prompt}</pre>
            </article>
          ))}
        </div>
      </div>

      <div className="info-panel glass-panel">
        <h3>Сценарий, который особенно экономит время</h3>
        <p className="panel-lead">
          Наиболее продуктивный цикл выглядит так: исходный материал, рамка
          уровня, генерация заданий, проверка на адекватность, финальная
          методическая редактура.
        </p>
        <div className="workflow-grid">
          <div className="workflow-step">
            <strong>Шаг 1</strong>
            <span>Дайте статье, видео или теме содержательную основу.</span>
          </div>
          <div className="workflow-step">
            <strong>Шаг 2</strong>
            <span>Зафиксируйте CEFR, возраст и цель урока.</span>
          </div>
          <div className="workflow-step">
            <strong>Шаг 3</strong>
            <span>Попросите несколько типов заданий и ключи.</span>
          </div>
          <div className="workflow-step">
            <strong>Шаг 4</strong>
            <span>Снизьте сложность или повысьте вариативность при необходимости.</span>
          </div>
          <div className="workflow-step">
            <strong>Шаг 5</strong>
            <span>Оставьте за собой финальное решение и редактуру.</span>
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
7. answer key;
8. краткая пометка, какие задания можно упростить для слабой группы.
Сделай результат компактным, логичным и готовым к печати.`}</pre>
      </div>

      <div className="cases-image-container">
        <img
          src={useCasesImage}
          alt="Сценарии применения ИИ в преподавании английского"
          className="rounded-image wide-image hover-zoom"
        />
      </div>
    </section>
  );
};

export default UseCases;
