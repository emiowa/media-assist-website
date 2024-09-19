import React from 'react';
import Layout from "../components/Layout"
import ContactForm from '../components/ContactForm';
import { useEffect, useRef } from 'react';
import useTranslation from '../hooks/useTranslation';

const useIntersectionObserver = (elements, animationClass) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animationClass);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      elements.forEach((element) => {
        if (element.current) {
          observer.observe(element.current);
        }
      });
  
      return () => {
        elements.forEach((element) => {
          if (element.current) {
            observer.unobserve(element.current);
          }
        });
      };
    }, [elements, animationClass]);
  };

export default function Contact(){
    const { t } = useTranslation();

    const pdfButton = () => {
        if (typeof window !== 'undefined'){
            window.open('/privacy-policy.pdf', '_blank');
        }
      };

    const fadeInUpRef5 = useRef(null);
    const fadeInUpRef6 = useRef(null);
    const fadeInUpRef7 = useRef(null);
    const fadeInUpRef8 = useRef(null);
    const fadeInUpRef9 = useRef(null);

    useIntersectionObserver([fadeInUpRef5, fadeInUpRef6, fadeInUpRef7, fadeInUpRef8, fadeInUpRef9], 'animateFadeFromDown');

    return(
        <div>
            <Layout>
                <div className='dark:bg-media-black'>
                    <div className='mx-auto max-w-7xl px-3 md:px-10 xl:px-24'>
                        <div className='pt-32 md:my-auto md:h-screen md:flex md:flex-col md:justify-center'>
                            <div className='opacity-0 text-center animateFadeFromDown'>
                                <p className="text-media-black text-2xl font-bold pb-2 md:text-5xl md:pb-4 md:pt-10 dark:text-media-white">{t('contactPage.contactTitle')}</p>
                                <p className='text-media-black text-xl font-medium pb-8 md:text-4xl md:pb-12 dark:text-media-white'>{t('contactPage.contactSubtitle')}</p>
                            </div>
                            <div className='opacity-0 mx-auto w-full bg-gradient-to-tr from-indigo-100 to-indigo-200 drop-shadow-lg rounded-xl py-10 lg:w-4/5 lg:rounded-bglg animateFadeFromDownDelay dark:bg-gradient-to-tr dark:from-indigo-900 dark:to-indigo-800'>
                                <div className='md:grid md:grid-cols-2 md:mx-auto'>
                                    <div className='flex flex-col justify-center items-center md:items-start md:mx-auto'>
                                        <div className='pb-8 text-center md:text-start md:pb-10'>
                                            <p className='text-media-black font-medium text-xl md:text-2xl dark:text-media-white'>{t('contactPage.contactIntroSubtitle')}</p>
                                            <p className='text-media-black font-bold text-2xl md:text-4xl dark:text-media-white'>{t('contactPage.contactIntroTitle')}</p>
                                        </div>
                                        <div className='pb-6 text-center md:text-start md:pb-10'>
                                            <p className='text-media-black text-base md:text-lg dark:text-media-white'>{t('contactPage.contactInformation1')}</p>
                                            <p className='text-media-black text-base md:text-lg dark:text-media-white'>{t('contactPage.contactInformation2')}</p>
                                        </div>
                                        <div className='pb-10 text-center md:text-start md:pb-0'>
                                            <p className='text-media-black text-base md:text-lg dark:text-media-white'>{t('contactPage.contactInformation3')}</p>
                                            <p className='text-media-black text-base md:text-lg dark:text-media-white'>{t('contactPage.contactInformation4')}</p>
                                            <p className='text-media-black text-base md:text-lg dark:text-media-white'>inquiry@icds-media.co.jp</p>
                                        </div>
                                    </div>
                                    {/* Button for laptop and desktop screens */}
                                    <div className='hidden md:flex md:m-auto'>
                                        <button type='button' onClick={pdfButton} className='relative inline-flex items-center justify-center rounded-md py-3 px-8 text-lg text-media-black border border-media-black font-medium hover:text-media-white hover:drop-shadow-md hover:border-indigo-600 hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-media-white dark:text-media-white dark:border-media-white dark:hover:border-indigo-600' dangerouslySetInnerHTML={{__html: t('contactPage.contactIntroButton')}} />
                                    </div>
                                    {/* Button for mobile screens */}
                                    <div className='flex justify-center md:hidden'>
                                        <button type='button' onClick={pdfButton} className='relative inline-flex items-center justify-center rounded-md py-3 px-8 text-lg text-media-black border border-media-black font-medium hover:text-media-white hover:drop-shadow-md hover:border-indigo-600 hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-media-white dark:text-media-white dark:border-media-white dark:hover:border-indigo-600' dangerouslySetInnerHTML={{__html: t('contactPage.contactIntroButton')}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:grid md:grid-cols-4 md:gap-4'>
                            <div className='col-start-1 col-span-2 flex flex-col drop-shadow-lg animateNotActive' ref={fadeInUpRef5}>
                                <div className='bg-gradient-to-tr from-indigo-600 to-indigo-500 w-20 h-20 rounded-full mx-auto translate-y-10'>
                                    <div className='h-full flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWith="1" stroke="currentColor" className="text-media-white size-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='border border-indigo-600 bg-white rounded-xl flex-grow flex flex-col dark:bg-media-black dark:border-media-white'>
                                    <div className='px-3 pb-5 md:px-5 flex-grow'>
                                        <p className='text-media-black text-lg font-medium text-center pb-5 pt-16 md:text-xl dark:text-media-white'>{t('contactPage.contactPolicy1Title')}</p>
                                        <p className='text-media-black text-base leading-loose dark:text-media-white' dangerouslySetInnerHTML={{__html: t('contactPage.contactPolicy1Paragraph')}} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-start-3 col-span-2 flex flex-col drop-shadow-lg animateNotActive' ref={fadeInUpRef6}>
                                <div className='bg-gradient-to-tr from-indigo-600 to-indigo-500 w-20 h-20 rounded-full mx-auto translate-y-10'>
                                    <div className='h-full flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWith="1" stroke="currentColor" className="text-media-white size-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='border border-indigo-600 bg-white rounded-xl flex-grow flex flex-col dark:bg-media-black dark:border-media-white'>
                                    <div className='px-3 pb-5 md:px-5 flex-grow'>
                                        {/* Title for laptop and desktop screens */}
                                        <p className='hidden md:text-center md:flex md:text-media-black md:font-medium md:justify-center md:pb-5 md:pt-16 md:text-xl dark:text-media-white'>{t('contactPage.contactPolicy2Title')}</p>
                                        {/* Title for mobile screens */}
                                        <p className='text-media-black text-lg font-medium text-center pb-5 pt-16 md:hidden dark:text-media-white'>{t('contactPage.contactPolicy2TitleMobile')}</p>
                                        <p className='text-media-black text-base leading-loose dark:text-media-white' dangerouslySetInnerHTML={{__html: t('contactPage.contactPolicy2Paragraph')}} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-start-1 col-span-2 flex flex-col drop-shadow-lg animateNotActive' ref={fadeInUpRef7}>
                                <div className='bg-gradient-to-tr from-indigo-600 to-indigo-500 w-20 h-20 rounded-full mx-auto translate-y-10'>
                                    <div className='h-full flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWith="1" stroke="currentColor" className="text-media-white size-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='border border-indigo-600 bg-white rounded-xl flex-grow flex flex-col dark:bg-media-black dark:border-media-white'>
                                    <div className='px-3 pb-5 md:px-5 flex-grow'>
                                        {/* Title for laptop and desktop screens */}
                                        <p className='hidden md:text-center md:flex md:text-media-black md:font-medium md:justify-center md:pb-5 md:pt-16 md:text-xl dark:text-media-white'>{t('contactPage.contactPolicy3Title')}</p>
                                        {/* Title for mobile screens */}
                                        <p className='text-media-black text-lg font-medium text-center pb-5 pt-16 md:hidden dark:text-media-white'>{t('contactPage.contactPolicy3TitleMobile')}</p>
                                        <p className='text-media-black text-base leading-loose dark:text-media-white' dangerouslySetInnerHTML={{__html: t('contactPage.contactPolicy3Paragraph')}} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-start-3 col-span-2 flex flex-col drop-shadow-lg animateNotActive' ref={fadeInUpRef8}>
                                <div className='bg-gradient-to-tr from-indigo-600 to-indigo-500 w-20 h-20 rounded-full mx-auto translate-y-10'>
                                    <div className='h-full flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWith="1" stroke="currentColor" className="text-media-white size-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='border border-indigo-600 bg-white rounded-xl flex-grow flex flex-col dark:bg-media-black dark:border-media-white'>
                                    <div className='px-3 pb-5 md:px-5 flex-grow'>
                                        <p className='text-media-black text-lg font-medium text-center pb-5 pt-16 md:text-xl dark:text-media-white'>{t('contactPage.contactPolicy4Title')}</p>
                                        <p className='text-media-black text-base leading-loose dark:text-media-white' dangerouslySetInnerHTML={{__html: t('contactPage.contactPolicy4Paragraph')}} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-start-2 col-span-2 drop-shadow-lg animateNotActive' ref={fadeInUpRef9}>
                                <div className='bg-gradient-to-tr from-indigo-600 to-indigo-500 w-20 h-20 rounded-full mx-auto translate-y-10'>
                                    <div className='h-full flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWith="1" stroke="currentColor" className="text-media-white size-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='border border-indigo-600 bg-white rounded-xl dark:bg-media-black dark:border-media-white'>
                                    <div className='px-3 pb-5 md:px-5'>
                                        {/* Title for laptop and desktop screens */}
                                        <p className='hidden md:text-center md:flex md:text-media-black md:font-medium md:justify-center md:pb-5 md:pt-16 md:text-xl dark:text-media-white'>{t('contactPage.contactPolicy5Title')}</p>
                                        {/* Title for mobile screens */}
                                        <p className='text-media-black text-lg font-medium text-center pb-5 pt-16 md:hidden dark:text-media-white'>{t('contactPage.contactPolicy5TitleMobile')}</p>
                                        <p className='text-media-black text-base leading-loose dark:text-media-white' dangerouslySetInnerHTML={{__html: t('contactPage.contactPolicy5Paragraph')}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-28'>
                            <p className='text-media-black font-medium text-2xl pb-6 md:text-3xl dark:text-media-white'>{t('contactPage.contactFormTitle')}</p>
                            <p className='text-media-black leading-loose pb-12 dark:text-media-white' dangerouslySetInnerHTML={{__html: t('contactPage.contactFormIntro')}} />
                            {/* Inquiry section for desktop screens */}
                            <div className='hidden xl:pb-36 xl:grid xl:grid-cols-2 xl:gap-10'>
                                <div className='col-start-1 col-span-1 xl:pb-0'>
                                    <ContactForm />
                                </div>
                                <div className='hidden xl:grid xl:col-start-2 xl:col-span-1'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.2377579138565!2d139.71831197764615!3d35.72903935196922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6f134fd653%3A0x51eb1d42c77222c2!2sSunshine%20City!5e0!3m2!1ses!2sjp!4v1721983450406!5m2!1ses!2sjp" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            {/* Inquiry section for laptop screens */}
                            <div className='hidden lg:pb-36 lg:grid lg:grid-cols-2 lg:gap-10 xl:hidden'>
                                <div className='col-start-1 col-span-1 lg:pb-0'>
                                    <ContactForm />
                                </div>
                                <div className='hidden lg:grid lg:col-start-2 lg:col-span-1 lg:place-content-center'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.888082932333!2d139.71696657568938!3d35.728970872571885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6f134fd653%3A0x51eb1d42c77222c2!2sSunshine%20City!5e0!3m2!1ses!2sjp!4v1722303158518!5m2!1ses!2sjp" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            {/* Inquiry section for mobile screens */}
                            <div className='pb-36 lg:hidden'>
                                <div className='flex justify-center pb-12'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.888082932333!2d139.71696657568938!3d35.728970872571885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6f134fd653%3A0x51eb1d42c77222c2!2sSunshine%20City!5e0!3m2!1ses!2sjp!4v1722303158518!5m2!1ses!2sjp" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className='col-start-1 col-span-1'>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}