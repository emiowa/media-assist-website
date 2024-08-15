import React from 'react';
import Layout from "../components/Layout"
import Image from "next/image"
import { createRef, useEffect, useState, useRef } from 'react';
import useIntersectionObserver from '../components/intersection-observer';
import ArtistsCards from '@/components/ArtistsCards';

export default function Artists(){
    // useEffect(() => {
    //     if (typeof window !== 'undefined'){
    //         const handleResize = () => {
    //             setIsLargeScreen(window.innerWidth >= 768);
    //         };
    //         window.addEventListener('resize', handleResize);
    //         handleResize();
    //         return () => {
    //             window.removeEventListener('resize', handleResize);
    //         };
    //     }
    // }, []);

    // const slideInLeftRef1 = useRef(null);
    // const slideInRightRef2 = useRef(null);
    // const fadeInUpRef4 = useRef(null);

    // const animationClassForSlideRight = isLargeScreen ? 'animateSlideFromRight' : 'animateFadeFromDown';
    // const animationClassForSlideLeft = isLargeScreen ? 'animateSlideFromLeft' : 'animateFadeFromDown';

    // useIntersectionObserver([slideInLeftRef1], isLargeScreen ? 'animateSlideFromLeft' : 'animateFadeFromDown');
    // useIntersectionObserver([slideInRightRef2], isLargeScreen ? 'animateSlideFromRight' : 'animateFadeFromDown');
    // useIntersectionObserver([fadeInUpRef4], 'animateFadeFromDown');

    return(
        <div>
            <Layout>
                <div className='dark:bg-media-black'>
                    <div className='mx-auto max-w-7xl px-3 sm:px-24'>
                        <div className="pt-32 pb-20 sm:pb-0 sm:h-screen sm:grid sm:grid-cols-2 sm:items-center sm:pt-10">
                            <div>
                                <p className="opacity-0 text-media-black text-3xl font-bold pb-2 sm:text-5xl sm:pb-4 animateFadeFromDown dark:text-media-white">Media Assist</p>
                                <p className='opacity-0 text-media-black font-medium text-xl pb-6 sm:text-4xl animateFadeFromDown dark:text-media-white'>みんなの「メディア」を作る会社</p>
                                <p className='opacity-0 text-media-black text-base font-normal leading-loose animateFadeFromDownDelay dark:text-media-white'>私たちメディアアシストは、教育/研修向けの映像制作やその配信のご相談を通じて皆さまの事業の支援を行う会社として誕生しました。
                                映像のニーズが高まる中、「どうしていいのかわからない」という事業者さまも多いのではないでしょうか。<br />殊に、教育/研修向けコンテンツについては、丁寧・正確かつ効果のある内容が求められます。そのため、どの映像制作業者さんにお話をするか迷いがあったり、撮影費用の妥当性や依頼の仕方など、ご不明な点も多いとご相談をいただきます。弊社では、そのような事業者の皆さまのご相談に応じ、多数の関係先を通じ企画を実現するようにバックアップを行って参ります。</p>
                            </div>
                        </div>

                        <div className='container mx-auto'>
                            <div className='grid grid-cols-1 gap-y-10 pb-36 justify-items-center sm:grid-cols-3 sm:gap-y-24'>
                                <ArtistsCards 
                                    illustration="/OsakaComiccon-tokitokoro2-(350dpi).jpg"
                                    pawCategories={[
                                        "/cat-paw-category-3.svg",
                                        "/cat-paw-category-4.svg"
                                    ]}
                                    artistName="tokitokoro"
                                    pdfUrl="https://example.com/artist-profile.pdf"/>
                                
                                <ArtistsCards 
                                    illustration="/OsakaComiccon-tokitokoro2-(350dpi).jpg"
                                    pawCategories={[
                                        "/cat-paw-category-1.svg"
                                    ]}
                                    artistName="tokitokoro"
                                    pdfUrl="https://example.com/artist-profile.pdf"/>
                                
                                <ArtistsCards 
                                    illustration="/OsakaComiccon-tokitokoro2-(350dpi).jpg"
                                    pawCategories={[
                                        "/cat-paw-category-1.svg",
                                        "/cat-paw-category-2.svg",
                                        "/cat-paw-category-3.svg",
                                        "/cat-paw-category-4.svg"
                                    ]}
                                    artistName="tokitokoro"
                                    pdfUrl="https://example.com/artist-profile.pdf"/>

                                <ArtistsCards 
                                    illustration="/OsakaComiccon-tokitokoro2-(350dpi).jpg"
                                    pawCategories={[
                                        "/cat-paw-category-1.svg"
                                    ]}
                                    artistName="tokitokoro"
                                    pdfUrl="https://example.com/artist-profile.pdf"/>

                                <ArtistsCards 
                                    illustration="/OsakaComiccon-tokitokoro2-(350dpi).jpg"
                                    pawCategories={[
                                        "/cat-paw-category-3.svg",
                                        "/cat-paw-category-4.svg"
                                    ]}
                                    artistName="tokitokoro"
                                    pdfUrl="https://example.com/artist-profile.pdf"/>                                
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}