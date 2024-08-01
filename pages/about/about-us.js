import React from 'react';
import Layout from "../../components/Layout"
import Image from "next/image"
import { useEffect, useRef } from 'react';

const useIntersectionObserver = (elements, animationClass) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animationClass);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      elements.forEach((element) => {
        if (element.current) {
          observer.observe(element.current);
        }
      });
  
      return () => {
        elements.forEach((element) => {
          if (element.current) {
            observer.unobserve(element.current);
          }
        });
      };
    }, [elements, animationClass]);
  };

export default function AboutUs(){
    const slideInLeftRef1 = useRef(null);
    const fadeInUpRef4 = useRef(null);

    useIntersectionObserver([slideInLeftRef1], 'animateSlideFromLeft');
    useIntersectionObserver([fadeInUpRef4], 'animateFadeFromDown');

    return(
        <div>
            <Layout>
                <div className='mx-auto max-w-7xl px-3 sm:px-24'>
                    <div className="mt-32 sm:h-screen sm:grid sm:grid-cols-2 sm:items-center sm:mt-10">
                        <div>
                            <p className="opacity-0 text-media-black text-3xl font-bold pb-2 sm:text-5xl sm:pb-4 animateFadeFromDown">Media Assist</p>
                            <p className='opacity-0 text-media-black font-medium text-xl pb-6 sm:text-4xl animateFadeFromDown'>みんなの「メディア」を作る会社</p>
                            <p className='opacity-0 text-media-black text-base font-normal leading-loose animateFadeFromDownDelay'>私たちメディアアシストは、教育/研修向けの映像制作やその配信のご相談を通じて皆さまの事業の支援を行う会社として誕生しました。
                            映像のニーズが高まる中、「どうしていいのかわからない」という事業者さまも多いのではないでしょうか。<br />殊に、教育/研修向けコンテンツについては、丁寧・正確かつ効果のある内容が求められます。そのため、どの映像制作業者さんにお話をするか迷いがあったり、撮影費用の妥当性や依頼の仕方など、ご不明な点も多いとご相談をいただきます。弊社では、そのような事業者の皆さまのご相談に応じ、多数の関係先を通じ企画を実現するようにバックアップを行って参ります。</p>
                        </div>
                        <div className="mx-auto my-14 bg-gray-300 w-64 h-64 sm:my-0 animateSlideFromRight">
                        </div>
                    </div>
                    <div className="bg-gradient-to-tr from-indigo-200 to-indigo-100 rounded-3xl drop-shadow-lg py-10 px-3 sm:px-0 sm:rounded-bglg animateNotActive" ref={slideInLeftRef1}>
                        <p className='text-media-black text-2xl font-bold pb-4 text-center sm:text-4xl sm:pb-8'>会社概要</p>
                        <div className="flex flex-col items-center text-center sm:text-left">
                            <div className='pb-3 leading-loose sm:flex sm:pb-0'>
                                <p className='font-medium text-media-black text-lg'>会社名:</p>
                                <p className='text-media-black text-lg sm:pl-2'>株式会社メディアアシスト</p>
                            </div>
                            <div className='pb-3 leading-loose sm:flex sm:pb-0'>
                                <p className='font-medium text-media-black text-lg'>代表者:</p>
                                <p className='text-media-black text-lg sm:pl-2'>松城　麻以子</p>
                            </div>
                            <div className='pb-3 leading-loose sm:flex sm:pb-0'>
                                <p className='font-medium text-media-black text-lg'>所在地:</p>
                                {/* Text for laptop and desktop screens */}
                                <p className='hidden sm:flex sm:text-media-black sm:text-lg sm:pl-2'>〒170-6045　東京都豊島区東池袋3-1-1　サンシャイン60 45階</p>
                                {/* Text for mobile screens */}
                                <p className='text-media-black text-lg sm:hidden'>〒170-6045　東京都豊島区東池袋3-1-1<br />サンシャイン60 45階</p>
                            </div>
                            <div className='pb-3 leading-loose sm:flex sm:pb-0'>
                                <p className='font-medium text-media-black text-lg'>資本金:</p>
                                <p className='text-media-black text-lg sm:pl-2'>500万円</p>
                            </div>
                            <div className='pb-3 leading-loose sm:flex sm:pb-0'>
                                <p className='font-medium text-media-black text-lg'>設立:</p>
                                <p className='text-media-black text-lg sm:pl-2'>2021年11月</p>
                            </div>
                            <div className='pb-3 leading-loose sm:flex sm:pb-0'>
                                <p className='font-medium text-media-black text-lg'>従業員数:</p>
                                <p className='text-media-black text-lg sm:pl-2'>9名</p>
                            </div>
                            <div className='pb-3 leading-loose sm:flex sm:pb-0'>
                                <p className='font-medium text-media-black text-lg'>主な取引先(敬称略):</p>
                                <p className='text-media-black text-lg sm:pl-2'>独立行政法人国際協力機構(JICA)</p>
                            </div>
                            <div className='pb-3 leading-loose sm:flex sm:pb-0'>
                                <p className='font-medium text-media-black text-lg'>関連会社:</p>
                                <p className='text-media-black text-lg sm:pl-2'>株式会社国際協力データサービス</p>
                            </div>
                            <div className='flex flex-col leading-loose pt-12'>
                                <p className='text-left font-medium text-media-black text-lg sm:text-center'>会社沿革:</p>
                                <p className='text-left text-media-black text-lg pl-5 sm:text-center'>2016年より一般派遣事業者内業務受託チームとして映像制作支援事業を担当</p>
                                <p className='text-left text-media-black text-lg pl-5 sm:text-center'>2021年11月 株式会社ICDSメディアアシストを設立</p>
                                <p className='text-left text-media-black text-lg pl-5 sm:text-center'>2024年 4月　コンテンツ事業課を設置</p>
                                <p className='text-left text-media-black text-lg pl-5 sm:text-center'>2024年 6月　株式会社メディアアシストへ社名変更、所在地を豊島区東池袋へ移転</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 pb-36 animateNotActive" ref={fadeInUpRef4}>
                        <p className='text-media-black text-xl font-medium sm:pb-6 sm:text-3xl'>SDGs ゴール</p>
                        <div className='sm:flex'>
                            {/* Image of SDG4 goal for laptop and desktop screens */}
                            <div className='hidden justify-center sm:flex sm:items-center'>
                                <Image
                                    src='/E_WEB_04.png'
                                    alt='Goal 4 SDGs'
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className='sm:px-10'>
                                <p className='text-media-black text-base font-medium leading-loose pb-3'>Goal 4 - 質の高い教育をみんなに</p>
                                {/* Image of SDG4 goal for mobile screens */}
                                <div className='flex justify-center pb-3 sm:hidden'>
                                    <Image
                                        src='/E_WEB_04.png'
                                        alt='Goal 4 SDGs'
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <p className='text-media-black text-base font-normal leading-loose'>弊社においては、デジタル映像を媒体とした教育コンテンツの支援を行い、判りやすい内容をあらゆるデバイスを経由して届く環境構築を試行します。また、教育という観点のみならず、人それぞれの求めるタイプに応じた情報へのアクセスを、協業のパートナー各社とともに提案していきます。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}