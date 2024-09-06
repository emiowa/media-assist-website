import React from 'react';
import Image from 'next/image';

const ArtistsCards = ({ id, artistName, illustration, portfolioPdf, category, artistPresentation, showButton = true }) => {
  const handleButtonClick = () => {
    if (portfolioPdf){
        window.open(portfolioPdf, '_blank');
    }
  };

  return (
    <div className='rounded-xl w-80 drop-shadow-lg shadow-lg bg-slate-50 dark:bg-gradient-to-tr dark:from-indigo-200 dark:to-indigo-100'>
        <div className='relative w-full h-96 overflow-hidden rounded-t-xl'>
            <div className='relative w-full h-full'>
                <Image className='absolute inset-0 object-cover' src={illustration} alt={`${artistName}'s illustration`} width={320} height={384} />
                <div className='absolute inset-0 flex items-center justify-center text-media-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 bg-media-white bg-opacity-85'>
                    <p className='px-5'>{artistPresentation}</p>
                </div>
            </div>
        </div>
        <div className='flex justify-between pt-2 pb-4 px-6'>
            <div className='text-media-black'>
                <h3 className='font-bold text-lg'>{artistName}</h3>
                <div>
                    {Array.isArray(category) ? (
                        <div className='w-5 flex items-center gap-1'>
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
            {showButton && (
                <div className='flex flex-col items-end justify-center'>
                    <button onClick={handleButtonClick} className='rounded-full border text p-1 bg-white drop-shadow-md dark:bg-transparent dark:border-media-black dark:bg-indigo-50'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-media-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
        <p className='text-media-black text-xs pb-2 text-center'>All copyrights belong to their respective owners</p>
    </div>
  );
};

export default ArtistsCards;