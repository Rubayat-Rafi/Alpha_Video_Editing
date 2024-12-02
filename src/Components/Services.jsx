import React from 'react';
import Title from './Title';

const Services = () => {
    return (
        <div id='services' className='  pt-[70px] md:pt-28'>
            <Title heading={"Services"} title={"How can we help"} styleTitle={" you?"} paragraph={"From Short-Form Videos to Long-Form Content, Ad Creatives, and VSLs – Comprehensive Video Editing Services Tailored for Every Need."} ></Title>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-8">

        {/* card 1  */}
        <div 
        style={{ background: "linear-gradient(-90deg, rgba(252,252,250,0.05) 30%, rgba(118,94,255,1) 100%)", backgroundRepeat: "no-repeat" }} 
        className="border border-TextColor/20  rounded-2xl py-14 px-8 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
            <h3 className='md:text-[40px] text-3xl leading-9  md:leading-[46px] font-medium text-center'>Video Videos</h3>
            <p className='text-center text-sm md::text-lg text-SecondTextColor leading-6 md:leading-7 md:w-3/6  lg:w-3/4'>From Short-Form Videos to Long-Form Content, Ad Creatives, and VSLs – Comprehensive Video Editing Services Tailored for Every Need.</p>
        </div>

        {/* card 2 */}
        <div className="border border-TextColor/20  rounded-2xl py-14 px-8 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
            <h3 className='md:text-[40px] text-3xl leading-9  md:leading-[46px] font-medium text-center'>Short Form Contents</h3>
            <p className='text-center text-sm md::text-lg text-SecondTextColor leading-6 md:leading-7 md:w-3/6  lg:w-3/4'>Custom edits optimized for Instagram, TikTok, and LinkedIn to grab attention and drive engagement on every platform.</p>
        </div>

        {/* card 3  */}
        <div 
         className="border border-TextColor/20  rounded-2xl py-14 px-8 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
            <h3 className='md:text-[40px] text-3xl leading-9  md:leading-[46px] font-medium text-center'>Podcast Editing</h3>
            <p className='text-center text-sm md::text-lg text-SecondTextColor leading-6 md:leading-7 md:w-3/6 lg:w-3/4'>Enhance your podcast with crisp audio, remove gaps, engaging visuals, and smooth transitions to captivate your audience</p>
        </div>

        {/* card 4 */}
        <div 
        style={{ background: "linear-gradient(90deg, rgba(252,252,250,0.05) 30%, rgba(118,94,255,1) 100%)", backgroundRepeat: "no-repeat" }} 
        className="border border-TextColor/20  rounded-2xl py-14 px-8 md:px-14 space-y-4 md:space-y-5 flex flex-col items-center justify-center">
            <h3 className='md:text-[40px] text-3xl leading-9  md:leading-[46px] font-medium text-center'>Ad Creatives and VSLS</h3>
            <p className='text-center text-sm md::text-lg text-SecondTextColor leading-6 md:leading-7 md:w-3/6  lg:w-3/4'>Deliver your message powerfully with high-quality video sales letters and visually striking creative edits.</p>
        </div>


        </div>

        </div>
    );
};

export default Services;