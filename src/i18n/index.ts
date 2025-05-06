
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language resources
import translationEN from './locales/en.json';
import translationZH from './locales/zh.json';
import translationJA from './locales/ja.json';

// Available languages
export const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  },
  ja: {
    translation: translationJA
  }
} as const;

// Language names
export const languageNames = {
  en: 'English',
  zh: '中文',
  ja: '日本語'
};

// Get browser language or saved preference
const getDefaultLanguage = (): string => {
  const savedLanguage = localStorage.getItem('i18nextLng');
  if (savedLanguage && Object.keys(resources).includes(savedLanguage)) {
    return savedLanguage;
  }
  
  const browserLang = navigator.language.split('-')[0];
  return Object.keys(resources).includes(browserLang) ? browserLang : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDefaultLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
