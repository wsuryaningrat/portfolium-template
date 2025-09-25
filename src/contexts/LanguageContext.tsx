import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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

// Default empty translations
const defaultTranslations = {
  en: {},
  id: {}
};

// Available languages - will be determined at runtime
let availableLanguages: Language[] = ['en']; // Default to English
let translations = { ...defaultTranslations };

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTranslations, setLoadedTranslations] = useState(translations);
  const [loadedAvailableLanguages, setLoadedAvailableLanguages] = useState(availableLanguages);

  // Load translations dynamically
  useEffect(() => {
    const loadTranslations = async () => {
      const newTranslations = { ...defaultTranslations };
      const newAvailableLanguages: Language[] = [];

      // Try to load English translations
      try {
        const enModule = await import('../data/en.json');
        newTranslations.en = enModule.default || enModule;
        newAvailableLanguages.push('en');
      } catch (error) {
        console.log('English translations not found');
      }

      // Try to load Indonesian translations
      try {
        const idModule = await import('../data/id.json');
        newTranslations.id = idModule.default || idModule;
        newAvailableLanguages.push('id');
      } catch (error) {
        console.log('Indonesian translations not found');
      }

      // If no translations loaded, default to English
      if (newAvailableLanguages.length === 0) {
        newAvailableLanguages.push('en');
      }

      setLoadedTranslations(newTranslations);
      setLoadedAvailableLanguages(newAvailableLanguages);
      setIsLoading(false);

      // Set default language
      const saved = localStorage.getItem('language') as Language;
      if (saved && newAvailableLanguages.includes(saved)) {
        setLanguageState(saved);
      } else {
        setLanguageState(newAvailableLanguages[0]);
      }
    };

    loadTranslations();
  }, []);

  // Determine default language based on available languages
  const getDefaultLanguage = (): Language => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && loadedAvailableLanguages.includes(saved)) {
      return saved;
    }
    // Return first available language, or 'en' as fallback
    return loadedAvailableLanguages.length > 0 ? loadedAvailableLanguages[0] : 'en';
  };

  const setLanguage = (lang: Language) => {
    if (loadedAvailableLanguages.includes(lang)) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): any => {
    if (isLoading) {
      return key; // Return key while loading
    }

    const currentTranslations = loadedTranslations[language];
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
    availableLanguages: loadedAvailableLanguages
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
