import React from 'react';
import Layout from "../components/Layout"
import Image from "next/image"
import { useEffect, useState, useRef } from 'react';
import useIntersectionObserver from '../components/intersection-observer';
import lottie from 'lottie-web';

export default function AboutUs(){
    let animation1ContainerLight = useRef(null);
    let animation1ContainerDark = useRef(null);

    useEffect(() => {
        const animLight = lottie.loadAnimation({
            container: animation1ContainerLight.current,
            render: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/MA-website-animation1json.json'
        })

        return () => animLight.destroy();
    }, [])

    useEffect(() => {
        const animDark = lottie.loadAnimation({
            container: animation1ContainerDark.current,
            render: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/MA-website-animation1json-dark-version.json'
        })

        return () => animDark.destroy();
    }, [])

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined'){
            const handleResize = () => {
                setIsLargeScreen(window.innerWidth >= 768);
            };
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const slideInLeftRef1 = useRef(null);
    const slideInRightRef2 = useRef(null);
    const fadeInUpRef4 = useRef(null);

    // const animationClassForSlideRight = isLargeScreen ? 'animateSlideFromRight' : 'animateFadeFromDown';
    // const animationClassForSlideLeft = isLargeScreen ? 'animateSlideFromLeft' : 'animateFadeFromDown';

    useIntersectionObserver([slideInLeftRef1], isLargeScreen ? 'animateSlideFromLeft' : 'animateFadeFromDown');
    useIntersectionObserver([slideInRightRef2], isLargeScreen ? 'animateSlideFromRight' : 'animateFadeFromDown');
    useIntersectionObserver([fadeInUpRef4], 'animateFadeFromDown');

    return(
        <div>
            <Layout>
                <div className='dark:bg-media-black'>
                    <div className='mx-auto max-w-7xl px-3 md:px-10 lg:px-24'>
                        <div className="pt-32 lg:h-screen lg:grid lg:grid-cols-2 lg:items-center lg:pt-10">
                            <div>
                                <p className="opacity-0 text-media-black text-3xl font-bold pb-2 md:text-5xl md:pb-4 animateFadeFromDown dark:text-media-white">Media Assist</p>
                                <p className='opacity-0 text-media-black font-medium text-xl pb-6 md:text-4xl animateFadeFromDown dark:text-media-white'>みんなの「メディア」を作る会社</p>
                                <p className='opacity-0 text-media-black text-base font-normal leading-loose animateFadeFromDownDelay dark:text-media-white'>私たちメディアアシストは、教育/研修向けの映像制作やその配信のご相談を通じて皆さまの事業の支援を行う会社として誕生しました。
                                映像のニーズが高まる中、「どうしていいのかわからない」という事業者さまも多いのではないでしょうか。<br />殊に、教育/研修向けコンテンツについては、丁寧・正確かつ効果のある内容が求められます。そのため、どの映像制作業者さんにお話をするか迷いがあったり、撮影費用の妥当性や依頼の仕方など、ご不明な点も多いとご相談をいただきます。弊社では、そのような事業者の皆さまのご相談に応じ、多数の関係先を通じ企画を実現するようにバックアップを行って参ります。</p>
                            </div>
                            <div className="flex justify-center animateFadeFromDown lg:justify-end">
                                {/* Animation for light mode */}
                                <div ref={animation1ContainerLight} className="w-11/12 md:max-w-lg dark:hidden" />
                                {/* Animation for dark mode */}
                                <div ref={animation1ContainerDark} className="hidden w-11/12 md:max-w-lg dark:block" />
                            </div>
                        </div>
                        <div className="bg-gradient-to-tr from-indigo-200 to-indigo-100 rounded-3xl drop-shadow-lg py-10 px-3 md:px-0 md:rounded-bglg animateNotActive dark:bg-gradient-to-tr dark:from-indigo-900 dark:to-indigo-800" ref={slideInLeftRef1}>
                            <p className='text-media-black text-2xl font-bold pb-4 text-center md:text-4xl md:pb-8 dark:text-media-white'>会社概要</p>
                            <div className="flex flex-col items-center text-center md:text-left">
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>会社名:</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>株式会社メディアアシスト</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>代表者:</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>松城　麻以子</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>所在地:</p>
                                    {/* Text for laptop and desktop screens */}
                                    <p className='hidden md:flex md:text-media-black md:text-lg md:pl-2 dark:text-media-white'>〒170-6045　東京都豊島区東池袋3-1-1　サンシャイン60 45階</p>
                                    {/* Text for mobile screens */}
                                    <p className='text-media-black text-lg md:hidden dark:text-media-white'>〒170-6045　東京都豊島区東池袋3-1-1<br />サンシャイン60 45階</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>資本金:</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>500万円</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>設立:</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>2021年11月</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>従業員数:</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>9名</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>主な取引先(敬称略):</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>独立行政法人国際協力機構(JICA)</p>
                                </div>
                                <div className='pb-3 leading-loose md:flex md:pb-0'>
                                    <p className='font-medium text-media-black text-lg dark:text-media-white'>関連会社:</p>
                                    <p className='text-media-black text-lg md:pl-2 dark:text-media-white'>株式会社国際協力データサービス</p>
                                </div>
                                <div className='flex flex-col leading-loose pt-12'>
                                    <p className='text-left font-medium text-media-black text-lg md:text-center dark:text-media-white'>会社沿革:</p>
                                    <p className='text-left text-media-black text-lg pl-5 md:text-center dark:text-media-white'>2016年より一般派遣事業者内業務受託チームとして映像制作支援事業を担当</p>
                                    <p className='text-left text-media-black text-lg pl-5 md:text-center dark:text-media-white'>2021年11月 株式会社ICDSメディアアシストを設立</p>
                                    <p className='text-left text-media-black text-lg pl-5 md:text-center dark:text-media-white'>2024年 4月　コンテンツ事業課を設置</p>
                                    <p className='text-left text-media-black text-lg pl-5 md:text-center dark:text-media-white'>2024年 6月　株式会社メディアアシストへ社名変更、所在地を豊島区東池袋へ移転</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-20 pb-36 animateNotActive" ref={fadeInUpRef4}>
                            <p className='text-media-black text-2xl font-bold md:pb-6 md:text-3xl dark:text-media-white'>SDGs ゴール</p>
                            <div className='md:flex'>
                                {/* Image of SDG4 goal for laptop and desktop screens */}
                                <div className='hidden justify-center md:flex md:items-center'>
                                    <Image
                                        src='/E_WEB_04.png'
                                        alt='Goal 4 SDGs'
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className='md:ps-10'>
                                    <p className='text-media-black font-bold leading-loose pb-3 dark:text-media-white'>Goal 4 - 質の高い教育をみんなに</p>
                                    {/* Image of SDG4 goal for mobile screens */}
                                    <div className='flex justify-center pb-3 md:hidden'>
                                        <Image
                                            src='/E_WEB_04.png'
                                            alt='Goal 4 SDGs'
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <p className='text-media-black font-normal leading-loose dark:text-media-white'>弊社においては、デジタル映像を媒体とした教育コンテンツの支援を行い、判りやすい内容をあらゆるデバイスを経由して届く環境構築を試行します。また、教育という観点のみならず、人それぞれの求めるタイプに応じた情報へのアクセスを、協業のパートナー各社とともに提案していきます。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Layout>
        </div>
    )
}