import React from "react";
import Title from "./Title";

const LongForm = () => {
  return (
    <div id="long-form" className=" pt-[70px] md:pt-28 ">
      <Title className="lg:px-16"
        heading={"Long-Form"}
        title={" Long-Form Video Editing:"}
        styleTitle={" Transform Raw Footage into Impactful Masterpieces"}
        paragraph={
          "    At AlphaVideoEdit.com, we specialize in professional long-form video editing, designed to captivate and engage diverse audiences. Whether it's documentaries, vlogs, webinars, or educational content, we meticulously cut unnecessary parts, remove mistakes and mispronunciations, and merge clips for smooth storytelling. Our team also sources relevant footage to enhance your narrative, improves audio quality, and adds effects, transitions, motion graphics, and custom 2D animations to visualize your story. Our expert editors transform raw footage into compelling, polished videos that amplify your brand's reach, boost viewer retention, and leave a lasting impression."
        }
      ></Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 ">
        <div>
        
          <iframe
            className="rounded-2xl w-full h-[280px] md:h-[350px] lg:h-[400px]"
            src="https://www.youtube.com/embed/lHJdHd7ROB4?si=ObjNDo9dCzI8PExc"
            allow="autoplay"
          ></iframe>
        </div>
        <div>
          
          <iframe
            className="rounded-2xl  w-full h-[280px] md:h-[350px] lg:h-[400px]"
            src="https://www.youtube.com/embed/r5OEAPZw28U?si=u58WWiINegx_CcC4"
            width="100%"
            height="350px"
            allow="autoplay"
          ></iframe>
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <iframe
            className="rounded-2xl w-full lg:w-1/2 h-[280px] md:h-[350px] lg:h-[400px]"
            src="https://www.youtube.com/embed/g62bzoH672w?si=SMrOsJ8pgHfplvAV"

            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LongForm;
