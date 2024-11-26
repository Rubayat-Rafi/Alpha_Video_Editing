import React, { useEffect } from "react";
import Title from "./Title";

const Talk = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="book-a-call" className="pt-24 ">
      <div className="border border-TextColor/20 p-12 rounded-2xl">
        <div>
          <Title
            heading={"Book a call"}
            title={"Ready to scale? "}
            styleTitle={"Let's talk!"}
            paragraph={"Book a free call with our team below to get started."}
          ></Title>
        </div>
        <div className="lg:px-[100px] rounded-2xl mt-6">
          <div
            className="tidycal-embed "
            data-path="alphavideoedit2001/15-minute-meeting"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Talk;
