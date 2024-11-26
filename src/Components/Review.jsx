import React from "react";
import Title from "./Title";

import "../styles/reviews.css";

const Review = () => {
  return (
    <div
      id="reviews"
      className="pt-24 flex flex-col items-center justify-center"
    >
      <div className="mb-10 md:w-4/6 ">
        <Title
          heading={"Review"}
          title={"There’s a reason people are raving"}
          styleTitle={" about us."}
        ></Title>
      </div>

      <div className="reviewsContainer grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center min-h-[500px] overflow-y-hidden">
        {/* first card  */}
        <div className="firstcontainer lg:space-y-5 flex flex-row lg:flex-col items-center space-x-5 lg:space-x-0 justify-center">
          <div className="card card1">firstcontainer</div>
          <div className="card card2">firstcontainer</div>
          <div className="card card3">firstcontainer</div>
        </div>

        {/* second card  */}
        <div className="secondcontainer lg:space-y-5 flex flex-row lg:flex-col items-center space-x-5 justify-center lg:space-x-0">
          <div className="card card1">secondcontainer</div>
          <div className="card card2">secondcontainer</div>
          <div className="card card3">secondcontainer</div>
        </div>

        {/* third card  */}
        <div className="thirdcontainer lg:space-y-5 flex flex-row lg:flex-col items-center space-x-5 justify-center lg:space-x-0">
          <div className="card card1">thirdcontainer</div>
          <div className="card card2">thirdcontainer</div>
          <div className="card card3">thirdcontainer</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
