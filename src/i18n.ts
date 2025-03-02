import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from '../src/locals/en';
import csTranslations from '../src/locals/cs';

const resources = {
  en: {
    translation: enTranslations
  },
  cs: {
    translation: csTranslations
  }
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'cs', // Fallback language if the detected language is not available
    debug: false,
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
