import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from '../hooks/useTranslation';

// Your SVG icon as a functional component
const LanguageSwitcherDropdownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
  </svg>
);

const LanguageSwitcherMobile = () => {
  const router = useRouter();
  const { locale } = router;
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslation();

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const closeDropdown = () => setIsOpen(false);

  // const changeLanguage = (lang) => {
  //   router.push(router.pathname, router.asPath, { locale: lang });
  //   closeDropdown();
  // };
  const handleLanguageChange = (lang) => {
    if (lang === 'jp') {
      // Change locale for Japanese
      router.push(router.pathname, router.asPath, { locale: 'jp' });
    } else if (lang === 'en') {
      // Change locale for English
      router.push(router.pathname, router.asPath, { locale: 'en' });
    } else if (lang === 'es') {
      // Change locale for Spanish
      router.push(router.pathname, router.asPath, { locale: 'es' });
    }
    closeDropdown();
  };

  // Language options
  const languages = {
    en: 'English',
    sp: 'Español',
    jp: '日本語',
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} aria-label="Language switcher mobile" className="flex items-center text-media-black border border-slate-200 rounded-lg px-4 py-2 focus:outline-none dark:border-slate-300 dark:text-media-white">
        <LanguageSwitcherDropdownIcon />
        <span className="pl-3">{languages[locale]}</span>
        <svg className="w-4 h-4 pl-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-3 px-2 w-fit bg-white border border-slate-200 rounded-md shadow-md z-10 dark:bg-indigo-900 dark:border-slate-300">
          <div className="py-1">
            <button onClick={() => handleLanguageChange('en')} className={`block px-4 py-2 text-media-black text-lg dark:text-media-white w-full text-center ${locale === 'en' ? 'font-bold' : 'font-normal'}`}>English</button>
            <button onClick={() => handleLanguageChange('es')} className={`block px-4 py-2 text-media-black text-lg dark:text-media-white w-full text-center ${locale === 'sp' ? 'font-bold' : 'font-normal'}`}>Español</button>
            <button onClick={() => handleLanguageChange('jp')} className={`block px-4 py-2 text-media-black text-lg dark:text-media-white w-full text-center ${locale === 'jp' ? 'font-bold' : 'font-normal'}`}>日本語</button>
          </div>
        </div>
      )}
      {/* {isOpen && (
        <div className="absolute right-0 mt-2 w-full bg-white border border-slate-200 rounded-md shadow-md z-10 dark:bg-indigo-900 dark:border-slate-300">
          <div className="py-1">
            {Object.keys(languages).map((key) => (
              <button
                key={key}
                onClick={() => changeLanguage(key)}
                className={`block px-4 py-2 w-full text-center text-media-black dark:text-media-white ${locale === key ? 'font-bold' : 'font-normal'}`}
              >
                {languages[key]}
              </button>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default LanguageSwitcherMobile;