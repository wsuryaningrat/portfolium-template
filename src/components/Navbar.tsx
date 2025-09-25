import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { site } from '../config/site';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(['hero', 'work', 'education', 'skills', 'projects', 'achievements', 'contact']);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { name: t('navigation.home'), id: 'hero' },
    { name: t('navigation.work'), id: 'work' },
    { name: t('navigation.education'), id: 'education' },
    { name: t('navigation.skills'), id: 'skills' },
    { name: t('navigation.projects'), id: 'projects' },
    { name: t('navigation.achievements'), id: 'achievements' },
    { name: t('navigation.contact'), id: 'contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left side with ORCID logo and name */}
          <div className="flex items-center space-x-3">
            {/* ORCID Logo */}
            <motion.a
              href="https://orcid.org/my-orcid?orcid=0000-0003-1808-3505"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
                alt="ORCID Profile"
                className="w-8 h-8 transition-opacity duration-200 group-hover:opacity-80"
              />
            </motion.a>
            
            {/* Name */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="group"
              whileHover={{ scale: 1.02 }}
            >
              <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                {site.name}
              </span>
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-2 py-1 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white rounded-full"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
