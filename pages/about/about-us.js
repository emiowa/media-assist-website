import React from 'react';
import Layout from "../../components/Layout"
import Image from "next/image"

export default function AboutUs(){
    return(
        <div>
            <Layout>
                <div className='mx-auto max-w-7xl px-2 sm:px-24'>
                    <div className="h-screen grid grid-cols-2 items-center">
                        <div className="">
                            <p className="text-media-black text-5xl font-black sm:pb-4">Media Assist</p>
                            <p className='text-media-black text-4xl font-bold sm:pb-6'>みんなのメディアを作る会社</p>
                            <p className='text-media-black text-base font-normal leading-loose'>私たちメディアアシストは、教育/研修向けの映像制作やその配信のご相談を通じて皆さまの事業の支援を行う会社として誕生しました。
                            映像のニーズが高まる中、「どうしていいのかわからない」という事業者さまも多いのではないでしょうか。<br />殊に、教育/研修向けコンテンツについては、丁寧・正確かつ効果のある内容が求められます。そのため、どの映像制作業者さんにお話をするか迷いがあったり、撮影費用の妥当性や依頼の仕方など、ご不明な点も多いとご相談をいただきます。弊社では、そのような事業者の皆さまのご相談に応じ、多数の関係先を通じ企画を実現するようにバックアップを行って参ります。</p>
                        </div>
                        <div className="mx-auto bg-gray-300 w-64 h-64">

                        </div>
                    </div>
                    <div className="bg-gradient-to-tr from-indigo-200 to-indigo-100 rounded-bglg drop-shadow-lg sm:py-10">
                        <p className='text-media-black text-4xl font-bold sm:pb-8 text-center'>Our company</p>
                        <div className="flex flex-col items-center">
                            <div className='flex leading-loose'>
                                <p className='font-bold text-media-black text-lg'>会社名:</p>
                                <p className='text-media-black text-lg sm:pl-2'>株式会社メディアアシスト</p>
                            </div>
                            <div className='flex leading-loose'>
                                <p className='font-bold text-media-black text-lg'>代表者:</p>
                                <p className='text-media-black text-lg sm:pl-2'>松城　麻以子</p>
                            </div>
                            <div className='flex leading-loose'>
                                <p className='font-bold text-media-black text-lg'>所在地:</p>
                                <p className='text-media-black text-lg sm:pl-2'>〒170-6045　東京都豊島区東池袋3-1-1　サンシャイン60 45階</p>
                            </div>
                            <div className='flex leading-loose'>
                                <p className='font-bold text-media-black text-lg'>資本金:</p>
                                <p className='text-media-black text-lg sm:pl-2'>500万円</p>
                            </div>
                            <div className='flex leading-loose'>
                                <p className='font-bold text-media-black text-lg'>設立:</p>
                                <p className='text-media-black text-lg sm:pl-2'>2021年11月</p>
                            </div>
                            <div className='flex leading-loose'>
                                <p className='font-bold text-media-black text-lg'>従業員数:</p>
                                <p className='text-media-black text-lg sm:pl-2'>9名</p>
                            </div>
                            <div className='flex leading-loose'>
                                <p className='font-bold text-media-black text-lg'>主な取引先(敬称略):</p>
                                <p className='text-media-black text-lg sm:pl-2'>独立行政法人国際協力機構(JICA)</p>
                            </div>
                            <div className='flex leading-loose'>
                                <p className='font-bold text-media-black text-lg'>関連会社:</p>
                                <p className='text-media-black text-lg sm:pl-2'>株式会社国際協力データサービス</p>
                            </div>
                            <div className='flex flex-col leading-loose sm:pt-12'>
                                <p className='font-bold text-media-black text-lg'>会社沿革:</p>
                                <p className='text-media-black text-lg sm:pl-5'>2016年より一般派遣事業者内業務受託チームとして映像制作支援事業を担当</p>
                                <p className='text-media-black text-lg sm:pl-5'>2021年11月 株式会社ICDSメディアアシストを設立</p>
                                <p className='text-media-black text-lg sm:pl-5'>2024年 4月　コンテンツ事業課を設置</p>
                                <p className='text-media-black text-lg sm:pl-5'>2024年 6月　株式会社メディアアシストへ社名変更、所在地を豊島区東池袋へ移転</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:pt-20 sm:pb-36">
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
                </div>
            </Layout>
        </div>
    )
}