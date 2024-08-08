import React from 'react';
import Layout from "../components/Layout"
import Image from 'next/image';
import {useRouter} from 'next/router';
import { useEffect, useState, useRef } from 'react';
import useIntersectionObserver from '../components/intersection-observer';
import en from '../locales/en';
import sp from '../locales/sp';
import jp from '../locales/jp';


export default function Home(){
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'jp' ? jp : (locale === 'en' ? en : sp);

    const aboutUsPageButton = () => {
        router.push('/about/about-us');
    }

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined'){
            const handleResize = () => {
                setIsLargeScreen(window.innerWidth >= 768);
            };
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const slideInRightRef1 = useRef(null);
    const fadeInUpRef1 = useRef(null);
    const fadeInUpRef2 = useRef(null);
    const fadeInUpRef3 = useRef(null);

    // const animationClassForSlideRight = isLargeScreen ? 'animateSlideFromRight' : 'animateFadeFromDown';
    // const animationClassForSlideLeft = isLargeScreen ? 'animateSlideFromLeft' : 'animateFadeFromDown';

    useIntersectionObserver([slideInRightRef1], isLargeScreen ? 'animateSlideFromRight' : 'animateFadeFromDown');
    useIntersectionObserver([fadeInUpRef1, fadeInUpRef2, fadeInUpRef3], 'animateFadeFromDown');

    return(
        <div>
            <Layout>
                <div className='dark:bg-media-black'>
                    <div className='h-screen flex flex-col justify-center items-center'>
                        <p className='opacity-0 text-media-black font-black text-4xl pb-2 sm:text-6xl sm:pb-4 animateFadeFromDown dark:text-media-white'>Media Assist</p>
                        <p className='opacity-0 text-media-black font-medium text-xl sm:text-5xl animateFadeFromDownDelay dark:text-media-white'>みんなの「メディア」を作る会社</p>
                    </div>
                    <div className='bg-gradient-to-tr from-indigo-600 to-indigo-500 rounded-ss-3xl sm:rounded-ss-bglg animateNotActive dark:bg-gradient-to-tr dark:from-indigo-900 dark:to-indigo-800' ref={slideInRightRef1}>
                        <div className='text-center pb-10 pt-14 sm:pb-10 sm:pt-20'>
                            <p className='text-media-white font-bold text-2xl pb-1 sm:text-5xl sm:pb-4'>私たちがお手伝いします</p>
                            <p className='text-media-white font-medium text-2xl sm:text-5xl sm:font-medium'>サービスについて</p>
                        </div>
                        <div className='mx-auto max-w-7xl px-3 pb-10 sm:px-24 sm:pb-20'>
                            <div className='sm:flex justify-center'>
                                <div className='px-1 py-2 drop-shadow-lg sm:px-4 sm:py-5'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-normal text-lg leading-normal text-center sm:font-medium sm:text-xl dark:bg-gradient-to-tr dark:from-indigo-600 dark:to-indigo-500 dark:text-media-white'>映像制作・配信に掛かる企画、<br />立案、実施、運営及びそれらに<br />関するコンサルティング業務</p>
                                </div>
                                <div className='px-1 py-2 drop-shadow-lg sm:px-4 sm:py-5'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-normal text-lg leading-normal text-center sm:font-medium sm:text-xl dark:bg-gradient-to-tr dark:from-indigo-600 dark:to-indigo-500 dark:text-media-white'>情報/電子機器関連システム<br />(ハードウェア、ソフトウェア)<br />事務用機器の導入支援</p>
                                </div>
                            </div>
                            <div className='sm:flex justify-center items-center'>
                                <div className='px-1 py-2 sm:px-4 sm:py-1 drop-shadow-lg'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-normal text-lg text-center sm:font-medium sm:text-xl dark:bg-gradient-to-tr dark:from-indigo-600 dark:to-indigo-500 dark:text-media-white'>Webサイト運営支援</p>
                                </div>
                                <div className='px-1 py-2 sm:px-4 sm:py-1 drop-shadow-lg'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-normal text-lg leading-normal text-center sm:font-medium sm:text-xl dark:bg-gradient-to-tr dark:from-indigo-600 dark:to-indigo-500 dark:text-media-white'>映像制作会社のお見積り相談、<br />ご紹介 等</p>
                                </div>
                                <div className='px-1 py-2 sm:px-4 sm:py-1 drop-shadow-lg'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-normal text-lg text-center sm:font-medium sm:text-xl dark:bg-gradient-to-tr dark:from-indigo-600 dark:to-indigo-500 dark:text-media-white'>ITヘルプデスク支援</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto max-w-7xl px-3 pt-20 pb-36 sm:px-24'>
                        <div className='pb-20 animateNotActive' ref={fadeInUpRef1}>
                            <p className='text-media-black font-bold text-3xl pb-2 sm:text-5xl sm:pb-4 dark:text-media-white'>Media Assistについて</p>
                            <p className='text-media-black text-base font-normal leading-loose dark:text-media-white'>私たちメディアアシストは、教育/研修向けの映像制作やその配信のご相談を通じて皆さまの事業の支援を行う会社として誕生しました。
                            映像のニーズが高まる中、「どうしていいのかわからない」という事業者さまも多いのではないでしょうか。<br />殊に、教育/研修向けコンテンツについては、丁寧・正確かつ効果のある内容が求められます。そのため、どの映像制作業者さんにお話をするか迷いがあったり、撮影費用の妥当性や依頼の仕方など、ご不明な点も多いとご相談をいただきます。弊社では、そのような事業者の皆さまのご相談に応じ、多数の関係先を通じ企画を実現するようにバックアップを行って参ります。</p>
                        </div>
                        {/* <h1>{t.hello}</h1> */}
                        <div className='animateNotActive' ref={fadeInUpRef2}>
                            <p className='text-media-black text-xl font-medium sm:pb-6 sm:text-3xl dark:text-media-white'>SDGs ゴール</p>
                            <div className='sm:flex'>
                                {/* Image of SDG4 goal for laptop and desktop screens */}
                                <div className='hidden justify-center sm:flex sm:items-center'>
                                    <Image
                                        src='/E_WEB_04.png'
                                        alt='Goal 4 SDGs'
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className='sm:px-10'>
                                    <p className='text-media-black text-base font-medium leading-loose pb-3 dark:text-media-white'>Goal 4 - 質の高い教育をみんなに</p>
                                    {/* Image of SDG4 goal for mobile screens */}
                                    <div className='flex justify-center pb-3 sm:hidden'>
                                        <Image
                                            src='/E_WEB_04.png'
                                            alt='Goal 4 SDGs'
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <p className='text-media-black text-base font-normal leading-loose dark:text-media-white'>弊社においては、デジタル映像を媒体とした教育コンテンツの支援を行い、判りやすい内容をあらゆるデバイスを経由して届く環境構築を試行します。また、教育という観点のみならず、人それぞれの求めるタイプに応じた情報へのアクセスを、協業のパートナー各社とともに提案していきます。</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center pt-14 animateNotActive' ref={fadeInUpRef3}>
                            <button type='button' className='relative inline-flex items-center justify-center rounded-md py-3 px-8 text-lg text-media-black border border-media-black font-medium hover:text-media-white hover:drop-shadow-md hover:border-indigo-600 hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-media-white dark:text-media-white dark:border-media-white dark:hover:border-indigo-600' onClick={aboutUsPageButton}>もっと見る</button>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}