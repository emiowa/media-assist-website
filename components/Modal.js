import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Modal.module.css';
import useTranslation from '../hooks/useTranslation';
import { useRouter } from 'next/router';

const Modal = ({ isOpen, onClose, artist }) => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  if (!isOpen) return null;

  const handleButtonClick = () => {
    if (artist && artist.portfolioPdf){
        window.open(artist.portfolioPdf, '_blank');
    }
  };

  return (
    <div className={styles.overlay}>
      <div className='pt-12 flex justify-center items-center'>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {artist && (
          <>
            <h2 className='text-lg font-bold text-center text-media-black pb-5'>{artist.artistName}</h2>
            <div className='flex flex-col gap-2 pb-8'>
                {artist.category.map((cat, index) => (
                    <div key={index} className='flex items-center gap-2 pb-2'>
                        <Image key={index} src={cat} alt={`paw-category-${index}.svg`} width={20} height={20} />
                        <span className='pl-3 text-media-black'>{artist.categoryName[index]}</span>
                    </div>
                ))}
            </div>
            
            <p className='leading-loose text-media-black font-medium'>{t('modalAboutArtist')}</p>
            <p className='leading-loose text-media-black'>{artist.artistPresentation[locale]}</p>
            <div className='flex justify-center pt-8 pb-2'>
                <button onClick={handleButtonClick} className='text-media-black flex border border-media-black bg-transparent rounded-full py-2 px-4 hover:bg-indigo-600 hover:border-indigo-600 hover:text-media-white dark:hover:border-indigo-500 dark:hover:bg-indigo-500'>
                    <span className=''>{t('modalPortfolioButton')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <p className='text-xs text-media-black pt-8'>{t('modalCopyrightWarning')}</p>
          </>
        )}
      </div>
      </div>
    </div>
  );
};

export default Modal;
