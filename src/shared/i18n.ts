import i18n from 'i18next';
import en from './locales/en';
import { getLocalStorage } from './localStorage';
import ptBR from './locales/pt-BR';

const portuguese = 'pt-BR';
const english = 'en';

const resources = {
  [portuguese]: ptBR,
  [english]: en,
};

const supportedLanguages = [portuguese, english] as const;
type Language = (typeof supportedLanguages)[number];

const getInitialLanguage = (): Language => {
  const storedLanguage = getLocalStorage<string>('language');

  if (storedLanguage === english || storedLanguage === portuguese) {
    return storedLanguage;
  }

  if (typeof navigator !== 'undefined' && navigator.language.startsWith('en')) {
    return english;
  }

  return portuguese;
};

i18n.init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: portuguese,
  defaultNS: 'maintenance',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
