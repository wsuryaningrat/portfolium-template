import { useState, useEffect } from 'react';
import { site } from './config/site';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import StickyPanel from './components/StickyPanel';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Add transition class for smooth animation
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 theme-transition">
        {site.showNavbar && <Navbar />}
        
        <main className="pt-14 sm:pt-16">
          <Hero />
          <Work />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        
        <Footer />
        <StickyPanel isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </LanguageProvider>
  );
}

export default App;
