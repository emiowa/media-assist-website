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

  return (
    <nav className="bg-gradient-to-tr from-indigo-700 to-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-24">
        
        <div className="relative flex h-20 items-center justify-between">
          <div>
            <Link href='/'>
              <Image src='/web-logo-1.svg' alt='logo' width={100} height={100}/>
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button type="button" onClick={toggleMobileMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-media-white hover:bg-media-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-media-white" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen ? 'true' : 'false'}>
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
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link className={router.pathname === '/' ? 'rounded-md bg-media-black px-3 py-2 text-base font-medium text-media-white' : 'rounded-md px-3 py-2 text-base font-normal text-media-white hover:bg-media-lightpurple hover:text-media-black'} aria-current='page' href='/'>Home</Link>
                <Link className={router.pathname === '/about/about-us' ? 'rounded-md bg-media-black px-3 py-2 text-base font-medium text-media-white' : 'rounded-md px-3 py-2 text-base font-normal text-media-white hover:bg-media-lightpurple hover:text-media-black'} aria-current='page' href='/about/about-us'>About</Link>
                <Link className={router.pathname === '/contact' ? 'rounded-md bg-media-black px-3 py-2 text-base font-medium text-media-white' : 'rounded-md px-3 py-2 text-base font-normal text-media-white hover:bg-media-lightpurple hover:text-media-black'} aria-current='page' href='/contact'>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <Link className={router.pathname === '/' ? 'block rounded-md bg-media-black px-3 py-2 text-base font-medium text-media-white' : 'block rounded-md px-3 py-2 text-base font-normal text-media-white hover:bg-media-lightpurple hover:text-media-black'} aria-current='page' href='/'>Home</Link>
            <Link className={router.pathname === '/about/about-us' ? 'block rounded-md bg-media-black px-3 py-2 text-base font-medium text-media-white' : 'block rounded-md px-3 py-2 text-base font-normal text-media-white hover:bg-media-lightpurple hover:text-media-black'} aria-current='page' href='/about/about-us'>About</Link>
            <Link className={router.pathname === '/contact' ? 'block rounded-md bg-media-black px-3 py-2 text-base font-medium text-media-white' : 'block rounded-md px-3 py-2 text-base font-normal text-media-white hover:bg-media-lightpurple hover:text-media-black'} aria-current='page' href='/contact'>Contact</Link>
        </div>
      </div>
    </nav>
  );
};