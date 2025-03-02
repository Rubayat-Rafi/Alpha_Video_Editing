import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo Main.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <ul className=" flex flex-col items-start lg:text-center  lg:items-center lg:flex-row lg:space-x-8 text-sm space-y-5 lg:space-y-0 lg:text-[10px]">
      <li>
        <a
          onClick={() => setIsOpen(false)}
          href="/#long-form"
          className="hover:text-SecondTextColor transition cursor-pointer"
        >
          {/* <span className="lg:text-[16px] ">Long-Form</span> <span className="lg:text-xs">Video Editing</span> */}
          <span className="lg:text-[16px] lg:block">Long-Form </span>Video
          Editing
        </a>
      </li>
      <li>
        <a
          onClick={() => setIsOpen(false)}
          href="/#short-form"
          className="hover:text-SecondTextColor transition cursor-pointer"
        >
          <span className="lg:text-[16px] lg:block">Short-Form </span> Content
          Editing
        </a>
      </li>

      <li>
        <a
          onClick={() => setIsOpen(false)}
          href="/#results"
          className="hover:text-SecondTextColor transition cursor-pointer "
        >
          <span className="lg:text-[16px] lg:block">Our Success </span> Stories
        </a>
      </li>
      <li>
        <a
          onClick={() => setIsOpen(false)}
          href="/#services"
          className="hover:text-SecondTextColor transition cursor-pointer "
        >
          <span className="lg:text-[16px] lg:block">Our Video</span> Editing
          Services
        </a>
      </li>
      <li>
        <a
          onClick={() => setIsOpen(false)}
          href="/#pricing"
          className="hover:text-SecondTextColor flex flex-row lg:block  transition cursor-pointer space-x-1 lg:space-x-0 "
        >
          {" "}
          <p className="lg:text-[16px] lg:block">Plans </p> <span> & </span>{" "}
          <span> Pricing</span>
        </a>
      </li>
      <li>
        <a
          onClick={() => setIsOpen(false)}
          href="/#faq"
          className="hover:text-SecondTextColor transition cursor-pointer"
        >
          <span className="lg:text-[16px]">FAQs</span>
        </a>
      </li>
      <li>
        <a
          onClick={() => setIsOpen(false)}
          href="/#book-a-call"
          className="bg-MainColor text-TextColor px-2 py-2 lg:py-3 lg:px-4 rounded-lg w-full outline hover:outline-offset-4 outline-TextColor/5 hover:outline-mainColor transition-all cursor-pointer"
        >
          <span className="lg:text-[16px]">Book a call</span>
        </a>
      </li>
    </ul>
  );

  return (
    <nav
      className=" md:backdrop-blur-2xl text-TextColor py-4  px-6 mx-auto flex items-center justify-between relative lg:border border-TextColor/20 lg:rounded-xl lg:bg-TextColor/5
     lg:max-w-[910px] bg-BgColor "
    >
      {/* Logo */}
      <a href="/#root">
        <img src={logo} alt="logo" className=" w-10 lg:w-12" />
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
        <div className=" bg-BgColor absolute top-full left-0 w-full text-xs flex flex-col items-start p-6 lg:hidden  text-center  duration-500 transition-transform">
          {links}
        </div>
      )}
    </nav>
  );
};

export default Header;
