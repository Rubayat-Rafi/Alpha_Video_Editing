import React from "react";
import Title from "./Title";
// import client from "../assets/client.png";

const Client = () => {
  return (
    <div id="results" className="  pt-[70px] md:pt-28">
      <div className="lg:px-[17%]">
        <Title
          heading={"Our Clients"}
          title={"What Our Clients Say "}
          styleTitle={"About Us"}
          paragraph={
            "Discover how AlphaVideoEdit.com delivers exceptional video editing services that clients trust. Hear firsthand experiences and success stories that showcase our dedication to quality and impactful results."
          }
        ></Title>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-16 mt-10 md:px-[150px] lg:px-[300px] ">
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
  );
};

export default Client;
