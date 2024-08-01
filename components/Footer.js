import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
	return (
			<div className="bg-media-black rounded-se-3xl sm:rounded-se-bglg">
                <div className='mx-auto flex max-w-7xl px-4 py-14 sm:px-24 sm:py-24'>
                    <div className='w-full'>
                        <div className='pb-20 sm:pb-16'>
                            <p className='text-media-white font-bold text-3xl pb-1 sm:text-4xl sm:pb-2'>Media Assist</p>
                            <p className='text-media-white text-base font-normal sm:text-2xl sm:font-medium'>みんなの「メディア」を作る会社</p>
                        </div>
                        <div>
                            <p className='hidden text-media-white text-base sm:pb-2 sm:flex'>〒170-6045　東京都豊島区東池袋3-1-1　サンシャイン60 45階</p>
                            <p className='text-media-white text-sm sm:pb-2 sm:hidden'>〒170-6045　東京都豊島区東池袋3-1-1<br />サンシャイン60 45階</p>
                            <p className='text-media-white text-sm sm:text-base'>Tel: (03)5957-7244</p>
                        </div>
                    </div>
                    <div className='w-1/3 flex flex-col items-end sm:w-full sm:justify-center'>
                        <div className='flex flex-col'>
                            {/* Logo visible on laptop and desktop screens */}
                            <div className='hidden sm:flex justify-center'>
                                <Image src='/web-logo-2.svg' alt='logo' width={60} height={60}/>
                            </div>
                            {/* Logo visible on mobile screens */}
                            <div className='flex sm:hidden'>
                                <Image src='/web-logo-2.svg' alt='logo' width={40} height={40}/>
                            </div>
                            {/* Social media logos location for laptop and desktop screens */}
                            <div className='hidden sm:flex justify-center items-center'>
                                <Link href="" aria-label="Find us on LinkedIn" target="_blank" rel="noopener">
                                    <svg className="text-media-white size-12 px-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                                <Link href="" aria-label="Find us on Facebook" target="_blank" rel="noopener">
                                    <svg className="text-media-white size-12 px-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                                <Link href="" aria-label="Find us on YouTube" target="_blank" rel="noopener">
                                    <svg className="text-media-white size-14 px-4" viewBox="0 0 576 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* Social media logos location for mobile screens */}
                <div className=' flex justify-center items-center pt-5 sm:hidden'>
                                <Link href="" aria-label="Find us on LinkedIn" target="_blank" rel="noopener">
                                    <svg className="text-media-white size-12 px-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                                <Link href="" aria-label="Find us on Facebook" target="_blank" rel="noopener">
                                    <svg className="text-media-white size-12 px-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                                <Link href="" aria-label="Find us on YouTube" target="_blank" rel="noopener">
                                    <svg className="text-media-white size-14 px-4" viewBox="0 0 576 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                            </div>
                <div className='text-center pb-8 sm:pb-12'>
                    <p className='text-media-white text-xs'>© Media Assist, All Rights Reserved</p>
                </div>
            </div>
    )
}