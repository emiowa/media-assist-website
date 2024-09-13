import React from 'react';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import {useRef} from 'react';
import useIntersectionObserver from '../components/intersection-observer';
import useTranslation from '../hooks/useTranslation';
import { useRouter } from 'next/router';

const NewsArticles = ({ id, date, profilePicture, authorName, postDate, titleArticle, summary, newsContent, hashtagCategory, linkHref }) => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const staticContent = "<br><br>●社名及び所在地<br>旧）<br>株式会社ICDSメディアアシスト<br>〒102-0083　東京都千代田区麹町3丁目6-5<br>03-6555-2502<br>新)<br>株式会社メディアアシスト<br>〒170-6045　東京都豊島区東池袋3丁目1-1<br>03-5957-7244<br><br>●シンボルマーク及びロゴタイプ<br>旧)<br><img src='../icds-media-assist-logo.png' width='200' /><br>新)<br><img src='../media-assist-new-logo.png' width='200' />"

  const articleRef = useRef(null);
  useIntersectionObserver([articleRef], 'animateFadeFromDown');

  return (
    <div ref={articleRef} className='news-article animateNotActive'>
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
          <p className='text-media-black font-bold text-lg mt-2 pb-3 md:text-2xl'>{titleArticle[locale]}</p>
          <p className='text-media-black leading-loose'>{summary[locale]}</p>
          {staticContent && (
            <div className='text-media-black leading-loose'>
              <p dangerouslySetInnerHTML={{__html: staticContent}} />
            </div>
          )}
          <div className='flex justify-end pt-3'>
            {Array.isArray(hashtagCategory) ? (
              <div className=''>
                {hashtagCategory.map((hashtag, index) => (
                  <p key={index} className='mt-10 md:mt-0 text-slate-400 p-2 mr-2 text-sm border border-slate-300 rounded-md dark:text-slate-500 dark:border-slate-400'>{hashtag[locale]}</p>
                ))}
              </div>
            ) : (
              <p className='mt-10 md:mt-0 text-slate-400 p-2 mr-2 text-sm border border-slate-300 rounded-md dark:text-slate-500 dark:border-slate-400'>{hashtagCategory[locale]}</p>
            )}
        </div>
          {linkHref && (
            <div className='mt-12'>
              <Link href={linkHref} className='border border-media-black bg-transparent rounded-full py-2 px-4 text-media-black hover:bg-indigo-600 hover:border-indigo-600 hover:text-media-white dark:hover:border-indigo-500 dark:hover:bg-indigo-500'>
                {t('indexNewsReadMoreButton')}
              </Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default NewsArticles;