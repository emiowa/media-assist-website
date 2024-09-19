import React from 'react';
import Layout from "../components/Layout"
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { createRef, useEffect, useState, useRef } from 'react';
import useIntersectionObserver from '../components/intersection-observer';
import { getAllPostsData } from '../lib/posts';
import { getAllArtistsData } from '../lib/artists';
import NewsArticles from '../components/NewsArticles';
import { serialize } from 'next-mdx-remote/serialize';
import lottie from 'lottie-web';
import ArtistsCards from '../components/ArtistsCards';
import Modal from '../components/Modal';
import useTranslation from '../hooks/useTranslation';



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

  const allArtistsData = getAllArtistsData();
  const featuredArtists = allArtistsData.filter(artist => 
      [1, 2, 3].includes(Number(artist.id)) // Specify which artist IDs to display
  ).slice(0, 6); // Limit the number of artists

  return {
    props: {
      allPostsData: lastThreePosts,
      featuredArtists,
    },
  };
}

export default function Home({allPostsData, featuredArtists}){
    
    const router = useRouter();
    const { t } = useTranslation();

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

    useIntersectionObserver([slideInRightRef1], isLargeScreen ? 'animateSlideFromRight' : 'animateFadeFromDown');
    useIntersectionObserver([fadeInUpRef1, fadeInUpRef2, fadeInUpRef3], 'animateFadeFromDown');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState(null);
  
    const openModal = (artist) => {
      setSelectedArtist(artist);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedArtist(null);
    };
    

    return(
        <div>
            <Layout>
                <div className='dark:bg-media-black'>
                    <div className='h-screen flex flex-col justify-center items-center md:pt-36'>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-media-black font-bold text-4xl pb-2 md:text-6xl dark:text-media-white'>Media Assist</p>
                            <p className='text-media-black font-medium text-xl md:text-3xl dark:text-media-white'>{t('homePage.indexSlogan')}</p>
                        </div>
                        <div className='flex justify-center items-center pt-10 md:pt-0'>
                            {/* Animation for light mode */}
                            <div ref={animation3ContainerLight} className="hidden md:block mx-auto md:w-8/12 dark:hidden" />
                            {/* Animation for dark mode */}
                            <div ref={animation3ContainerDark} className="hidden mx-auto md:w-8/12 dark:md:block" />
                        </div>
                    </div>
                    
                    <div className='bg-gradient-to-tr from-indigo-600 to-indigo-500 rounded-ss-3xl lg:rounded-ss-bglg animateNotActive dark:bg-gradient-to-tr dark:from-indigo-900 dark:to-indigo-800' ref={slideInRightRef1}>
                        <div className='text-center pb-10 pt-14 md:pb-10 md:pt-20'>
                            <p className='text-media-white font-bold text-2xl pb-1 md:text-4xl lg:text-5xl md:pb-2 lg:pb-4'>{t('homePage.indexServiceTitle')}</p>
                            <p className='text-media-white font-medium text-2xl md:text-4xl lg:text-5xl md:font-medium'>{t('homePage.indexServiceSubtitle')}</p>
                        </div>
                        <div className='mx-auto max-w-7xl px-3 pb-10 md:px-10 lg:px-24 lg:pb-20'>
                            <div className='lg:flex justify-center'>
                                <div className='px-1 py-2 drop-shadow-lg lg:px-4 lg:py-5'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-normal text-lg leading-normal text-center md:font-medium md:text-xl dark:bg-gradient-to-tr dark:from-indigo-600 dark:to-indigo-500 dark:text-media-white' dangerouslySetInnerHTML={{__html: t('homePage.indexServiceList1')}} />
                                </div>
                                <div className='px-1 py-2 drop-shadow-lg lg:px-4 lg:py-5'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-normal text-lg leading-normal text-center md:font-medium md:text-xl dark:bg-gradient-to-tr dark:from-indigo-600 dark:to-indigo-500 dark:text-media-white' dangerouslySetInnerHTML={{__html: t('homePage.indexServiceList2')}} />
                                </div>
                            </div>
                            <div className='lg:flex justify-center items-center'>
                                <div className='px-1 py-2 lg:px-4 lg:py-1 drop-shadow-lg'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-normal text-lg text-center md:font-medium md:text-xl dark:bg-gradient-to-tr dark:from-indigo-600 dark:to-indigo-500 dark:text-media-white'>{t('homePage.indexServiceList3')}</p>
                                </div>
                                <div className='px-1 py-2 lg:px-4 lg:py-1 drop-shadow-lg'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-normal text-lg leading-normal text-center md:font-medium md:text-xl dark:bg-gradient-to-tr dark:from-indigo-600 dark:to-indigo-500 dark:text-media-white' dangerouslySetInnerHTML={{__html: t('homePage.indexServiceList4')}} />
                                </div>
                                <div className='px-1 py-2 lg:px-4 lg:py-1 drop-shadow-lg'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-normal text-lg text-center md:font-medium md:text-xl dark:bg-gradient-to-tr dark:from-indigo-600 dark:to-indigo-500 dark:text-media-white'>{t('homePage.indexServiceList5')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto max-w-7xl px-3 lg:px-10 xl:px-24'>
                        <div className='container mx-auto pt-28 animateNotActive' ref={fadeInUpRef1}>
                            <div>
                                <h2 className='text-media-black text-2xl font-medium pb-6 md:text-3xl dark:text-media-white'>
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
                            <div className='grid grid-cols-1 gap-y-10 pb-20 justify-items-center md:grid-cols-2 md:gap-y-10 lg:grid-cols-3 lg:gap-y-12 lg:gap-x-14'>
                                {featuredArtists.map((artist, index) => (
                                    <div key={artist.id}>
                                        <ArtistsCards
                                            artistName={t(`artistInfo.artist${index + 1}.artistName`)}
                                            illustration={artist.illustration}
                                            onClick={() => openModal(artist)}
                                            index={index}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='container mx-auto animateNotActive' ref={fadeInUpRef2}>
                            <div>
                                <h2 className='text-media-black text-2xl font-medium pb-6 md:text-3xl dark:text-media-white'>
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
                                <div className='flex flex-col pb-32'>
                                    <div className='' ref={postsRef}>
                                        {allPostsData.map(( post, index ) => (
                                                <NewsArticles
                                                    key={post.id}
                                                    id={post.id}
                                                    newsTitle={t(`newsPosts.newsPost${index + 1}.newsTitle`)}
                                                    newsSummary={t(`newsPosts.newsPost${index + 1}.newsSummary`)}
                                                    linkHref={`/news?id=newsPost${index}#${index}`}
                                                    index={index}
                                                />
                                        ))}
                                    </div>
                                    {/* <div className={`hidden h-screen md:block ${isSticky ? 'sticky top-24' : ''}`} ref={recentEventsRef}>
                                        <div className='rounded-2xl drop-shadow-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 h-5/6 px-5 py-10'>
                                            <h3 className='font-semibold text-2xl text-media-black'>今後のイベント</h3>
                                        </div> 
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <Modal isOpen={isModalOpen} onClose={closeModal} artist={selectedArtist} />
                    </div>
                </div>
            </Layout>
        </div>
    )
}