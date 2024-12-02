import React from "react";
import Title from "./Title";
// import client from "../assets/client.png";

const Client = () => {
  return (
    <div id="results" className="  pt-[70px] md:pt-28">
      <Title heading={"Our Clients"} title={"What Our Clients Say "} styleTitle={"About Us"} paragraph={"Discover how AlphaVideoEdit.com delivers exceptional video editing services that clients trust. Hear firsthand experiences and success stories that showcase our dedication to quality and impactful results."} ></Title>

      {/* cards section  */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10 gap-12 lg:gap-20 justify-around lg:px-20"> */}
        {/* Client 1 */}
        {/* <div className="bg-TextColor/5 border rounded-2xl border-TextColor/20 p-8 lg:p-10">
          <div className="mb-6">
            <iframe
              className="rounded-2xl w-full h-[315px]"
              src="https://www.youtube.com/embed/6RUnqCmSk_w?si=ZmjdhcLkFUZ-NOGv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h4 className="text-sm md:text-base lg:text-lg font-medium leading-6">
              I've used Diwas and his team for 2-3 months, creating 40-50
              amazing videos. They handle everything efficiently and communicate
              well.
            </h4>
            <div className="flex items-center gap-4 mt-6">
              <img src={client} className="h-14 w-14 rounded-full" alt="" />
              <div className="text-SecondTextColor space-y-1">
                <h6 className="text-sm md:text-base lg:text-lg font-semibold ">Jimmy Conover</h6>
                <p className="text-xs md:text-sm lg:text-base font-normal">Founder @ Scale Video Agency</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* Client 2 */}
        {/* <div className="bg-TextColor/5 border rounded-2xl border-TextColor/20 p-8 lg:p-10">
          <div className="mb-6">
            <iframe
              className="rounded-2xl w-full h-[315px]"
              src="https://www.youtube.com/embed/6RUnqCmSk_w?si=ZmjdhcLkFUZ-NOGv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h4 className="text-sm md:text-base lg:text-lg font-medium leading-6">
              I've used Diwas and his team for 2-3 months, creating 40-50
              amazing videos. They handle everything efficiently and communicate
              well.
            </h4>
            <div className="flex items-center gap-4 mt-6">
              <img src={client} className="h-14 w-14 rounded-full" alt="" />
              <div className="text-SecondTextColor space-y-1">
                <h6 className="text-sm md:text-base lg:text-lg font-semibold ">Jimmy Conover</h6>
                <p className="text-xs md:text-sm lg:text-base font-normal">Founder @ Scale Video Agency</p>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}

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
