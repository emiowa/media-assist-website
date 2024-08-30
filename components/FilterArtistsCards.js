import React from 'react';
import Image from 'next/image';

const FilterArtistsCards = ({ categories, selectedCategory, handleCategoryClick, resetCategory }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-3 text-sm lg:flex md:text-base justify-center mt-8'>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`flex items-center justify-center lg:justify-normal p-2 md:p-3 mr-0 md:mr-2 rounded-md border border-media-white hover:font-bold ${
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
        className={`flex items-center justify-center lg:justify-normal p-2 md:p-3 mr-0 md:mr-2 rounded-md border border-media-white hover:font-bold ${
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