// hooks/useTranslation.js
import { useRouter } from 'next/router';
import jp from '../public/locales/jp';
import en from '../public/locales/en';
import es from '../public/locales/es';

const useTranslation = () => {
  const { locale } = useRouter();
  const t = locale === 'jp' ? jp : (locale === 'es' ? es : en);
  
  return t;
};

export default useTranslation;
