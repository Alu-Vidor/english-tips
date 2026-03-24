import { useMemo, useState } from 'react';
import HeroSection from './components/HeroSection';
import PromptingBasics from './components/PromptingBasics';
import ForeignModels from './components/ForeignModels';
import RussianModels from './components/RussianModels';
import UseCases from './components/UseCases';
import UsefulServices from './components/UsefulServices';
import CEFRGuide from './components/CEFRGuide';
import AIRisks from './components/AIRisks';

const tabs = [
  {
    id: 'prompting',
    label: 'Промптинг',
    description: 'Методика формулирования запросов и банк шаблонов.',
  },
  {
    id: 'cefr',
    label: 'CEFR',
    description: 'Как адаптировать задания и промпты под уровень группы.',
  },
  {
    id: 'foreign',
    label: 'Зарубежные модели',
    description: 'Когда использовать международные платформы и для каких задач.',
  },
  {
    id: 'russian',
    label: 'Российские решения',
    description: 'Локальные сервисы для стабильной и доступной практики.',
  },
  {
    id: 'cases',
    label: 'Сценарии',
    description: 'Реальные методические кейсы от warm-up до assessment.',
  },
  {
    id: 'services',
    label: 'Сервисы',
    description: 'Подборка платформ и рекомендации по рабочему стеку.',
  },
  {
    id: 'risks',
    label: 'Риски и выбор',
    description: 'Ограничения ИИ, ручная проверка и матрицы выбора.',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('prompting');

  const activeContent = useMemo(() => {
    switch (activeTab) {
      case 'cefr':
        return <CEFRGuide />;
      case 'foreign':
        return <ForeignModels />;
      case 'russian':
        return <RussianModels />;
      case 'cases':
        return <UseCases />;
      case 'services':
        return <UsefulServices />;
      case 'risks':
        return <AIRisks />;
      case 'prompting':
      default:
        return <PromptingBasics />;
    }
  }, [activeTab]);

  return (
    <div className="app-container">
      <nav className="navbar glass-panel">
        <div className="logo">AI Educator</div>
        <div className="nav-links">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main>
        <HeroSection />

        <section id="tabs" className="tab-shell">
          <div className="tab-intro glass-panel">
            <div>
              <p className="eyebrow">Навигация по материалам</p>
              <h2 className="section-title left-aligned">Рабочие вкладки преподавателя</h2>
              <p className="tab-intro-text">
                Сайт организован как набор тематических вкладок. Такой формат
                удобнее для ежедневной работы: можно быстро переходить между
                промптами, уровнями CEFR, сервисами, кейсами и блоком
                критической проверки результатов ИИ.
              </p>
            </div>
            <div className="tab-overview-grid expanded-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`overview-card glass-panel ${activeTab === tab.id ? 'selected' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <strong>{tab.label}</strong>
                  <span>{tab.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="tab-panel glass-panel">{activeContent}</div>
        </section>
      </main>

      <footer className="footer glass-panel">
        <p>
          © 2026 AI для преподавателей английского языка. Методический гид по
          моделям, сервисам и промптам для подготовки занятий.
        </p>
      </footer>
    </div>
  );
}

export default App;
