import React from 'react';
import Layout from "../components/Layout"
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { createRef, useEffect, useState, useRef } from 'react';
import useIntersectionObserver from '../components/intersection-observer';
import ArtistsCardsSmall from '../components/ArtistsCardsSmall';
import { getAllPostsData } from '../lib/posts';
import NewsArticles from '../components/NewsArticles';
import { serialize } from 'next-mdx-remote/serialize';
import lottie from 'lottie-web';

// import jp from '../public/locales/jp/translation.json';
// import en from '../public/locales/en/translation.json';
// import sp from '../public/locales/sp/translation.json';



export async function getStaticProps() {
  const allPostsData = getAllPostsData();

  const posts = await Promise.all(allPostsData.map(async post => {
    const mdxSource = await serialize(post.content);
    return {
      ...post,
      content: mdxSource,
    };
  }));
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const lastThreePosts = posts.slice(0, 3);

  return {
    props: {
      allPostsData: lastThreePosts,
    },
  };
}

export default function Home({allPostsData}){
    const router = useRouter();

    let animation3ContainerLight = useRef(null);
    let animation3ContainerDark = useRef(null);

    useEffect(() => {
        const animLight = lottie.loadAnimation({
            container: animation3ContainerLight.current,
            render: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/MA-website-animation3json.json'
        })

        return () => animLight.destroy();
    }, [])

    useEffect(() => {
        const animDark = lottie.loadAnimation({
            container: animation3ContainerDark.current,
            render: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/MA-website-animation3json-dark-version.json'
        })

        return () => animDark.destroy();
    }, [])
    // const {locale} = router;
    // const [translations, setTranslations] = useState({});

    // useEffect(() => {
    //     const getTranslations = () => {
    //         switch (locale){
    //             case 'jp':
    //                 return jp;
    //             case 'en':
    //                 return en;
    //             case 'sp':
    //                 default:
    //                     return sp;
    //         }
    //     };

    //     setTranslations(getTranslations());
    // }, [locale]);

    const recentEventsRef = useRef(null);
    const postsRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (recentEventsRef.current && postsRef.current) {
          const recentEventsRect = recentEventsRef.current.getBoundingClientRect();
          const postsRect = postsRef.current.getBoundingClientRect();
  
          // Check if the recent events section is visible and if the posts section is not fully visible
          if (recentEventsRect.top <= 96 && postsRect.bottom > 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const artistsPageButton = () => {
        router.push('/artists');
    }

    const newsPageButton = () => {
        router.push('/news');
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
                    <div className='h-screen flex flex-col justify-center items-center sm:pt-36'>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='opacity-0 text-media-black font-bold text-4xl pb-2 animateFadeFromDown sm:text-6xl dark:text-media-white'>Media Assist</p>
                            {/* <p className='opacity-0 text-media-black font-medium text-xl sm:text-5xl animateFadeFromDownDelay dark:text-media-white'>{translations.slogan}</p> */}
                            <p className='opacity-0 text-media-black font-medium text-xl sm:text-3xl animateFadeFromDownDelay dark:text-media-white'>みんなの「メディア」を作る会社</p>
                        </div>
                        <div className='flex justify-center items-center pt-10 sm:pt-0'>
                            {/* Animation for light mode */}
                            <div ref={animation3ContainerLight} className="hidden sm:block mx-auto sm:w-9/12 dark:hidden" />
                            {/* Animation for dark mode */}
                            <div ref={animation3ContainerDark} className="hidden mx-auto sm:w-9/12 dark:sm:block" />
                        </div>
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
                    <div className='mx-auto max-w-7xl px-3 pt-10 pb-24 sm:pt-36 sm:pb-36 sm:px-24'>
                        <div className='pb-20 animateNotActive' ref={fadeInUpRef1}>
                            <div>
                                <h2 className='text-media-black text-2xl font-medium pb-6 sm:text-3xl dark:text-media-white'>
                                    <button onClick={artistsPageButton} className='flex items-center text-media-black hover:text-indigo-700 focus:outline-none dark:text-media-white dark:hover:text-indigo-500'>
                                        <span className='flex items-center'>
                                            <p className='m-0 font-bold'>Artists</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="size-6 ml-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                            </div>
                            <div className='grid grid-cols-1 gap-y-10 justify-items-center sm:grid-cols-3 sm:gap-y-24'>
                                <ArtistsCardsSmall
                                    illustration="/OsakaComiccon-tokitokoro2-(350dpi).jpg"
                                    artistName="tokitokoro"
                                />

                                <ArtistsCardsSmall
                                    illustration="/OsakaComiccon-tokitokoro2-(350dpi).jpg"
                                    artistName="tokitokoro"
                                />

                                <ArtistsCardsSmall
                                    illustration="/OsakaComiccon-tokitokoro2-(350dpi).jpg"
                                    artistName="tokitokoro"
                                />
                            </div>
                        </div>
                        <div className='animateNotActive' ref={fadeInUpRef2}>
                            <div>
                                <h2 className='text-media-black text-2xl font-medium pb-6 sm:text-3xl dark:text-media-white'>
                                    <button onClick={newsPageButton} className='flex items-center text-media-black hover:text-indigo-700 focus:outline-none dark:text-media-white dark:hover:text-indigo-500'>
                                        <span className='flex items-center'>
                                            <p className='m-0 font-bold'>News</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="size-6 ml-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                            </div>
                            <div className='container mx-auto'>
                                <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-16'>
                                    <div className='col-span-2' ref={postsRef}>
                                        {allPostsData.map(({ id, profilePicture, authorName, postDate, titleArticle, content, summary, hashtagCategory, linkHref }) => (
                                            <div key={id}>
                                                <NewsArticles
                                                    profilePicture={profilePicture}
                                                    authorName={authorName}
                                                    postDate={postDate}
                                                    titleArticle={titleArticle}
                                                    summary={summary}
                                                    linkHref={`/news?id=${id}#${id}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`hidden h-screen sm:block ${isSticky ? 'sticky top-24' : ''}`} ref={recentEventsRef}>
                                        <div className='rounded-2xl drop-shadow-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 h-5/6 px-5 py-10'>
                                            <h3 className='font-semibold text-2xl text-media-black'>今後のイベント</h3>
                                        </div> 
                                    </div>                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}