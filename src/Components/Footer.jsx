import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative border-t border-TextColor/20 ">
      <div className="py-14 max-w-[1440px] w-11/12 mx-auto">
        <h3 className="text-3xl font-bold mb-8">Alpha</h3>
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="text-TextColor">
            <p className="text-lg font-semibold mb-4">Join Our Newsletter</p>
            <p className="max-w-[500px] text-base text-SecondTextColor">
              Sign up to our mailing list below and be the first to know about
              new updates. Don't worry, we hate spam too.
            </p>
            <div className="mt-3 space-x-2 ">
              <input
                type="email"
                className="py-2 md:px-4 pl-2  rounded-lg bg-TextColor/20 placeholder:text-TextColor placeholder:text-xs md:placeholder:text-sm border border-TextColor/50 w-[180px] md:w-[270px] outline-none"
                placeholder="Your Email Address"
              />
              <button className="bg-MainColor text-sm md:text-base md:py-2 rounded-lg md:px-4 py-2 px-1 font-medium md:font-medium">
                Get Notified
              </button>
            </div>
          </div>
          <div className="flex gap-8 md:flex-row flex-col mb-10">
            <nav>
              <h3 className="text-base text-TextColor mb-5">Links</h3>
              <div className="flex md:flex-col md:space-x-0 space-x-6 md:space-y-4 text-sm text-SecondTextColor flex-wrap">
                <p className="">Results</p>
                <p>Services</p>
                <p>Comparison</p>
                <p>Process</p>
              </div>
            </nav>
            <nav>
              <h3 className="text-base text-TextColor mb-5">Information</h3>
              <div className="md:space-y-4 text-sm text-SecondTextColor flex space-x-6 md:flex-col md:space-x-0">
                <p>FAQ</p>
                <p>Contact Us</p>
                <p>About Us</p>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* up arrow  */}
      {/* <div className=" absolute bottom-5 right-5 flex items-center justify-center">
        <div
        onClick={scrollToTop}  className="inline-block p-4 bg-MainColor text-white rounded-md cursor-pointer">
          <FaArrowUp className="lg:text-xl" />
        </div>
      </div> */}

    </div>
  );
};

export default Footer;
