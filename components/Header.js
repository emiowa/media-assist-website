import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const router = useRouter();

  const renderIndicator = (path) => {
    if (router.pathname === path) {
      return (
        <img
          src="/cat-paw-1.svg"
          alt="Cat paw"
          className="h-full sm:mx-auto my-auto w-5"
        />
      );
    }
    return null;
  };

  return (
    <nav className='fixed top-0 left-0 bg-white bg-opacity-80 backdrop-blur-md z-10 w-full'>
      <div className="mx-auto max-w-7xl px-2 sm:px-0">
        
        <div className="relative flex h-20 items-center justify-between">
          <div>
            <Link href='/'>
              <Image src='/web-logo-3.svg' alt='logo' width={90} height={90}/>
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button type="button" onClick={toggleMobileMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-media-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-media-white" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen ? 'true' : 'false'}>
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
              {/* Icon when menu is open */}
              <svg className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-14">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <div className='flex'>
                  {renderIndicator('/')}
                  <Link href='/' className={`px-3 py-2 text-lg text-media-black ${router.pathname === '/' ? 'font-bold' : 'font-normal'}`} aria-current={router.pathname === '/' ? 'page' : undefined}>Home</Link>
                </div>
                <div className='flex'>
                  {renderIndicator('/about/about-us')}
                  <Link href='/about/about-us' className={`px-3 py-2 text-lg text-media-black ${router.pathname === '/about/about-us' ? 'font-bold' : 'font-normal'}`} aria-current={router.pathname === '/about/about-us' ? 'page' : undefined}>About</Link>
                </div>
                <div className='flex'>
                  <Link href='/contact' className={`rounded-md bg-indigo-600 px-3 py-2 text-lg text-media-white ${router.pathname === '/contact' ? 'font-bold' : 'font-normal hover:drop-shadow-md'}`} aria-current={router.pathname === 'contact' ? 'page' : undefined}>Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="z-10 mt-2 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <div className='flex justify-center'>
              {renderIndicator('/')}
              <Link href='/' className={`block px-3 py-2 text-lg text-media-black ${router.pathname === '/' ? 'font-bold' : 'font-normal'}`} aria-current={router.pathname === '/' ? 'page' : undefined}>Home</Link>
            </div>
            <div className='flex justify-center'>
              {renderIndicator('/about/about-us')}
              <Link href='/about/about-us' className={`block px-3 py-2 text-lg text-media-black ${router.pathname === '/about/about-us' ? 'font-bold' : 'font-normal'}`} aria-current={router.pathname === '/about/about-us' ? 'page' : undefined}>About</Link>
            </div>
            <div className='flex justify-center'>
              {renderIndicator('/contact')}
              <Link href='/contact' className={`block px-3 py-2 text-lg text-media-black ${router.pathname === '/contact' ? 'font-bold' : 'font-normal'}`} aria-current={router.pathname === '/contact' ? 'page' : undefined}>Contact</Link>
            </div>
        </div>
      </div>
    </nav>
  );
};