import React from 'react';
import Layout from "../components/Layout"
import Image from "next/image"
import { createRef, useEffect, useState, useRef } from 'react';
import ArtistsCards from '../components/ArtistsCards';
import FilterArtistsCards from '../components/FilterArtistsCards';
import {getAllArtistsData} from '../lib/artists';


export async function getStaticProps() {
  const allArtistsData = getAllArtistsData();
    return{
      props:{
        allArtistsData,
      },
    };
  }
  

export default function Artists({allArtistsData}){
  const categories = [
    { id: '1', label: 'イラストレーター', icon: '/cat-paw-category-1.svg' },
    { id: '2', label: 'マンガ家', icon: '/cat-paw-category-2.svg' },
    { id: '3', label: '2Dアニメーター', icon: '/cat-paw-category-3.svg' },
    { id: '4', label: '3Dアニメーター', icon: '/cat-paw-category-4.svg' },
  ];

const [selectedCategory, setSelectedCategory] = useState(null);

  // Handle category click
  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  // Reset category filter
  const resetCategory = () => {
    setSelectedCategory(null);
  };

  // Filter cards based on the selected category
  const filteredCards = selectedCategory
    ? allArtistsData.filter(artist =>
        artist.category.includes(
          categories.find(cat => cat.id === selectedCategory)?.icon
        )
      )
    : allArtistsData;

    return(
        <div>
            <Layout>
                <div className='dark:bg-media-black'>
                    <div className='rounded-es-3xl lg:rounded-es-bglg bg-gradient-to-tr from-indigo-900 to-indigo-600 mt-20 pt-0 md:pt-10 pb-10 animateFadeFromDown dark:bg-gradient-to-tr dark:from-indigo-900 dark:to-indigo-800'>
                        <div className='mx-auto max-w-7xl px-3 md:px-10 xl:px-24'>
                            <div className="pt-12 pb-0 xl:grid xl:grid-cols-3 xl:items-center md:pt-10">
                                <div className='xl:col-span-2'>
                                    <p className="opacity-0 text-media-white text-3xl font-bold pb-6 md:text-5xl lg:pb-4 animateFadeFromDown dark:text-media-white">Artists</p>
                                    <p className='opacity-0 text-media-white text-base font-normal leading-loose animateFadeFromDownDelay dark:text-media-white'>株式会社メディアアシストでは日本で活躍するマンガ家、イラストレーターの海外での活動のお手伝いをしております。お仕事の紹介や、編集者をはじめとする海外の出版社のスタッフとの連絡の通訳、翻訳や契約書の確認など、必要に応じて対応しております。<br/>現在は北米を中心に、アメリカのコミックを描くお仕事(マーベルやDC等)や北米発、日本の作家と組んだ英語圏向けのオリジナルのマンガの制作など、需要が増えてきております。海外でのお仕事にご興味のある皆様、是非、弊社へご連絡ください。<br />こちらでは、弊社がお手伝いさせていただている作家の皆さまをご紹介いたします。</p>
                                </div>
                            </div>
                            <div className='flex justify-center pt-5 md:pt-14'>
                                <FilterArtistsCards
                                    categories={categories}
                                    selectedCategory={selectedCategory}
                                    handleCategoryClick={handleCategoryClick}
                                    resetCategory={resetCategory}
                                />
                                </div>
                        </div>
                    </div>
                    <div className='mx-auto max-w-7xl px-3 lg:px-10 xl:px-24'>
                        <div className='container mx-auto pt-28'>
                            <div className='grid grid-cols-1 gap-y-10 pb-36 justify-items-center md:grid-cols-2 md:gap-y-10 lg:grid-cols-3 lg:gap-y-12 lg:gap-x-14'>
                                {filteredCards.map(artist => (
                                  <div key={artist.id}>
                                    <ArtistsCards
                                      id={artist.id}
                                      artistName={artist.artistName}
                                      illustration={artist.illustration}
                                      portfolioPdf={artist.portfolioPdf}
                                      category={artist.category}
                                    />
                                  </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}