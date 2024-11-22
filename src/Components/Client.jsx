import React from "react";
import Title from "./Title";
import client from "../assets/client.png";

const Client = () => {
  return (
    <div className="py-20">
      <Title heading={"Our Clients"} title={"Hear it directly from "} styleTitle={"our clients."} paragraph={"Hear what our clients have to say. Our testimonials reflect the satisfaction our clients have in our services."} ></Title>

      {/* cards section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10 gap-12 lg:gap-20 justify-around lg:px-20">
        {/* Client 1 */}
        <div className="bg-TextColor/5 border rounded-2xl border-TextColor/20 p-8 lg:p-10">
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
        </div>


        {/* Client 2 */}
        <div className="bg-TextColor/5 border rounded-2xl border-TextColor/20 p-8 lg:p-10">
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
        </div>

      </div>
    </div>
  );
};

export default Client;
