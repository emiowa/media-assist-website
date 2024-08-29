import React from 'react';
import Layout from "../components/Layout"
import Image from "next/image"
import { createRef, useEffect, useState, useRef } from 'react';
import useIntersectionObserver from '../components/intersection-observer';
import ArtistsCards from '../components/ArtistsCards';
import FilterArtistsCards from '../components/FilterArtistsCards';

const cardsData = [
    {
      id: 1,
      illustration: "/sample1.jpg",
      pawCategories: ["/cat-paw-category-1.svg", "/cat-paw-category-2.svg"],
      artistName: "Artist One",
      pdfUrl: "https://example.com/artist1.pdf",
    },
    {
      id: 2,
      illustration: "/sample2.jpg",
      pawCategories: ["/cat-paw-category-2.svg", "/cat-paw-category-3.svg"],
      artistName: "Artist Two",
      pdfUrl: "https://example.com/artist2.pdf",
    },
    {
      id: 3,
      illustration: "/sample3.jpg",
      pawCategories: ["/cat-paw-category-3.svg"],
      artistName: "Artist Three",
      pdfUrl: "https://example.com/artist3.pdf",
    },
    {
      id: 4,
      illustration: "/sample4.jpg",
      pawCategories: ["/cat-paw-category-4.svg"],
      artistName: "Artist Four",
      pdfUrl: "https://example.com/artist4.pdf",
    },
  ];
  
  const categories = [
    { id: '1', label: 'イラストレーター', icon: '/cat-paw-category-1.svg' },
    { id: '2', label: 'マンガ家', icon: '/cat-paw-category-2.svg' },
    { id: '3', label: '2Dアニメーター', icon: '/cat-paw-category-3.svg' },
    { id: '4', label: '3Dアニメーター', icon: '/cat-paw-category-4.svg' },
  ];

export default function Artists(){
const [selectedCategory, setSelectedCategory] = useState(null);

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Reset category filter
  const resetCategory = () => {
    setSelectedCategory(null);
  };

  // Filter cards based on the selected category
  const filteredCards = selectedCategory
    ? cardsData.filter(card =>
        card.pawCategories.includes(
          categories.find(category => category.id === selectedCategory)?.icon
        )
      )
    : cardsData;
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
                    <div className='rounded-es-3xl sm:rounded-es-bglg bg-gradient-to-tr from-indigo-900 to-indigo-600 mt-20 pt-0 sm:pt-10 pb-10 animateFadeFromDown dark:bg-gradient-to-tr dark:from-indigo-900 dark:to-indigo-800'>
                        <div className='mx-auto max-w-7xl px-3 sm:px-24'>
                            <div className="pt-12 pb-0 sm:grid sm:grid-cols-3 sm:items-center sm:pt-10">
                                <div className='sm:col-span-2'>
                                    <p className="opacity-0 text-media-white text-3xl font-bold pb-2 sm:text-5xl sm:pb-4 animateFadeFromDown dark:text-media-white">Artists</p>
                                    <p className='opacity-0 text-media-white text-base font-normal leading-loose animateFadeFromDownDelay dark:text-media-white'>株式会社メディアアシストでは日本で活躍するマンガ家、イラストレーターの海外での活動のお手伝いをしております。お仕事の紹介や、編集者をはじめとする海外の出版社のスタッフとの連絡の通訳、翻訳や契約書の確認など、必要に応じて対応しております。<br/>現在は北米を中心に、アメリカのコミックを描くお仕事(マーベルやDC等)や北米発、日本の作家と組んだ英語圏向けのオリジナルのマンガの制作など、需要が増えてきております。海外でのお仕事にご興味のある皆様、是非、弊社へご連絡ください。<br />こちらでは、弊社がお手伝いさせていただている作家の皆さまをご紹介いたします。</p>
                                </div>
                            </div>
                            <div className='flex justify-center pt-5 sm:pt-14'>
                                <FilterArtistsCards
                                    categories={categories}
                                    selectedCategory={selectedCategory}
                                    handleCategoryClick={handleCategoryClick}
                                    resetCategory={resetCategory}
                                />
                                </div>
                        </div>
                    </div>
                    <div className='mx-auto max-w-7xl px-3 sm:px-24'>
                        <div className='container mx-auto pt-28'>
                            <div className='grid grid-cols-1 gap-y-10 pb-36 justify-items-center sm:grid-cols-3 sm:gap-y-24'>
                                {filteredCards.map(card => (
                                    <ArtistsCards
                                        key={card.id}
                                        illustration={card.illustration}
                                        artistName={card.artistName}
                                        pawCategories={card.pawCategories}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}