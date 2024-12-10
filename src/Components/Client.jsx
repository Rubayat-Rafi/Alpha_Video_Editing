import React from "react";
import Title from "./Title";
// import client from "../assets/client.png";

const Client = () => {
  return (
    <div id="results" className="max-w-[1440px] mx-auto w-11/12">
      <div  className="py-16 lg:py-28">
        <div className="lg:px-[17%]">
          <div className="flex items-center flex-col justify-center text-TextColor  text-center">
            <div className="py-2 px-4 border rounded-lg mb-4 md:mb-6 border-TextColor/20 font-medium text-xs md:text-sm lg:text-base">
              Our Clients
            </div>
            <h3 className="mb-3 md:mb-6 text-2xl md:text-4xl lg:text-[60px] md:leading-[66px] font-medium">
              <span className="block lg:inline">What Our Clients Say </span>
              <span className="text-MainColor font-Instrument italic ">
                About Us
              </span>
            </h3>
            <p className="text-xs md:text-base lg:text-lg text-center text-SecondTextColor">
              Discover how AlphaVideoEdit.com delivers exceptional video editing
              services that clients trust. Hear firsthand experiences and
              success stories that showcase our dedication to quality and
              impactful results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-16 mt-10 md:px-[23%] lg:px-[21%] ">
          <div>
            <iframe
              className="rounded-2xl object-contain w-full h-[300px] md:h-[400px] lg:h-[700px]"
              src="https://www.youtube.com/embed/CxlpHtjCVFw?rel=0"
              allow="autoplay"
            ></iframe>
          </div>
          <div>
            <iframe
              className="rounded-2xl object-contain w-full h-[300px] md:h-[400px]  lg:h-[700px]"
              src="https://www.youtube.com/embed/I8pRGI89znU?rel=0"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
