import React from "react";
import Title from "./Title";
// import { Element } from "react-scroll";


const ShortForm = () => {
  return (

    <div id="short-form" className="pt-24">
      <Title
        heading={"Short-Form"}
        title={"Short-Form Video "}
        styleTitle={"Examples"}
        paragraph={
          "Videos Optimized for All Platforms. Name any social media platform, we can handle it."
        }
      ></Title>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-10">

        <div>
          <iframe
          className="rounded-2xl"
            src="https://drive.google.com/file/d/1vVwgbxo0AMW_5qHaLEk3UyAqMHOyKWrn/preview"
            width="100%"
            height="700px"
            allow="autoplay"
          ></iframe>
        </div>

        <div>
          <iframe
          className="rounded-2xl object-cover"
            src="https://drive.google.com/file/d/1Jcrslyh8bMrQQ-X7STnoBM-xmxMNvoQe/preview"
            width="100%"
            height="700px"
            allow="autoplay"
          ></iframe>
        </div>

        <div>
          <iframe
          className="rounded-2xl"
            src="https://drive.google.com/file/d/1rOMYi4v7g2gjKOP4DqiBYn3-i82w9SXP/preview"
            width="100%"
            height="700px"
            allow="autoplay"
          ></iframe>
        </div>

        <div>
          <iframe
          className="rounded-2xl"
            src="https://drive.google.com/file/d/1CCcxLb9WWqt5WuYE4s3DhP_gBGfZ-QRz/preview"
            width="100%"
            height="600px"
            allow="autoplay"
          ></iframe>
        </div>

        <div>
          <iframe
          className="rounded-2xl"
            src="https://drive.google.com/file/d/14fjbYmhD64WdVeUL-2pUBV_b1q7lcMvB/preview"
            width="100%"
            height="600px"
            allow="autoplay"
          ></iframe>
        </div>

        <div>
          <iframe
          className="rounded-2xl"
            src="https://drive.google.com/file/d/1cQFLq6Nk8r8TAfkW93NCFo8VI_RTEPyc/preview"
            width="100%"
            height="600px"
            allow="autoplay"
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
