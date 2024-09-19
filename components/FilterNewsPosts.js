import React from 'react';
import useTranslation from '../hooks/useTranslation';

const FilterNewsPosts = ({ categories, selectedCategory, onSelectCategory, noNewsMessage }) => {
  const { t } = useTranslation();
  
  return (
    <div>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-3 text-sm lg:flex md:text-base justify-center mt-8'>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`flex items-center justify-center lg:justify-normal p-2 md:p-3 mr-0 md:mr-2 rounded-md border border-media-white hover:font-bold ${
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
        className={`flex items-center justify-center lg:justify-normal p-2 md:p-3 mr-0 md:mr-2 rounded-md border border-media-white hover:font-bold ${
          selectedCategory === null
            ? 'text-indigo-600 bg-media-white bg-opacity-80 font-bold'
            : 'text-media-white bg-transparent font-normal'
        }`}
      >
        <p className=''>{t('artistPage.artistCategoryAll')}</p>
      </button>
    </div>
    {noNewsMessage && (
      <div>{noNewsMessage}</div>
    )}
    </div>
  );
};

export default FilterNewsPosts;