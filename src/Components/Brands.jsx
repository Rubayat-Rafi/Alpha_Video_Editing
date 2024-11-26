import React from "react";
import "../styles/brands.css";
import image from "../assets/w-logo.png";

const Brands = () => {
  return (
    <div className="">
      <h3 className="text-center text-SecondTextColor text-sm md:text-base lg:text-lg mb-10">
        You're in good hands
      </h3>

      <div className="wrapper">
        <div className="item item1"></div>
        <div className="item item2">
          <img src={image} alt="" />
        </div>
        <div className="item item3"></div>
        <div className="item item4">brand</div>
        <div className="item item5"></div>
        <div className="item item6"></div>
        <div className="item item7"></div>
        <div className="item item8"></div>
      </div>
    </div>
  );
};

export default Brands;
