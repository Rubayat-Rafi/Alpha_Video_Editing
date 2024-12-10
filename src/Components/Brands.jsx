import React from "react";
import "../styles/brands.css";
import brand1 from "../assets/BrandImages/pngwing.com (1).png"
import brand2 from "../assets/BrandImages/pngwing.com (2).png"
import brand3 from "../assets/BrandImages/pngwing.com (3).png"
import brand4 from "../assets/BrandImages/5.png"
import brand5 from "../assets/BrandImages/8 (2).png"
import brand6 from "../assets/BrandImages/6.png"
import brand7 from "../assets/BrandImages/7.png"
import brand8 from "../assets/BrandImages/8.png"

const Brands = () => {
  return (
    <div className=" pt-12 md:pt-16 lg:pt-24 max-w-[1440px] mx-auto w-11/12">
      <h3 className="text-center text-SecondTextColor text-sm md:text-base lg:text-lg mb-10">
        You're in good hands:
      </h3>

      <div className="wrapper">
        <div className="item item1 ">
          <img src={brand1} alt="" className="" />
        </div>
        <div className="item item2 rounded-md object-cover">
          <img src={brand2} alt="" className="object-cover " />
        </div>
        <div className="item item3">
          <img src={brand3} alt="" />
        </div>
        <div className="item item4">
          <img src={brand4} alt="" />
        </div>
        <div className="item item5">
          <img src={brand5} alt="" />
        </div>
        <div className="item item6">
          <img src={brand6} alt="" className="" />
        </div>
        <div className="item item7">
          <img src={brand7} alt="" />
        </div>
        <div className="item item8">
          <img src={brand8} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
