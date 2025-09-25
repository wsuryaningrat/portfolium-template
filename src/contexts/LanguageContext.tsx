import { createContext, useContext, useState, ReactNode } from 'react';

// Try to import language files, handle cases where they might not exist
let enTranslations: any = {};
let idTranslations: any = {};

try {
  enTranslations = require('../data/en.json');
} catch (error) {
  console.log('English translations not found');
}

try {
  idTranslations = require('../data/id.json');
} catch (error) {
  console.log('Indonesian translations not found');
}

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  isLoading: boolean;
  availableLanguages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Determine available languages based on what files exist
const availableLanguages: Language[] = [];
if (Object.keys(enTranslations).length > 0) availableLanguages.push('en');
if (Object.keys(idTranslations).length > 0) availableLanguages.push('id');

const translations = {
  en: enTranslations,
  id: idTranslations
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Determine default language based on available languages
  const getDefaultLanguage = (): Language => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && availableLanguages.includes(saved)) {
      return saved;
    }
    // Return first available language, or 'en' as fallback
    return availableLanguages.length > 0 ? availableLanguages[0] : 'en';
  };

  const [language, setLanguageState] = useState<Language>(getDefaultLanguage);
  const [isLoading] = useState(false);

  const setLanguage = (lang: Language) => {
    if (availableLanguages.includes(lang)) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): any => {
    const currentTranslations = translations[language];
    if (!currentTranslations) return key;
    
    const keys = key.split('.');
    let value: any = currentTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value; // Return the actual value (string, array, object, etc.)
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isLoading,
    availableLanguages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
