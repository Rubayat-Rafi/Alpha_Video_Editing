import React from "react";
import Title from "./Title";

const LongForm = () => {
  return (
    <div id="long-form" className="pt-24">
      <Title
        heading={"Long-Form"}
        title={"Long-Form Video"}
        styleTitle={" Masterpieces"}
        paragraph={
          "Create impactful, engaging videos for any platform. Perfect for education, entertainment, or storytelling to captivate your audience."
        }
      ></Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 ">
        <div>
        
          <iframe
            className="rounded-2xl"
            src="https://drive.google.com/file/d/1OFvhDDe-2fyMfwcLGoKCHugly1mQI19W/preview"
            width="100%"
            height="350px"
            allow="autoplay"
          ></iframe>
        </div>
        <div>
          
          <iframe
            className="rounded-2xl"
            src="https://drive.google.com/file/d/1QkhBkOZCN4e9_wyclHEqiY5yQSOrHphY/preview"
            width="100%"
            height="350px"
            allow="autoplay"
          ></iframe>
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <iframe
            className="rounded-2xl w-full lg:w-1/2"
            src="https://drive.google.com/file/d/1BgM8hkEQrk-iJ9vVDoZ0VIgqB-proF_L/preview"
            height="350px"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LongForm;
