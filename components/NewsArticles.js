import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRef} from 'react';
import useIntersectionObserver from '../components/intersection-observer';
import useTranslation from '../hooks/useTranslation';

const NewsArticles = ({ id, linkHref, newsContent, hashtagCategory, index }) => {
  const { t } = useTranslation();

  const articleRef = useRef(null);
  useIntersectionObserver([articleRef], 'animateFadeFromDown');

  return (
    <div id={id} ref={articleRef} className='news-article animateNotActive'>
      <div className='rounded-2xl drop-shadow-lg shadow-lg bg-slate-50 px-6 py-10 mb-10 dark:bg-gradient-to-tr dark:from-indigo-200 dark:to-indigo-100'>
        <div className='flex'>
          {/* <div className='rounded-full bg-media-red w-10 h-10'> */}
            {/* <div className='h-full flex justify-center items-center'> */}
              {/* <Image src={profilePicture} width={30} height={30} alt={`${authorName}'s profile picture`} /> */}
            {/* </div> */}
          {/* </div> */}
          {/* <div className='pl-5'> */}
            {/* <p className='text-media-black font-bold'>{authorName}</p> */}
            {/* <p className='text-media-black text-sm opacity-70'>{postDate}</p> */}
          {/* </div> */}
        </div>
          <p className='text-media-black font-bold text-lg mt-2 pb-3 md:text-2xl'>{t(`newsPosts.newsPost${index + 1}.newsTitle`)}</p>
          <p className='text-media-black leading-loose'>{t(`newsPosts.newsPost${index + 1}.newsSummary`)}</p>
          {newsContent && (
            <div className='text-media-black leading-loose'>
              <p dangerouslySetInnerHTML={{ __html: t(`newsPosts.newsPost${index + 1}.newsContent`) }} />
            </div>
          )}
          <div className='flex justify-end pt-3'>
            {Array.isArray(hashtagCategory) ? (
              <div className=''>
                {hashtagCategory.map((hashtag, hashtagIndex) => (
                  <p key={hashtagIndex} className='mt-10 md:mt-0 text-slate-400 p-2 mr-2 text-sm border border-slate-300 rounded-md dark:text-slate-500 dark:border-slate-400'>{t(`newsPosts.newsPost${index + 1}.newsHashtagCategory[${hashtagIndex}]`, hashtag)}</p>
                ))}
              </div>
            ) : (
              <p className='mt-10 md:mt-0 text-slate-400 p-2 mr-2 text-sm border border-slate-300 rounded-md dark:text-slate-500 dark:border-slate-400'>{t(`newsPosts.newsPost${index + 1}.newsHashtagCategory`)}</p>
            )}
        </div>
          {linkHref && (
            <div className='mt-12'>
              <Link href={`/news?id=newsPost${index}#${index}`} className='border border-media-black bg-transparent rounded-full py-2 px-4 text-media-black hover:bg-indigo-600 hover:border-indigo-600 hover:text-media-white dark:hover:border-indigo-500 dark:hover:bg-indigo-500'>
                {t('homePage.indexNewsReadMoreButton')}
              </Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default NewsArticles;