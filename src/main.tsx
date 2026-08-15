import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import './style.css';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import VerticalSocials from './components/VerticalSocials';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import GitHubStats from './components/GitHubStats';
import { useTheme } from './contexts/ThemeContext';
import { useLanguage } from './contexts/LanguageContext';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

const AppContent: React.FC = () => {
  const { dark } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="App">
      <LoadingScreen />
      <Header />
      <main>
        <VerticalSocials />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Testimonials />
        <GitHubStats />
        <ContactForm />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
