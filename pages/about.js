import React from 'react';
import Layout from "../components/Layout"
import Image from "next/image"
import { useEffect, useState, useRef } from 'react';
import useIntersectionObserver from '../components/intersection-observer';
import lottie from 'lottie-web';
import useTranslation from '../hooks/useTranslation';

export default function AboutUs(){
    const { t } = useTranslation();

    let animation1ContainerLight = useRef(null);
    let animation1ContainerDark = useRef(null);

    useEffect(() => {
        const animLight = lottie.loadAnimation({
            container: animation1ContainerLight.current,
            render: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/MA-website-animation1json.json'
        })

        return () => animLight.destroy();
    }, [])

    useEffect(() => {
        const animDark = lottie.loadAnimation({
            container: animation1ContainerDark.current,
            render: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/MA-website-animation1json-dark-version.json'
        })

        return () => animDark.destroy();
    }, [])

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

    const slideInLeftRef1 = useRef(null);
    const slideInRightRef2 = useRef(null);
    const fadeInUpRef4 = useRef(null);

    // const animationClassForSlideRight = isLargeScreen ? 'animateSlideFromRight' : 'animateFadeFromDown';
    // const animationClassForSlideLeft = isLargeScreen ? 'animateSlideFromLeft' : 'animateFadeFromDown';

    useIntersectionObserver([slideInLeftRef1], isLargeScreen ? 'animateSlideFromLeft' : 'animateFadeFromDown');
    useIntersectionObserver([slideInRightRef2], isLargeScreen ? 'animateSlideFromRight' : 'animateFadeFromDown');
    useIntersectionObserver([fadeInUpRef4], 'animateFadeFromDown');

    return(
        <div>
            <Layout>
                <div className='dark:bg-media-black'>
                    <div className='mx-auto max-w-7xl px-3 md:px-10 lg:px-24'>
                        <div className="pt-32 lg:h-screen lg:grid lg:grid-cols-2 lg:items-center lg:pt-10 flex-1">
                            <div>
                                <p className="opacity-0 text-media-black text-3xl font-bold pb-2 md:text-5xl md:pb-4 animateFadeFromDown dark:text-media-white">Media Assist</p>
                                <p className='opacity-0 text-media-black font-medium text-xl pb-6 md:text-3xl animateFadeFromDown dark:text-media-white'>{t('homePage.indexSlogan')}</p>
                                <p className='opacity-0 text-media-black text-base font-normal leading-loose animateFadeFromDownDelay dark:text-media-white' dangerouslySetInnerHTML={{__html: t('aboutPage.aboutIntro')}} />
                            </div>
                            <div className="flex justify-center animateFadeFromDown lg:justify-end">
                                {/* Animation for light mode */}
                                <div ref={animation1ContainerLight} className="w-11/12 md:max-w-lg dark:hidden" />
                                {/* Animation for dark mode */}
                                <div ref={animation1ContainerDark} className="hidden w-11/12 md:max-w-lg dark:block" />
                            </div>
                        </div>
                        <div className="bg-gradient-to-tr from-indigo-200 to-indigo-100 rounded-3xl drop-shadow-lg py-10 px-3 md:px-16 md:rounded-bglg animateNotActive dark:bg-gradient-to-tr dark:from-indigo-900 dark:to-indigo-800" ref={slideInLeftRef1}>
                            <p className='text-media-black text-2xl font-bold pb-4 text-center md:text-4xl md:pb-8 dark:text-media-white'>{t('aboutPage.aboutCompanyTitle')}</p>
                            <div className="flex flex-col items-center text-center md:text-left">
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>{t('aboutPage.aboutCompanyNameTitle')}</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>{t('aboutPage.aboutCompanyNameAnswer')}</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>{t('aboutPage.aboutCompanyOwnerTitle')}</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>{t('aboutPage.aboutCompanyOwnerAnswer')}</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>{t('aboutPage.aboutCompanyLocationTitle')}</p>
                                    {/* Text for laptop and desktop screens */}
                                    <p className='hidden md:flex md:text-media-black md:text-lg md:pl-2 dark:text-media-white'>{t('aboutPage.aboutCompanyLocationAnswer')}</p>
                                    {/* Text for mobile screens */}
                                    <p className='text-media-black text-lg md:hidden dark:text-media-white' dangerouslySetInnerHTML={{__html: t('aboutPage.aboutCompanyLocationAnswerMobile')}} />
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>{t('aboutPage.aboutCompanyCapitalTitle')}</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>{t('aboutPage.aboutCompanyCapitalAnswer')}</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>{t('aboutPage.aboutCompanyFoundationTitle')}</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>{t('aboutPage.aboutCompanyFoundationAnswer')}</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>{t('aboutPage.aboutCompanyTeamMembersTitle')}</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>{t('aboutPage.aboutCompanyTeamMembersAnswer')}</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>{t('aboutPage.aboutCompanyPartnersTitle')}</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>{t('aboutPage.aboutCompanyPartnersAnswer')}</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>{t('aboutPage.aboutCompanyAssociatedTitle')}</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>{t('aboutPage.aboutCompanyAssociatedAnswer')}</p>
                                </div>
                                <div className='flex flex-col leading-loose pt-12'>
                                    <p className='text-left font-medium text-media-black text-lg md:text-center dark:text-media-white'>{t('aboutPage.aboutCompanyHistoryTitle')}</p>
                                    <p className='text-left text-media-black text-lg pl-5 md:text-center dark:text-media-white'>{t('aboutPage.aboutCompanyHistory2016')}</p>
                                    <p className='text-left text-media-black text-lg pl-5 md:text-center dark:text-media-white'>{t('aboutPage.aboutCompanyHistory2021')}</p>
                                    <p className='text-left text-media-black text-lg pl-5 md:text-center dark:text-media-white'>{t('aboutPage.aboutCompanyHistory20244')}</p>
                                    <p className='text-left text-media-black text-lg pl-5 md:text-center dark:text-media-white'>{t('aboutPage.aboutCompanyHistory20246')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-20 pb-36 animateNotActive" ref={fadeInUpRef4}>
                            <p className='text-media-black text-2xl font-bold md:pb-6 md:text-3xl dark:text-media-white'>{t('aboutPage.aboutSdgTitle')}</p>
                            <div className='md:flex'>
                                {/* Image of SDG4 goal for laptop and desktop screens */}
                                <div className='hidden justify-center md:flex md:items-center'>
                                    <Image
                                        src='/E_WEB_04.png'
                                        alt='Goal 4 SDGs'
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className='md:ps-10'>
                                    <p className='text-media-black font-bold leading-loose pb-3 dark:text-media-white'>{t('aboutPage.aboutSdgSubtitle')}</p>
                                    {/* Image of SDG4 goal for mobile screens */}
                                    <div className='flex justify-center pb-3 md:hidden'>
                                        <Image
                                            src='/E_WEB_04.png'
                                            alt='Goal 4 SDGs'
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <p className='text-media-black font-normal leading-loose dark:text-media-white'>{t('aboutPage.aboutSdgParagraph')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Layout>
        </div>
    )
}