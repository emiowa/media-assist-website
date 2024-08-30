import React from 'react';
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Layout from '@/components/Layout';

export default function EnConstruccion() {
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
            <h1 className='text-media-black font-black pb-1 text-4xl md:text-5xl'>Muy pronto!</h1>
            <p className='text-media-black text-center font-bold text-base pt-8 md:text-xl'>Nuestro sitio web está actualmente en construcción</p>
            <p className='text-media-black text-center text-base'>Estamos trabajando duro para ofrecerte la mejor experiencia</p>
            <div ref={animation2Container} className='w-3/4 flex justify-center items-center md:w-1/3'></div>
          </div>
        </Layout>
      </div>
    );
  }