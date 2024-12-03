import React from "react";
import client1 from "../assets/ClientImage/client1.webp";
import client2 from "../assets/ClientImage/client2.webp";
import client3 from "../assets/ClientImage/client3.webp";
import client4 from "../assets/ClientImage/client4.webp";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div id="hero" className=" py-8 md:py-12 lg:py-20">
      <div className=" text-white flex flex-col items-center md:items-center justify-center  py-20 relative">
        {/* Trusted Section */}
        <div className="flex items-start md:items-center md:flex-row  flex-col md:space-x-3 gap-1 md:gap-0 mb-4 md:mb-6">
          <div className="flex -space-x-2">
            {/* Images */}
            <img
              src={client1}
              alt="User 1"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2 object-cover"
            />
            <img
              src={client2}
              alt="User 2"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2 object-cover"
            />
            <img
              src={client3}
              alt="User 3"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2 object-cover"
            />
            <img
              src={client4}
              alt="User 4"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2 object-cover"
            />
          </div>
          <p className=" text-[10px] leading-4 md:text-sm text-SecondTextColor md:leading-6">
            ⭐⭐⭐⭐⭐ <br /> Work with top creators worldwide. <br />
            Trusted by 30+ influencers, brands, and content creators.
          </p>
        </div>

       
        <div className="lg:px-[15%]">
           {/* Main Heading */}
        <h1 className="text-center text-2xl md:text-4xl lg:text-[60px] lg:leading-[66px] font-bold leading-tight">
          Maximize Your Reach and Engagement With 
          <span className="font-Instrument ml-3 text-MainColor tracking-wider">
              Professionally Edited Videos
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-center leading-5 md:leading-6 text-gray-400 text-xs md:text-base lg:px-16 lg:text-lg mt-4 md:mt-6">
        Trusted by creators and brands worldwide, AlphaVideoEdit.com specializes in professional video editing for influencers, educators, and businesses. Whether it’s engaging long-form content or attention-grabbing short-form videos, we craft impactful stories that captivate audiences, enhance brand reach, and drive real results.
        </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex items-center space-x-6 z-10">
          <a
            target="_blank"
            href="https://tidycal.com/alphavideoedit2001/15-minute-meeting"
            className="bg-MainColor text-TextColor px-4 py-2 md:px-6 md:py-3 rounded-lg outline hover:outline-offset-4 outline-TextColor/5 font-semibold hover:outline-mainColor transition-all text-sm md:text-base"
          >
            Book a call
          </a>
          <a
            
            className="bg-TextColor/5 outline hover:outline-offset-4  text-TextColor px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold outline-TextColor/5 hover:outline-mainColor transition text-sm md:text-base"
          >
            <Link to={'/about'}>Learn More</Link>
          </a>
        </div>

        {/* Glow Effect */}
        <div className="absolute bottom-0 bg-MainColor blur-[150px] opacity-70 w-64 h-64 rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
