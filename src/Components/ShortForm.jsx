import React from "react";
import Title from "./Title";

const ShortForm = () => {
  return (
    <div id="short-form" className="py-16 lg:py-28 max-w-[1440px] mx-auto w-11/12">
      <div className="lg:px-[5%]">
        <Title
          heading={"Short-Form"}
          title={"Professional Short-Form Video Editing "}
          styleTitle={"Captivating Content for Maximum Engagement"}
          paragraph={
            "AlphaVideoEdit.com specializes in short-form content editing to elevate your online presence. From Instagram Reels and YouTube Shorts to TikTok videos, we create scroll-stopping content with precision edits, creative transitions, and motion graphics. Our expertise turns raw footage into shareable, visually engaging videos that amplify your brand reach and captivate audiences."
          }
        ></Title>
      </div>

      <div className="grid grid-cols-2  md:grid-cols-3   gap-4 lg:gap-16 mt-10 px-[6%] md:px-[12%] lg:px-[5%]">
        <div>
          <iframe
            className="rounded-2xl w-full lg:h-[700px] md:h-[400px]  h-[250px] "
            src="https://www.youtube.com/embed/v6dmIpANv8k?rel=0"
            title="YouTube video player"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <iframe
            className="rounded-2xl w-full lg:h-[700px] md:h-[400px] h-[250px]"
            src="https://www.youtube.com/embed/yAyIKlgB0Ic?rel=0"
            title="YouTube Shorts video player"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <iframe
            className="rounded-2xl w-full lg:h-[700px] md:h-[400px]  h-[250px]"
            src="https://www.youtube.com/embed/x1ZSbZzbUhA?rel=0"
            title="YouTube Shorts video player"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <iframe
            className="rounded-2xl w-full lg:h-[700px] md:h-[400px]  h-[250px]"
            src="https://www.youtube.com/embed/ZaWJ2jrYB0g?rel=0"
            title="YouTube Shorts video player"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <iframe
            className="rounded-2xl w-full lg:h-[700px] md:h-[400px]  h-[250px]"
            src="https://www.youtube.com/embed/oiAqEuy_I-Q?rel=0"
            title="YouTube Shorts video player"
  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <iframe
            className="rounded-2xl w-full lg:h-[700px] md:h-[400px]  h-[250px]"
            src="https://www.youtube.com/embed/SjmBlOv2tk8?rel=0"
            title="YouTube Shorts video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* <div>
          <iframe
          className="rounded-2xl"
            src="https://drive.google.com/file/d/14pp6eWSfGhHnfRQi2mD51syqf5iYExPa/preview"
            width="100%"
            height="600px"
            allow="autoplay"
          ></iframe>
        </div>

        <div>
          <iframe
          className="rounded-2xl"
            src="https://drive.google.com/file/d/1NqJpuP-gV-B3Wx63mPxnxGVYJHYY-cTH/preview"
            width="100%"
            height="600px"
            allow="autoplay"
          ></iframe>
        </div>

        <div>
          <iframe
          className="rounded-2xl"
            src="https://drive.google.com/file/d/1CNA6-9yTDnhZO2YD_a20-WAqrCst53Lh/preview"
            width="100%"
            height="600px"
            allow="autoplay"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default ShortForm;
