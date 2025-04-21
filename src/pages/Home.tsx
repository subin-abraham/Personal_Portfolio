'use client';
import React, { useEffect, useState } from 'react'
import BounceCards from '../components/BounceCards'
import "../style/Home-Style.css"
import RotatingText from '../components/RotatingText';
import SplitText from '../components/SplitText';
import { easings } from '@react-spring/web';
import { useRef } from 'react';



const images = [
  "/images/gallery_image_1.jpg",
  "/images/gallery_image_2.jpg",
  "/images/gallery_image_3.jpg",
  "/images/gallery_image_4.jpg",
  "/images/gallery_image_5.jpg",
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

const segments = [
  <span>I'm Subin. I Design, Develop, and Deliver</span>,
  <span key="digital-rotating" className='flex gap-2 mt-3 items-center'>
    Digital{' '}
    <RotatingText
      texts={['Experiences', 'Solutions', 'Products']}
      mainClassName="px-2 sm:px-2 md:px-3 text-blue-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
      staggerFrom="last"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-120%' }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
  </span>
];

const HomeComponent = () => {

  const [dimensions, setDimensions] = useState({
    width: 500,
    height: 250,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 768) {
        setDimensions({ width: 100, height: 250 });
      } else {
        setDimensions({ width: 500, height: 250 });
      }
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  function handleAnimationComplete(): void {
    // console.log('Letter animation completed');
  }

  return (
    <div className="vw-100 md:min-h-[100vh] h-auto mt-5 md:max-h-[auto] flex flex-col justify-center items-center gap-10">
      <div className="text-2xl md:text-6xl font-bold space-x-2.5 text-center flex">
        <span>
          <SplitText
            segments={segments} className="text-2xl md:text-6xl font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing={easings.easeOutCubic}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </span>
      </div>
      <div className="md:max-w-3/4 max-w-auto text-[#5E5F6E] text-center border-t-4 border-b-4 border-double border-gray-300 p-5">
        I'm a front-end developer with a love for design. This site is intentionally over-engineered and serves as my playground for experimenting with new ideas and seeing what sticks!
      </div>
      <div className=''>
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={dimensions.width}
          containerHeight={dimensions.height}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>
    </div>
  )
}

export default HomeComponent
