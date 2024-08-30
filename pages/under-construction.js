import React from 'react';
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Layout from '@/components/Layout';

export default function UnderConstruction() {
  let animation2Container = useRef(null);

  useEffect(() => {
      const anim = lottie.loadAnimation({
          container: animation2Container.current,
          render: 'svg',
          loop: true,
          autoplay: true,
          path: '/animations/MA-website-animation2json.json'
      })

      return () => anim.destroy();
  }, [])
    return (
      <div>
      <Layout>
        <div className='mx-auto max-w-7xl h-screen flex flex-col justify-center items-center mt-20 md:mt-24'>
          <h1 className='text-media-black font-black pb-1 text-4xl md:text-5xl'>Coming soon!</h1>
          <p className='text-media-black text-center font-bold text-base pt-8 md:text-xl'>Our website is under construction now</p>
          <p className='text-media-black text-center text-base'>We are working hard to give you the best experience with this one</p>
          <div ref={animation2Container} className='w-3/4 flex justify-center items-center md:w-1/3'></div>
        </div>
      </Layout>
    </div>
    );
  }