import React from "react";

const Intro = () => {


  return (
    <div className="bg-MainColor/5">
      <div className=" py-16 lg:py-28 max-w-[1440px] mx-auto w-11/12">
        <div className="lg:px-[20%]">
          {/* Main Heading */}
          <h1 className="text-center text-2xl md:text-4xl lg:text-[60px] md:leading-[66px] font-medium leading-tight">
            <span>Why Storytelling Matters in </span>
            <span className="font-Instrument lg:ml-3 italic text-MainColor tracking-wider">
              Video Editing
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-400 text-xs md:text-base lg:px-16 lg:text-lg mt-4 md:mt-6">
            Discover how storytelling elevates video editing, captivates
            audiences, and transforms content into unforgettable experiences for
            your brand.
          </p>
        </div>

        {/* intro video */}
        <div className="flex items-center justify-center mt-10 rounded-2xl overflow-hidden">
          <iframe
            className="w-full h-[200px] sm:h-[300px] md:h-[500px]  lg:w-2/3 lg:h-[550px] rounded-2xl"
            src="https://www.youtube.com/embed/M43od-A17No?si=xPTRI46QHYyxXJ8i"
            title="YouTube video player"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Intro;
