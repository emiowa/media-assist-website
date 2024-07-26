import React from 'react';
import Layout from "../components/Layout"
import Image from 'next/image';
import {useRouter} from 'next/router';

export default function Home(){
    const router = useRouter();

    const aboutUsPageButton = () => {
        router.push('/about/about-us');
    }
    return(
        <div>
            <Layout>
                <div>
                    <div className='h-screen flex flex-col justify-center items-center'>
                        <p className='text-media-black font-black text-6xl sm:pb-4'>Media Assist</p>
                        <p className='text-media-black font-medium text-4xl'>みんなのメディアを作る会社</p>
                    </div>
                    <div className='bg-gradient-to-tr from-indigo-600 to-indigo-500 rounded-ss-bglg'>
                        <div className='text-center sm:pb-10 sm:pt-20'>
                            <p className='text-media-white font-black text-5xl sm:pb-4'>Let us help you</p>
                            <p className='text-media-white font-bold text-4xl'>What do we do?</p>
                        </div>
                        <div className='mx-auto max-w-7xl px-2 sm:px-24 sm:pb-20'>
                            <div className='flex justify-center'>
                                <div className='sm:px-4 sm:py-5 drop-shadow-lg'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-medium text-xl leading-normal text-center'>映像制作・配信に掛かる企画、<br />立案、実施、運営及びそれらに<br />関するコンサルティング業務</p>
                                </div>
                                <div className='sm:px-4 sm:py-5 drop-shadow-lg'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-medium text-xl leading-normal text-center'>情報/電子機器関連システム<br />(ハードウェア、ソフトウェア)<br />事務用機器の導入支援</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='sm:px-4 drop-shadow-lg'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-medium text-xl text-center'>Webサイト運営支援</p>
                                </div>
                                <div className='sm:px-4 drop-shadow-lg'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-medium text-xl leading-normal text-center'>映像制作会社のお見積り相談、<br />ご紹介 等</p>
                                </div>
                                <div className='sm:px-4 drop-shadow-lg'>
                                    <p className='bg-gradient-to-tr from-indigo-50 to-indigo-200 p-6 rounded-lg text-media-black font-medium text-xl text-center'>ITヘルプデスク支援</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto max-w-7xl px-2 sm:px-24 sm:pt-20 sm:pb-36'>
                        <div className='sm:pb-20'>
                            <p className='text-media-black text-5xl font-black sm:pb-4'>About us</p>
                            <p className='text-media-black text-4xl font-bold sm:pb-6'>Media Assist</p>
                            <p className='text-media-black text-base font-normal leading-loose'>私たちメディアアシストは、教育/研修向けの映像制作やその配信のご相談を通じて皆さまの事業の支援を行う会社として誕生しました。
                            映像のニーズが高まる中、「どうしていいのかわからない」という事業者さまも多いのではないでしょうか。<br />殊に、教育/研修向けコンテンツについては、丁寧・正確かつ効果のある内容が求められます。そのため、どの映像制作業者さんにお話をするか迷いがあったり、撮影費用の妥当性や依頼の仕方など、ご不明な点も多いとご相談をいただきます。弊社では、そのような事業者の皆さまのご相談に応じ、多数の関係先を通じ企画を実現するようにバックアップを行って参ります。</p>
                        </div>
                        <div>
                            <p className='text-media-black text-3xl font-bold sm:pb-6'>SDGs goal</p>
                            <div className='flex'>
                                <div className='flex justify-center items-center'>
                                    <Image
                                        src='/E_WEB_04.png'
                                        alt='Goal 4 SDGs'
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className='sm:px-10'>
                                    <p className='text-media-black text-base font-bold leading-loose sm:pb-3'>Goal 4 - 質の高い教育をみんなに</p>
                                    <p className='text-media-black text-base font-normal leading-loose'>弊社においては、デジタル映像を媒体とした教育コンテンツの支援を行い、判りやすい内容をあらゆるデバイスを経由して届く環境構築を試行します。また、教育という観点のみならず、人それぞれの求めるタイプに応じた情報へのアクセスを、協業のパートナー各社とともに提案していきます。</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center sm:pt-14'>
                            <button type='button' className='relative inline-flex items-center justify-center rounded-md py-3 px-8 text-lg text-media-black border border-media-black font-medium hover:text-media-white hover:drop-shadow-md hover:border-indigo-600 hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-media-white' onClick={aboutUsPageButton}>Read more</button>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}