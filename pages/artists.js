import React from 'react';
import Layout from "../components/Layout"
import Image from "next/image"
import { createRef, useEffect, useState, useRef } from 'react';
import ArtistsCards from '../components/ArtistsCards';
import FilterArtistsCards from '../components/FilterArtistsCards';
import {getAllArtistsData} from '../lib/artists';
import Modal from '../components/Modal';
import useTranslation from '../hooks/useTranslation';


export async function getStaticProps() {
  const allArtistsData = getAllArtistsData();
    return{
      props:{
        allArtistsData,
      },
    };
  }


export default function Artists({allArtistsData}){
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const categories = [
    { id: '1', label: t('artistCategoryIllustrator'), icon: '/cat-paw-category-1.svg' },
    { id: '2', label: t('artistCategoryManga'), icon: '/cat-paw-category-2.svg' },
    { id: '3', label: t('artistCategoryDesigner'), icon: '/cat-paw-category-3.svg' },
    { id: '4', label: t('artistCategoryAnimator'), icon: '/cat-paw-category-4.svg' },
  ];

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
                    <div className='rounded-es-3xl lg:rounded-es-bglg bg-gradient-to-tr from-indigo-900 to-indigo-600 mt-20 pt-0 md:pt-10 pb-10 animateFadeFromDown dark:bg-gradient-to-tr dark:from-indigo-900 dark:to-indigo-800'>
                        <div className='mx-auto max-w-7xl px-3 md:px-10 xl:px-24'>
                            <div className="pt-12 pb-0 xl:grid xl:grid-cols-5 xl:items-center md:pt-10">
                                <div className='xl:col-span-4'>
                                    <p className="opacity-0 text-media-white text-3xl font-bold pb-6 md:text-5xl lg:pb-4 animateFadeFromDown dark:text-media-white">Artists</p>
                                    <p className='opacity-0 text-media-white text-base font-normal leading-loose animateFadeFromDownDelay dark:text-media-white' dangerouslySetInnerHTML={{__html: t('artistsIntro')}}/>
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
                                      category={artist.category}
                                      onClick={() => openModal(artist)}
                                    />
                                  </div>
                                ))}
                            </div>
                        </div>
                        <Modal isOpen={isModalOpen} onClose={closeModal} artist={selectedArtist} />
                    </div>
                </div>
            </Layout>
        </div>
    )
}