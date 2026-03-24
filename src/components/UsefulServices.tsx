import React from 'react';
import servicesImage from '../assets/images/services_anime_1774356791883.png';

const services = [
  {
    title: 'Twee',
    color: '#f39c12',
    description:
      'Специализируется на материалах для преподавателей английского: задания по видео, вопросы к текстам, vocabulary practice и короткие рабочие листы.',
  },
  {
    title: 'Diffit',
    color: '#16a085',
    description:
      'Адаптирует тексты по уровню сложности и помогает быстро получить набор comprehension activities и словарной поддержки.',
  },
  {
    title: 'MagicSchool',
    color: '#3498db',
    description:
      'Предлагает готовые педагогические сценарии: планы уроков, оценочные комментарии, письма родителям, рубрики и шаблоны заданий.',
  },
  {
    title: 'Quizlet',
    color: '#2ecc71',
    description:
      'Подходит для систематического закрепления лексики, карточек, повторения по интервалам и запуска словарных мини-тестов.',
  },
  {
    title: 'Canva Magic Studio',
    color: '#8e44ad',
    description:
      'Удобен для визуальной упаковки заданий, слайдов, карточек, инфографики и постеров для проектной работы.',
  },
  {
    title: 'DeepL Write / Translate',
    color: '#e67e22',
    description:
      'Полезен для сверки перевода, стилистической правки и сопоставления формулировок инструкций в двуязычных курсах.',
  },
];

const comparisons = [
  {
    title: 'Twee',
    strong: 'Быстро превращает видео и тексты в задания, удобен именно преподавателю английского.',
    weak: 'Менее гибок для нестандартных методических сценариев, чем универсальные чат-модели.',
    best: 'Когда нужен worksheet почти “из коробки”.',
  },
  {
    title: 'Diffit',
    strong: 'Очень полезен для адаптации материалов под уровень и ускорения работы с reading.',
    weak: 'Не всегда достаточно тонко учитывает конкретную программу и специфику группы.',
    best: 'Когда надо быстро сделать несколько версий текста под разные уровни.',
  },
  {
    title: 'Quizlet',
    strong: 'Силен в лексическом повторении и регулярной практике.',
    weak: 'Не решает задачи полноценного методического проектирования урока.',
    best: 'Когда цель — рециклинг словаря и автономная практика студентов.',
  },
  {
    title: 'Canva',
    strong: 'Отлично упаковывает материалы визуально и помогает делать профессионально выглядящие handouts.',
    weak: 'Не заменяет языковую и методическую экспертизу.',
    best: 'Когда у вас уже есть содержание, но нужна сильная визуальная подача.',
  },
];

const UsefulServices: React.FC = () => {
  return (
    <section className="section-container services-section tab-section">
      <h2 className="section-title">Специализированные ИИ-сервисы</h2>
      <div className="content-grid two-cols reversed">
        <div className="text-content">
          <h3>Платформы, которые закрывают рутинные методические задачи</h3>
          <p>
            Помимо универсальных чат-ботов, преподавателю полезно иметь набор
            специализированных сервисов. Они не всегда глубже по интеллекту, но
            часто лучше упакованы под конкретный педагогический сценарий:
            worksheet generation, vocabulary drilling, adaptation, visuals и
            assessment support.
          </p>
          <div className="card-grid">
            {services.map((service) => (
              <div
                key={service.title}
                className="model-card glass-panel"
                style={{ borderTop: `3px solid ${service.color}` }}
              >
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="image-wrapper">
          <img
            src={servicesImage}
            alt="Подборка ИИ-сервисов для преподавателя"
            className="rounded-image glow-purple"
          />
        </div>
      </div>

      <div className="info-panel glass-panel">
        <h3>Сравнительные ориентиры по сервисам</h3>
        <div className="matrix-grid">
          {comparisons.map((item) => (
            <article key={item.title} className="matrix-card">
              <h4>{item.title}</h4>
              <p><strong>Сильная сторона:</strong> {item.strong}</p>
              <p><strong>Ограничение:</strong> {item.weak}</p>
              <p><strong>Лучший сценарий:</strong> {item.best}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="info-panel glass-panel">
        <h3>Как собирать собственный рабочий стек преподавателя</h3>
        <div className="info-grid">
          <div className="info-card">
            <h4>Для подготовки урока</h4>
            <p>
              Нужен один генератор идей, один сервис адаптации текста и один
              инструмент визуальной упаковки. Этого уже достаточно для ощутимой
              экономии времени.
            </p>
          </div>
          <div className="info-card">
            <h4>Для speaking и vocabulary</h4>
            <p>
              Полезно сочетать чат-модель для диалогов и специализированную
              платформу для карточек и повторения.
            </p>
          </div>
          <div className="info-card">
            <h4>Для оценивания</h4>
            <p>
              Лучше использовать ИИ не как окончательного судью, а как систему
              предварительного комментария по rubric перед финальной проверкой
              преподавателем.
            </p>
          </div>
          <div className="info-card">
            <h4>Для устойчивой практики</h4>
            <p>
              Не стоит дробить стек на десятки сервисов. Три-четыре инструмента,
              освоенные глубоко, обычно полезнее, чем большой, но хаотичный набор.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulServices;
