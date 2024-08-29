import React from 'react';
import Image from 'next/image';

const FilterArtistsCards = ({ categories, selectedCategory, handleCategoryClick, resetCategory }) => {
  return (
    <div className='grid grid-cols-2 gap-3 text-sm sm:flex sm:text-base justify-center mt-8'>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`flex items-center justify-center sm:justify-normal p-2 sm:p-3 mr-0 sm:mr-5 rounded-md border border-media-white hover:font-bold ${
            selectedCategory === category.id
              ? 'text-indigo-600 bg-media-white bg-opacity-80 font-bold'
              : 'text-media-white bg-transparent font-normal'
          }`}
        >
          <Image src={category.icon} width={20} height={20} alt={category.label} />
          <span className='ml-2'>{category.label}</span>
        </button>
      ))}
      <button
        onClick={resetCategory}
        className={`flex items-center justify-center sm:justify-normal p-2 sm:p-3 mr-0 sm:mr-5 rounded-md border border-media-white hover:font-bold ${
          selectedCategory === null
            ? 'text-indigo-600 bg-media-white bg-opacity-80 font-bold'
            : 'text-media-white bg-transparent font-normal'
        }`}
      >
        <span className=''>すべて</span>
      </button>
    </div>
  );
};

export default FilterArtistsCards;