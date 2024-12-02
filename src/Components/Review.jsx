import React, { useEffect, useState } from "react";
import Title from "./Title";
import Reviews from "./Reviews";
// import reviews from "/reviews.json";
// import "../styles/reviews.css";

const Review = () => {

  const [reviews, SetReviews] = useState([])

  useEffect(()=>{
    fetch('/reviews.json')
    .then(res => res.json())
    .then(data => SetReviews(data))
  },[])



  return (
    <div
      id="reviews"
      className=" pt-14 md:pt-28 flex flex-col items-center justify-center"
    >
      <div className="mb-10 md:w-4/6 ">
        <Title
          heading={"Review"}
          title={"There’s a reason people are raving"}
          styleTitle={" about us."}
        ></Title>
      </div>

    <Reviews></Reviews>
      {/* <div className="reviewsContainer grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden ">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`review-card p-6 border border-TextColor/20 rounded-lg space-y-4 shadow-lg animate-scroll`}
            style={{ animationDelay: `${index * 2}s` }}
          >
            <p className="text-SecondTextColor  ">{review.description}</p>
            <div className="flex items-center gap-3 flex-grow">
              <img
                src={review.image}
                alt={review.name}
                className="w-10 h-10 bg-gray-200 rounded-full"
              />
              <div>
                <h3 className="font-bold text-TextColor">{review.name}</h3>
                <p className="text-SecondTextColor">{review.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      
    </div>
  );
};

export default Review;
