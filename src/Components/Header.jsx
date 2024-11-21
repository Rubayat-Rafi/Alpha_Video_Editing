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
        className="bg-MainColor text-TextColor px-4 py-2 rounded-lg  w-full outline hover:outline-offset-4 outline-TextColor/5 hover:outline-[#463899]  transition-all"
      >
        Book a call
      </a>
    </>
  );

  return (
    <nav className=" text-TextColor px-4 md:px-4 mx-auto py-4 flex items-center justify-between relative md:border border-TextColor/50 rounded-2xl mt-5 md:bg-TextColor/5 md:max-w-[670px]">
      {/* Logo */}
      <div>
        <h3 className="text-lg font-bold">Alpha</h3>
      </div>

      {/* Navigation Links for desktop */}
      <div className="hidden md:block space-x-5">{links}</div>

      {/* Hamburger menu for mobile */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl cursor-pointer"
      >
        {isOpen ? <RxCross2 /> : <RiMenu3Line />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-BgColor absolute top-full left-0 w-full  flex flex-col items-start p-4 md:hidden space-y-5 text-center">
          {links}
        </div>
      )}
    </nav>
  );
};

export default Header;
