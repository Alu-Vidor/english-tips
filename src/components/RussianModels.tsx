import React from 'react';
import russianImage from '../assets/images/russian_anime_models_1774356760741.png';

const russianTools = [
  {
    title: 'YandexGPT',
    description:
      'Подходит для черновой генерации заданий, двуязычных объяснений, идей для warm-up и адаптации материалов в русскоязычной среде.',
  },
  {
    title: 'GigaChat',
    description:
      'Удобен для базовой методической поддержки, построения упражнений, формулирования инструкций и перевода учебных материалов.',
  },
  {
    title: 'Яндекс Переводчик',
    description:
      'Полезен как вспомогательный инструмент для быстрого сопоставления формулировок и сверки учебных инструкций.',
  },
  {
    title: 'Шедеврум и Kandinsky',
    description:
      'Используются для создания визуальных опор, карточек, сценок для speaking и обложек к проектным заданиям.',
  },
];

const RussianModels: React.FC = () => {
  return (
    <section id="russian" className="section-container russian-section">
      <h2 className="section-title">Российские нейросети</h2>
      <div className="content-grid two-cols">
        <div className="image-wrapper">
          <img
            src={russianImage}
            alt="Использование российских ИИ-сервисов в обучении"
            className="rounded-image glow-purple"
          />
        </div>
        <div className="text-content">
          <h3>Практическая ценность локальных решений</h3>
          <p>
            Российские сервисы особенно важны в учреждениях, где требуется
            стабильный доступ без VPN, локальная экосистема и понятный входной
            порог для преподавателей, только начинающих работать с ИИ.
          </p>
          <ul className="feature-list">
            {russianTools.map((tool) => (
              <li key={tool.title}>
                <span className="icon">•</span>
                <span>
                  <strong>{tool.title}:</strong> {tool.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="info-panel glass-panel">
        <h3>Когда российский инструмент оказывается предпочтительным</h3>
        <div className="info-grid">
          <div className="info-card">
            <h4>Институциональная доступность</h4>
            <p>
              Если школа, вуз или языковой центр ограничивает использование
              зарубежных платформ, локальные решения становятся рабочим
              стандартом, а не компромиссом.
            </p>
          </div>
          <div className="info-card">
            <h4>Быстрые русскоязычные объяснения</h4>
            <p>
              Для комментариев к грамматике, заданий на перевод и инструкций для
              родителей локальные модели часто удобнее за счет естественной
              русскоязычной подачи.
            </p>
          </div>
          <div className="info-card">
            <h4>Комбинированный сценарий</h4>
            <p>
              Эффективная практика часто строится так: локальная модель готовит
              основу задания, а международная модель полирует английский стиль.
            </p>
          </div>
          <div className="info-card">
            <h4>Визуальная поддержка урока</h4>
            <p>
              Генераторы изображений особенно полезны при обучении младших
              школьников и подростков, когда смысловая опора повышает вовлечение
              и снижает когнитивную нагрузку.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RussianModels;
