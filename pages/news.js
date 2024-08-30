import React from 'react';
import Layout from "../components/Layout"
import Image from "next/image"
import { createRef, useEffect, useState, useRef } from 'react';
import {useRouter} from 'next/router';
import useIntersectionObserver from '../components/intersection-observer';
import { getAllPostsData } from '../lib/posts';
import NewsArticles from '../components/NewsArticles';
import FilterNewsPosts from '../components/FilterNewsPosts';
import { serialize } from 'next-mdx-remote/serialize';

export async function getStaticProps() {
  const allPostsData = getAllPostsData();

  const posts = await Promise.all(allPostsData.map(async post => {
    const mdxSource = await serialize(post.content);
    return {
      ...post,
      content: mdxSource,
    };
  }));
  posts.sort((a, b) => b.id - a.id);

  return {
    props: {
      allPostsData: posts,
    },
  };
}

export default function News({allPostsData}){
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts = selectedCategory
    ? allPostsData.filter(post => post.hashtagCategory && post.hashtagCategory.includes(selectedCategory))
    : allPostsData;

  const categories = [
    '#メディアアシスト',
    '#イベント',
    '#インタビュー',
    '#サービス',
    '#コラボレーション',
  ];

  const router = useRouter();
  const {id} = router.query;
  useEffect (() => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }, [id]);

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

    // useEffect(() => {
    //     if (typeof window !== 'undefined'){
    //         const handleResize = () => {
    //             setIsLargeScreen(window.innerWidth >= 768);
    //         };
    //         window.addEventListener('resize', handleResize);
    //         handleResize();
    //         return () => {
    //             window.removeEventListener('resize', handleResize);
    //         };
    //     }
    // }, []);

    // const slideInLeftRef1 = useRef(null);
    // const slideInRightRef2 = useRef(null);
    // const fadeInUpRef4 = useRef(null);

    // const animationClassForSlideRight = isLargeScreen ? 'animateSlideFromRight' : 'animateFadeFromDown';
    // const animationClassForSlideLeft = isLargeScreen ? 'animateSlideFromLeft' : 'animateFadeFromDown';

    // useIntersectionObserver([slideInLeftRef1], isLargeScreen ? 'animateSlideFromLeft' : 'animateFadeFromDown');
    // useIntersectionObserver([slideInRightRef2], isLargeScreen ? 'animateSlideFromRight' : 'animateFadeFromDown');
    // useIntersectionObserver([fadeInUpRef4], 'animateFadeFromDown');

    return(
      <div>
        <Layout>
          <div className='dark:bg-media-black'>
            <div className='md:rounded-es-bglg bg-gradient-to-tr from-indigo-900 to-indigo-600 mt-20 pt-0 md:pt-10 pb-10 animateFadeFromDown dark:bg-gradient-to-tr dark:from-indigo-900 dark:to-indigo-800'>
              <div className='mx-auto max-w-7xl px-3 md:px-10 xl:px-24'>
                <div className="pt-12 pb-0 xl:grid xl:grid-cols-3 xl:items-center md:pt-10">
                  <div className='xl:col-span-2'>
                    <p className="opacity-0 text-media-white text-3xl font-bold pb-6 md:text-5xl lg:pb-4 animateFadeFromDown dark:text-media-white">News</p>
                    <p className='opacity-0 text-media-white text-base font-normal leading-loose animateFadeFromDownDelay dark:text-media-white'>私たちメディアアシストは、教育/研修向けの映像制作やその配信のご相談を通じて皆さまの事業の支援を行う会社として誕生しました。映像のニーズが高まる中、「どうしていいのかわからない」という事業者さまも多いのではないでしょうか。</p>
                  </div>
                </div>
                <div className='flex justify-center pt-5 md:pt-14'>
                  <FilterNewsPosts
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleSelectCategory}
                  />
                </div>
              </div>
            </div>
            <div className='mx-auto max-w-7xl px-3 md:px-10'>
              <div className='container mx-auto pt-14 md:pt-28'>
                <div className='flex justify-center lg:mx-20 xl:mx-48 pb-36'>
                  <div className='' ref={postsRef}>
                    {filteredPosts.map(post => (
                      <div key={post.id} className=''>
                        <NewsArticles
                          id={post.id}
                          date={post.date}
                          profilePicture={post.profilePicture}
                          authorName={post.authorName}
                          postDate={post.postDate}
                          titleArticle={post.titleArticle}
                          summary={post.summary}
                          content={post.content}
                          hashtagCategory={post.hashtagCategory}
                          linkHref={post.linkHref}
                        />
                      </div>
                    ))}
                  </div>
                  {/* <div className={`hidden h-screen md:block ${isSticky ? 'sticky top-24' : ''}`} ref={recentEventsRef}>
                    <div className='rounded-2xl drop-shadow-lg bg-gradient-to-tr from-indigo-200 to-indigo-100 h-5/6 px-5 py-10 dark:bg-gradient-to-tr dark:from-indigo-900 dark:to-indigo-800'>
                      <h3 className='font-semibold text-2xl text-media-black dark:text-media-white'>今後のイベント</h3>
                    </div> 
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
}