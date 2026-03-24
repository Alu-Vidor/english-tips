import HeroSection from './components/HeroSection';
import PromptingBasics from './components/PromptingBasics';
import ForeignModels from './components/ForeignModels';
import RussianModels from './components/RussianModels';
import UseCases from './components/UseCases';
import UsefulServices from './components/UsefulServices';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar glass-panel">
        <div className="logo">AI Educator</div>
        <div className="nav-links">
          <a href="#prompting">Промптинг</a>
          <a href="#foreign">Зарубежные модели</a>
          <a href="#russian">Российские решения</a>
          <a href="#cases">Сценарии</a>
          <a href="#services">Сервисы</a>
        </div>
      </nav>

      <main>
        <HeroSection />
        <PromptingBasics />
        <ForeignModels />
        <RussianModels />
        <UseCases />
        <UsefulServices />
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
