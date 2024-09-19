import { useRouter } from 'next/router';
import jp from '../public/locales/jp';
import en from '../public/locales/en';
import es from '../public/locales/es';

const useTranslation = () => {
  const { locale } = useRouter();
  const translations = {
    jp,
    en,
    es
  }[locale] || jp;

  const t = (path = '') => {
    if (typeof path !== 'string') {
      console.warn('Translation path should be a string');
      return path; // Return path as is if it's not a string
    }

    // Split the path into keys and access the object deeply
    return path.split('.').reduce((obj, key) => obj && obj[key], translations) || path;
  };

  return { t };
};

export default useTranslation;
