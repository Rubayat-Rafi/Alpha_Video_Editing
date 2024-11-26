import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <a
        href="#short-form"
        className="hover:text-SecondTextColor transition cursor-pointer"
      >
        Short-form
      </a>
      <a
        href="#long-form"
        className="hover:text-SecondTextColor transition cursor-pointer"
      >
        Long-form
      </a>
      <a
        href="#results"
        className="hover:text-SecondTextColor transition cursor-pointer"
      >
        
        Results
      </a>
      <a
        href="#services"
        className="hover:text-SecondTextColor transition cursor-pointer"
      >Services
      </a>
      <a
        href="#pricing"
        className="hover:text-SecondTextColor transition cursor-pointer"
      >
        
        Pricing
      </a>
      <a
        href="#faq"
        className="hover:text-SecondTextColor transition cursor-pointer"
      >
        
        FAQs
      </a>
      <a
        href="#book-a-call"
        className="bg-MainColor text-TextColor px-2 py-2 rounded-lg w-full outline hover:outline-offset-4 outline-TextColor/5 hover:outline-mainColor transition-all cursor-pointer"
      >
        
        Book a call
      </a>
    </>
  );

  return (
    <nav className="w-11/12 md:backdrop-blur-2xl text-TextColor py-4 md:px-6 mx-auto flex items-center justify-between relative md:border border-TextColor/20 md:rounded-xl md:bg-TextColor/5 md:max-w-[720px] bg-BgColor">
      {/* Logo */}
      <div>
        <a href="#hero" smooth={true} duration={500} className="text-lg font-bold">
          Alpha
        </a>
      </div>

      {/* Navigation Links for desktop */}
      <div className="hidden md:block space-x-5 text-sm">{links}</div>

      {/* Hamburger menu for mobile */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl cursor-pointer"
      >
        {isOpen ? <RxCross2 /> : <RiMenu3Line />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" bg-BgColor absolute top-full left-0 w-full  flex flex-col items-start p-6 md:hidden space-y-5 text-center">
          {links}
        </div>
      )}
    </nav>
  );
};

export default Header;
