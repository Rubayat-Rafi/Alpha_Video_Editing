import React from "react";

const Intro = () => {
  return (
    <div className="mb-24">
      <div className="">
        {/* Main Heading */}
        <h1 className="text-center text-3xl md:text-5xl lg:text-[60px] md:leading-[66px] font-bold leading-tight">
          Why Storytelling Matters in
          <span className="font-Instrument lg:ml-3 text-MainColor tracking-wider">
            Video Editing
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-400 text-sm md:text-base lg:px-16 lg:text-lg mt-6">
          Discover how storytelling elevates video editing, captivates
          audiences, and transforms content into unforgettable experiences for
          your brand.
        </p>
      </div>

      {/* intro video */}
      <div className="flex items-center justify-center mt-10 rounded-2xl overflow-hidden">

          <iframe
            className="w-full h-[280px]  lg:w-1/2 lg:h-[400px] rounded-2xl"
            src="https://www.youtube.com/embed/M43od-A17No?si=xPTRI46QHYyxXJ8i"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

    </div>
  );
};

export default Intro;
