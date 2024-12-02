import React from "react";
import Marquee from "react-fast-marquee";
import cn from "classnames";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, Math.floor(reviews.length / 2));
const secondRow = reviews.slice(Math.floor(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }) => {
    return (
      <figure 
      
        className={cn(
          "relative max-w-[350px] h-[180px] overflow-hidden rounded-xl border border-TextColor/20 p-5 ml-6",
        )}
      >
        <div className="flex flex-row items-center gap-4">
          <img className="rounded-full w-14 h-14"src={img} />
          <div className="flex flex-col">
            <figcaption className="text-base font-medium text-TextColor">
              {name}
            </figcaption>
            <p className="text-sm font-medium text-SecondTextColor">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };
  

const Reviews = () => {
  return (
    <div
    style={{
        maskImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 20%,
          rgba(0, 0, 0, 1) 80%,
          rgba(0, 0, 0, 0)
        )`,
        WebkitMaskImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 20%,
          rgba(0, 0, 0, 1) 80%,
          rgba(0, 0, 0, 0)
        )`, // For WebKit browsers like Chrome/Safari
      }}
    className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden gap-6  ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0  gap-5"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 gap-5 "></div> */}
    </div>
  );
};

export default Reviews;
