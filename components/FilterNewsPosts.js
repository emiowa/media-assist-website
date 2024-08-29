import React from 'react';

const FilterNewsPosts = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className='grid grid-cols-2 gap-3 text-sm sm:text-base sm:flex justify-center mt-8'>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`flex items-center justify-center sm:justify-normal p-2 sm:p-3 mr-0 sm:mr-5 rounded-md border border-media-white hover:font-bold ${
            selectedCategory === category
              ? 'text-indigo-600 bg-media-white bg-opacity-80 font-bold'
              : 'text-media-white bg-transparent font-normal'
          }`}
        >
          <p className='px-2'>{category}</p>
        </button>
      ))}
      <button
        onClick={() => onSelectCategory(null)}
        className={`flex items-center justify-center sm:justify-normal p-2 sm:p-3 mr-0 sm:mr-5 rounded-md border border-media-white hover:font-bold ${
          selectedCategory === null
            ? 'text-indigo-600 bg-media-white bg-opacity-80 font-bold'
            : 'text-media-white bg-transparent font-normal'
        }`}
      >
        <p className=''>すべて</p>
      </button>
    </div>
  );
};

export default FilterNewsPosts;