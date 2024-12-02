import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo Main.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <ul className=" flex flex-col items-start  lg:text-center  lg:items-center lg:flex-row lg:space-x-8 text-sm space-y-4 lg:space-y-0">
      <li className="lg:w-[110px]">
        <a
          href="#long-form"
          className="hover:text-SecondTextColor transition cursor-pointer "
        >
          <span className="lg:text-lg">Long-Form</span> <span className="lg:tracking-wide">Video Editing</span>
           
        </a>
      </li>
      <li className="lg:w-[120px]">
        <a
          href="#short-form"
          className="hover:text-SecondTextColor transition cursor-pointer"
        >
          <span className="lg:text-lg ">Short-Form</span> <span className="lg:tracking-tight">Content Editing</span>
           
        </a>
      </li>

      <li className="lg:w-[120px]">
        <a
          href="#results"
          className="hover:text-SecondTextColor transition cursor-pointer "
        >
          <span className="lg:text-lg">Our Success</span> <span className="lg:tracking-wider">Stories</span>
        </a>
      </li>
      <li className="lg:w-[120px]">

        <a
          href="#services"
          className="hover:text-SecondTextColor transition cursor-pointer "
        >
          <span className="lg:text-lg lg:tracking-[2px]">Our Video</span> <span className="lg:tracking-tight ">Editing Services</span>
        </a>
      </li>
      <li className="lg:w-[65px]">
        <a
          href="#pricing"
          className="hover:text-SecondTextColor transition cursor-pointer "
        >
          <span className="lg:text-lg lg:tracking-[2px]">Plans</span> & Pricing
        </a>
      </li>
      <li className="">
        <a
          href="#faq"
          className="hover:text-SecondTextColor transition cursor-pointer"
        >
          <span className="lg:text-lg">FAQs</span>
        </a>
      </li>
      <li className="">
        <a
          href="#book-a-call"
          className="bg-MainColor text-TextColor px-2 py-2 lg:py-3 lg:px-4 rounded-lg w-full outline hover:outline-offset-4 outline-TextColor/5 hover:outline-mainColor transition-all cursor-pointer"
        >
          <span className="lg:text-lg">Book a call</span>
        </a>
      </li>
    </ul>
  );

  return (
    <nav className=" md:w-11/12 md:backdrop-blur-2xl text-TextColor py-4  px-6 mx-auto flex items-center justify-between relative lg:border border-TextColor/20 md:rounded-xl lg:bg-TextColor/5 lg:max-w-[1050px] bg-BgColor">
      {/* Logo */}
      <a href="#hero">
        <img src={logo} alt="logo" className="w-14" />
      </a>

      {/* Navigation Links for desktop */}
      <div className="hidden lg:block ">{links}</div>
      {/* Hamburger menu for mobile */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-2xl cursor-pointer"
      >
        {isOpen ? <RxCross2 /> : <RiMenu3Line />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" bg-BgColor absolute top-full left-0 w-full text-xs flex flex-col items-start p-6 lg:hidden  text-center">
          {links}
        </div>
      )}
    </nav>
  );
};

export default Header;
