import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
	return (
			<div className="bg-media-black rounded-se-3xl sm:rounded-se-bglg dark:bg-indigo-900 dark:rounded-none">
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
                                <span class="[&>svg]:h-5 [&>svg]:w-5">
                                    <Link href="" aria-label="Find us on LinkedIn" target="_blank" rel="noopener">
                                        <svg className="text-media-white size-14 px-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                        </svg>
                                    </Link>
                                </span>
                                <span class="[&>svg]:h-5 [&>svg]:w-5">
                                    <Link href="https://x.com/MediaAssist_PR" aria-label="Find us on X" target="_blank" rel="noopener">
                                        <svg className="text-media-white size-14 px-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                        </svg>
                                    </Link>
                                </span>
                                <span class="[&>svg]:h-5 [&>svg]:w-5">
                                    <Link href="https://bsky.app/profile/mediaassist.co.jp" aria-label="Find us on Bluesky" target="_blank" rel="noopener">
                                        <svg className='text-media-white size-14 px-4' xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 576 512">
                                            <path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"/>
                                        </svg>
                                    </Link>
                                </span>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* Social media logos location for mobile screens */}
                <div className=' flex justify-center items-center pt-5 sm:hidden'>
                    <span class="[&>svg]:h-5 [&>svg]:w-5">
                        <Link href="" aria-label="Find us on LinkedIn" target="_blank" rel="noopener">
                            <svg className="text-media-white size-14 px-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </Link>
                    </span>
                    <span class="[&>svg]:h-5 [&>svg]:w-5">
                        <Link href="https://x.com/MediaAssist_PR" aria-label="Find us on X" target="_blank" rel="noopener">
                            <svg className="text-media-white size-14 px-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </Link>
                    </span> 
                    <span class="[&>svg]:h-5 [&>svg]:w-5">
                        <Link href="https://bsky.app/profile/mediaassist.co.jp" aria-label="Find us on Bluesky" target="_blank" rel="noopener">
                            <svg className='text-media-white size-14 px-4' xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 576 512">
                                <path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"/>
                            </svg>
                        </Link>
                    </span>    
                </div>
                <div className='text-center pb-8 sm:pb-12'>
                    <p className='text-media-white text-xs'>© Media Assist, All Rights Reserved</p>
                </div>
            </div>
    )
}