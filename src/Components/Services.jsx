import React from 'react';
import Title from './Title';

const Services = () => {
    return (
        <div id='services' className='pt-24'>
            <Title heading={"Services"} title={"How can we help"} styleTitle={"you?"} paragraph={"From short-form videos, to long-form videos, to ad creatives, and VSLs, we've got you covered on every front."} ></Title>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-8">

        {/* card 1  */}
        <div 
        style={{ background: "linear-gradient(-90deg, rgba(252,252,250,0.05) 30%, rgba(118,94,255,1) 100%)", backgroundRepeat: "no-repeat" }} 
        className="border border-TextColor/20  rounded-2xl py-14 px-8 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
            <h3 className='md:text-[40px] text-3xl leading-9  md:leading-[46px] font-medium text-center'>YouTube Videos</h3>
            <p className='text-center text-sm md::text-lg text-SecondTextColor leading-6 md:leading-7 md:w-3/6  lg:w-3/4'>YouTube videos made more engaging than ever for longer watch time and more subscribers.</p>
        </div>

        {/* card 2 */}
        <div className="border border-TextColor/20  rounded-2xl py-14 px-8 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
            <h3 className='md:text-[40px] text-3xl leading-9  md:leading-[46px] font-medium text-center'>Short Form Videos</h3>
            <p className='text-center text-sm md::text-lg text-SecondTextColor leading-6 md:leading-7 md:w-3/6  lg:w-3/4'>Nail your Reels, TikToks and YouTube shorts to optimize engagement and shareability.</p>
        </div>

        {/* card 3  */}
        <div 
         className="border border-TextColor/20  rounded-2xl py-14 px-8 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
            <h3 className='md:text-[40px] text-3xl leading-9  md:leading-[46px] font-medium text-center'>Podcast Editing</h3>
            <p className='text-center text-sm md::text-lg text-SecondTextColor leading-6 md:leading-7 md:w-3/6 lg:w-3/4'>Podcasts edited to perfection for clear sound, engaging flow, and a loyal audience.</p>
        </div>

        {/* card 4 */}
        <div 
        style={{ background: "linear-gradient(90deg, rgba(252,252,250,0.05) 30%, rgba(118,94,255,1) 100%)", backgroundRepeat: "no-repeat" }} 
        className="border border-TextColor/20  rounded-2xl py-14 px-8 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
            <h3 className='md:text-[40px] text-3xl leading-9  md:leading-[46px] font-medium text-center'>Ad Creatives & VSLs</h3>
            <p className='text-center text-sm md::text-lg text-SecondTextColor leading-6 md:leading-7 md:w-3/6  lg:w-3/4'>High-converting ad creatives and VSLs crafted to grab attention, drive action, and boost sales.</p>
        </div>


        </div>

        </div>
    );
};

export default Services;