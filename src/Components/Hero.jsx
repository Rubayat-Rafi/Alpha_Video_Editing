import React from "react";
import client from "../assets/client.png"

const Hero = () => {
  return (
    <div  className="mt-20">
      <div className=" text-white flex flex-col items-center justify-center  md:px-16 lg:px-32 py-20 relative">
        {/* Trusted Section */}
        <div className="flex items-start md:flex-row  flex-col-reverse space-x-3 gap-1 md:gap-0 mb-6">
          <div className="flex -space-x-2">
            {/* Images */}
            <img
              src={client}
              alt="User 1"
              className="w-10 h-10 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2"
            />
            <img
              src={client}
              alt="User 2"
              className="w-10 h-10 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2"
            />
            <img
              src={client}
              alt="User 3"
              className="w-10 h-10 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2"
            />
            <img
              src={client}
              alt="User 4"
              className="w-10 h-10 rounded-full border-2 border-black transition-transform duration-300 hover:-translate-y-2"
            />
          </div>
          <p className="text-sm text-SecondTextColor">
            ⭐⭐⭐⭐⭐ <br /> Trusted by 20+ brands & creators
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-center text-3xl md:text-5xl lg:text-[60px] md:leading-[66px] font-bold leading-tight">
          Maximize your reach with <br />
          <span className="font-Instrument text-MainColor italic">
            professionally edited videos.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-400 text-sm md:text-base lg:text-lg mt-6">
          Our expert editors and animators help you make kick-ass videos <br />
          and grow faster. It's time you stood out in a sea of sameness.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center space-x-6  z-10">
          <button
            className="bg-MainColor text-TextColor px-4 py-2 md:px-6 md:py-3 rounded-lg outline hover:outline-offset-4 outline-TextColor/5 font-semibold hover:outline-mainColor transition-all text-sm md:text-base"
          >
            Book a call
          </button>
          <a
           href="#reviews"
            className="bg-TextColor/5 outline hover:outline-offset-4  text-TextColor px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold outline-TextColor/5 hover:outline-mainColor transition text-sm md:text-base"
          >
            Learn More
          </a>
        </div>

        {/* Glow Effect */}
        <div className="absolute bottom-0 bg-MainColor blur-[150px] opacity-70 w-64 h-64 rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
