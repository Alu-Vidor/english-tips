import React from 'react';
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
          <a href="#foreign">Зарубежные</a>
          <a href="#russian">Российские</a>
          <a href="#cases">Кейсы</a>
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
        <p>© 2026 AI для Преподавателей ИЯ. Создан с помощью Vite и React.</p>
      </footer>
    </div>
  );
}

export default App;
