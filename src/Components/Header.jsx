import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <a href="#" className="hover:text-SecondTextColor transition">
        Short-form
      </a>
      <a href="#" className="hover:text-SecondTextColor transition">
        Long-form
      </a>
      <a href="#" className="hover:text-SecondTextColor transition">
        Results
      </a>
      <a href="#" className="hover:text-SecondTextColor transition">
        Services
      </a>
      <a href="#" className="hover:text-SecondTextColor transition">
        Process
      </a>
      <a href="#" className="hover:text-SecondTextColor transition">
        FAQs
      </a>
      <a
        href="#"
        className="bg-MainColor text-TextColor px-2 py-2 rounded-lg  w-full outline hover:outline-offset-4 outline-TextColor/5 hover:outline-mainColor transition-all"
      >
        Book a call
      </a>
    </>
  );

  return (

      <nav className="w-11/12 text-TextColor px-4 md:px-6 mx-auto py-4 flex items-center justify-between relative md:border border-TextColor/20 rounded-xl mt-5 md:bg-TextColor/5 md:max-w-[720px]">
        
        {/* Logo */}
        <div>
          <h3 className="text-lg font-bold">Alpha</h3>
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
          <div className="bg-[#0a0416] absolute top-full left-0 w-full  flex flex-col items-start p-4 md:hidden space-y-5 text-center z-30">
            {links}
          </div>
        )}
      </nav>
  );
};

export default Header;
