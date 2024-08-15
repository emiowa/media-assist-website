import React from 'react';
import Image from 'next/image';

const ArtistsCards = ({ illustration, pawCategories, artistName, pdfUrl }) => {
  const handleButtonClick = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className='rounded-2xl w-80 h-auto drop-shadow-lg bg-white'>
        <div className='relative w-full h-96 overflow-hidden rounded-t-2xl'>
            <Image className='absolute inset-0 w-full h-full object-cover' src={illustration} alt={artistName} />
        </div>
        <div className='flex justify-between p-6'>
            <div className='text-media-black'>
                <h3 className='font-bold text-lg'>{artistName}</h3>
                <div className='w-5 flex items-center gap-1'>
                    {pawCategories.map((pawCategory, index) => (
                        <Image key={index} src={pawCategory} alt={`paw-category-${index}.svg`} />
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-end justify-center'>
                <button onClick={handleButtonClick} className='rounded-full border text p-1 bg-white drop-shadow-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-media-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  );
};

export default ArtistsCards;