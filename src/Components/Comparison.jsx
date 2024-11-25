import React from "react";
import Title from "./Title";
import { RxCross2 } from "react-icons/rx";
import { GoCheck } from "react-icons/go";

const Comparison = () => {
  return (
    <div className="pt-24">
      <title></title>
      <div className="lg:w-2/4 mx-auto">
        <Title
          heading={"Comparison"}
          title={"But, why would you want to work"}
          styleTitle={"with us?"}
        ></Title>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 ">
        {/* other agency */}
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-center mb-6 text-SecondTextColor">
            Other Agencies
          </h3>
          <div className="bg-TextColor/5 border rounded-2xl border-TextColor/20 p-8 lg:p-10  space-y-5 text-SecondTextColor text-base md:text-lg ">
            <p className="flex items-center gap-2">
              <span className="text-lg md:text-xl lg:text-2xl">
                <RxCross2 />
              </span>
              Varies, often less specialized
            </p>
            <p className="flex items-center gap-2">

              <span className="text-lg md:text-xl lg:text-2xl">
                <RxCross2 />
              </span>
              Limited flexibility
            </p>
            <p className="flex items-center gap-2">
 
              <span className="text-lg md:text-xl lg:text-2xl">
                <RxCross2 />
              </span>
              Often delayed or undefined
            </p>
            <p className="flex items-center gap-2">
              <span className="text-lg md:text-xl lg:text-2xl">
                <RxCross2 />
              </span>
              Basic edits or generic filters
            </p>
            <p className="flex items-center gap-2">
               <span className="text-lg md:text-xl lg:text-2xl">
                <RxCross2 />
              </span>
              General editing without optimization
            </p>
            <p className="flex items-center gap-2">
 
              <span className="text-lg md:text-xl lg:text-2xl">
                <RxCross2 />
              </span>
              Can be impersonal or delayed
            </p>
            <p className="flex items-center gap-2">
            
              <span className="text-lg md:text-xl lg:text-2xl">
                <RxCross2 />
              </span>
              Hidden costs or subpar results
            </p>
          </div>
        </div>
                                        
        {/* Alpha Video Editing */}
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-center mb-6 text-TextColor">
          Alpha Video Editing
          </h3>
          <div style={{ background: "linear-gradient(90deg, rgba(252,252,250,0.05) 30%, rgba(118,94,255,1) 100%)", backgroundRepeat: "no-repeat" }} className=" border rounded-2xl border-TextColor/20 p-8 lg:p-10  space-y-5 text-TextColor text-base md:text-lg overflow-hidden"
          >
            <p className="flex items-center gap-3">
              <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
              <GoCheck />
              </span>
              Years of professional editing with top-tier tools
            </p>
            <p className="flex items-center gap-3">

            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
              <GoCheck />
              </span>
              Tailored edits to match client needs
            </p>
            <p className="flex items-center gap-3">
 
            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
              <GoCheck />
              </span>
              3-7 days with rush options
            </p>
            <p className="flex items-center gap-3">
            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
              <GoCheck />
              </span>
              Use of motion graphics, VFX, and color grading
            </p>
            <p className="flex items-center gap-3">
            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
              <GoCheck />
              </span>
              Platform-specific optimization (YouTube, Instagram, TikTok)
            </p>
            <p className="flex items-center gap-3">
 
            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
              <GoCheck />
              </span>
              Direct, transparent, and timely
            </p>
            <p className="flex items-center gap-3">
            
            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
              <GoCheck />
              </span>
              Competitive rates with no compromise on quality
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Comparison;