import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import LanguageSwitcherMobile from './LanguageSwitcherMobile';


export default function Header(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('darkMode') === 'true';
    }
    return false;
});

useEffect(() => {
  if (typeof window !== 'undefined') {
      if (darkMode){
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }        
      localStorage.setItem('darkMode', darkMode.toString());
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
      setDarkMode(prevMode => !prevMode);
  };

  const router = useRouter();

  const renderIndicator = (path) => {
    if (router.pathname === path) {
      return (
        <Image
          src={darkMode ? '/cat-paw-3.svg' : '/cat-paw-1.svg'}
          alt="Cat paw"
          width={20}
          height={20}
          className="lg:relative right-1 h-full my-auto w-5"
        />
      );
    }
    return null;
  };

  return (
    <nav className='fixed top-0 left-0 bg-white bg-opacity-80 backdrop-blur-md z-10 w-full shadow-md dark:bg-indigo-900 dark:bg-opacity-80'>
      <div className="mx-auto max-w-7xl px-2 md:px-5 lg:px-10 xl:px-0">
        <div className="relative flex h-20 items-center justify-between">

          {/* Logo in light mode */}
          <div className='dark:hidden'>
            <Link href='/'>
              <Image src='/web-logo-5.svg' alt='logo' width={90} height={90}/>
            </Link>
          </div>
          {/* Logo in dark mode */}
          <div className='hidden dark:block'>
            <Link href='/'>
              <Image src='/web-logo-1.svg' alt='logo' width={90} height={90}/>
            </Link>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <button type="button" onClick={toggleMobileMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-media-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-media-white dark:text-media-white" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen ? 'true' : 'false'}>
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Icon when menu is open */}
              <svg className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-end">
            <div className="hidden lg:block">
              <div className="flex space-x-16">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <div className='flex relative'>
                  {renderIndicator('/')}
                  <Link href='/' className={`relative px-2 py-2 text-lg text-media-black dark:text-media-white ${router.pathname === '/' ? 'font-bold' : 'font-normal'}`} aria-current={router.pathname === '/' ? 'page' : undefined}>Home</Link>
                </div>
                <div className='flex relative'>
                  {renderIndicator('/about')}
                  <Link href='/about' className={`relative px-2 py-2 text-lg text-media-black dark:text-media-white ${router.pathname === '/about' ? 'font-bold' : 'font-normal'}`} aria-current={router.pathname === '/about' ? 'page' : undefined}>About</Link>
                </div>
                <div className='flex relative'>
                  {renderIndicator('/artists')}
                  <Link href='/artists' className={`relative px-2 py-2 text-lg text-media-black dark:text-media-white ${router.pathname === '/artists' ? 'font-bold' : 'font-normal'}`} aria-current={router.pathname === '/artists' ? 'page' : undefined}>Artists</Link>
                </div>
                <div className='flex relative'>
                  {renderIndicator('/news')}
                  <Link href='/news' className={`relative px-2 py-2 text-lg text-media-black dark:text-media-white ${router.pathname === '/news' ? 'font-bold' : 'font-normal'}`} aria-current={router.pathname === '/news' ? 'page' : undefined}>News</Link>
                </div>
                <div className='flex'>
                  <Link href='/contact' className={`rounded-md bg-gradient-to-tr from-indigo-600 to-indigo-500 px-3 py-2 text-lg text-media-white ${router.pathname === '/contact' ? 'font-bold' : 'font-normal hover:drop-shadow-md'}`} aria-current={router.pathname === 'contact' ? 'page' : undefined}>Contact</Link>
                </div>
                <div className='flex items-center justify-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-300'>
                  <div>
                    <button onClick={toggleDarkMode} aria-label="Toggle dark and light mode" className="text-media-black dark:text-media-white">{darkMode ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                      </svg>
                      ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                      </svg>)}
                    </button>
                  </div>
                  <div className='pl-10'>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="z-10 h-screen origin-top-right rounded-md bg-white bg-opacity-10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none space-y-1 dark:bg-indigo-900 dark:bg-opacity-10">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <div className='h-full flex flex-col pt-5'>
            <div className='flex justify-center'>
              {renderIndicator('/')}
              <Link href='/' className={`block px-3 py-3 text-media-black dark:text-media-white ${router.pathname === '/' ? 'font-bold text-2xl' : 'font-normal text-xl'}`} aria-current={router.pathname === '/' ? 'page' : undefined}>Home</Link>
            </div>
            <div className='flex justify-center'>
              {renderIndicator('/about')}
              <Link href='/about' className={`block px-3 py-3 text-media-black dark:text-media-white ${router.pathname === '/about' ? 'font-bold text-2xl' : 'font-normal text-xl'}`} aria-current={router.pathname === '/about' ? 'page' : undefined}>About</Link>
            </div>
            <div className='flex justify-center'>
              {renderIndicator('/artists')}
              <Link href='/artists' className={`block px-3 py-3 text-media-black dark:text-media-white ${router.pathname === '/artists' ? 'font-bold text-2xl' : 'font-normal text-xl'}`} aria-current={router.pathname === '/artists' ? 'page' : undefined}>Artists</Link>
            </div>
            <div className='flex justify-center'>
              {renderIndicator('/news')}
              <Link href='/news' className={`block px-3 py-3 text-media-black dark:text-media-white ${router.pathname === '/news' ? 'font-bold text-2xl' : 'font-normal text-xl'}`} aria-current={router.pathname === '/news' ? 'page' : undefined}>News</Link>
            </div>
            <div className='flex justify-center'>
              {renderIndicator('/contact')}
              <Link href='/contact' className={`block px-3 py-3 text-media-black dark:text-media-white ${router.pathname === '/contact' ? 'font-bold text-2xl' : 'font-normal text-xl'}`} aria-current={router.pathname === '/contact' ? 'page' : undefined}>Contact</Link>
            </div>
            <div className='flex justify-center pt-10'>
              <div className='w-full mx-10 flex justify-center py-5 border-t border-slate-200 dark:border-slate-300'>
                <button onClick={toggleDarkMode} className="flex text-media-black dark:text-media-white">{darkMode ? (<>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg><span className='px-4 text-media-white text-lg'>ダークモード</span>
                </>
                  ) : (<>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg><span className='px-4 text-media-black text-lg'>ライトモード</span>
                  </>
                  )}</button>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='w-full mx-10 flex justify-center pb-6'>
                  <LanguageSwitcherMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};