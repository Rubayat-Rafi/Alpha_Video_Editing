import React from "react";
import Title from "./Title";

const Talk = () => {
  return (
    <div id="book-a-call" className="pt-24 ">
        <div className="border border-TextColor/20 p-12 rounded-2xl">
      <div>
        <Title heading={"Book a call"}
          title={"Ready to scale? "}
          styleTitle={"Let's talk!"}
          paragraph={"Book a free call with our team below to get started."}
        ></Title>
      </div>
{/* 
      <div className="">
      <div className="calendly-inline-widget min-w-[320px] h-[700px]" data-url="https://calendly.com/rubayatrafi522" style={{ minWidth: "320px", height: "700px" }} ></div>
      </div> */}
      </div>
    </div>
  );
};

export default Talk;
