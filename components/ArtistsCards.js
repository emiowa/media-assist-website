import React from 'react';
import Image from 'next/image';
import useTranslation from '../hooks/useTranslation';
import { useRouter } from 'next/router';

const ArtistsCards = ({ id, artistName, illustration, portfolioPdf, category, artistPresentation, onClick, showButton = true, index }) => {
    const { t } = useTranslation();

  return (
    <div className='rounded-xl w-80 drop-shadow-lg shadow-lg bg-slate-50 transform scale-100 transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer dark:bg-gradient-to-tr dark:from-indigo-200 dark:to-indigo-100' onClick={() => onClick(id)}>
        <div className='relative w-full h-96 overflow-hidden rounded-t-xl'>
            <div className='relative w-full h-full'>
                <Image className='absolute inset-0 object-cover' src={illustration} alt={`${t(`artistInfo.artist${index + 1}.artistName`)}'s illustration`} width={320} height={384} />
            </div>
        </div>
        <div className='flex justify-center pt-4 pb-5 px-6'>
            <div className='text-media-black'>
                <h3 className='font-bold text-lg'>{t(`artistInfo.artist${index + 1}.artistName`)}</h3>
                <div>
                    {Array.isArray(category) ? (
                        <div className='w-full flex items-center justify-center gap-2'>
                        {category.map((cat, index) => (
                            <Image key={index} src={cat} alt={`paw-category-${index}.svg`} width={20} height={20} />
                        ))}
                        </div>
                    ) : (
                        category && (
                        <div>
                            <Image src={category} alt={`paw-category.svg`} width={20} height={20} />
                        </div>
                        )
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default ArtistsCards;