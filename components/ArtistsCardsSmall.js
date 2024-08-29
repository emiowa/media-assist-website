import React from 'react';
import Image from 'next/image';

const ArtistsCardsSmall = ({ illustration, artistName }) => {

  return (
    <div className='rounded-2xl w-80 drop-shadow-lg bg-slate-50 hover:cursor-pointer dark:bg-gradient-to-tr dark:from-indigo-200 dark:to-indigo-100'>
        <div className='relative w-full h-48 overflow-hidden rounded-t-2xl'>
            <Image className='absolute inset-0 object-cover -translate-y-5 hover:opacity-70' src={illustration} alt={artistName} width={3031} height={4272}/>
        </div>
        <div className='flex justify-center p-4'>
            <h3 className='text-media-black font-bold text-base sm:text-lg'>{artistName}</h3>
        </div>
    </div>
  );
};

export default ArtistsCardsSmall;