import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Github, Linkedin, BookOpen, Sun, Moon, GraduationCap, Instagram } from 'lucide-react';
import { site } from '../config/site';
import { useLanguage } from '../contexts/LanguageContext';
import Tooltip from './Tooltip';

interface StickyPanelProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function StickyPanel({ isDark, toggleTheme }: StickyPanelProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();

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
    { icon: Home, label: 'Home', action: () => scrollToSection('hero') },
    { icon: BookOpen, label: 'Blog', href: site.social.blog },
    { icon: Github, label: 'GitHub', href: site.social.github },
    { icon: GraduationCap, label: 'Google Scholar', href: site.social.scholar },
    { icon: Linkedin, label: 'LinkedIn', href: site.social.linkedin },
    { icon: Instagram, label: 'Instagram', href: site.social.instagram },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <motion.div
        className="flex items-center gap-1.5 px-2 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg rounded-full border border-gray-200/50 dark:border-gray-700/50"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {navItems.map((item) => (
          <Tooltip
            key={item.label}
            content={item.label}
            show={hoveredItem === item.label}
          >
            <div
              className="relative"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.action ? (
                <motion.button
                  onClick={item.action}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ willChange: 'transform' }}
                >
                  <item.icon className="w-4 h-4" />
                </motion.button>
              ) : (
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ willChange: 'transform' }}
                >
                  <item.icon className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </Tooltip>
        ))}

        {/* Separator */}
        <div className="w-px h-5 bg-gray-300 dark:bg-gray-600"></div>

        {/* Language Switcher */}
        <Tooltip
          content={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
          show={hoveredItem === 'language'}
        >
          <div
            onMouseEnter={() => setHoveredItem('language')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            >
              <span className="text-xs font-bold">
                {language === 'en' ? 'EN' : 'ID'}
              </span>
            </motion.button>
          </div>
        </Tooltip>

        {/* Theme Toggle */}
        <Tooltip
          content="Toggle Theme"
          show={hoveredItem === 'theme'}
        >
          <div
            onMouseEnter={() => setHoveredItem('theme')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ 
                duration: 0.4, 
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              style={{ willChange: 'transform' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ opacity: 0, scale: 0.8, rotate: isDark ? -180 : 180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: isDark ? 180 : -180 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isDark ? (
                    <Sun className="w-4 h-4 text-yellow-500" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </Tooltip>
      </motion.div>
    </div>
  );
}
