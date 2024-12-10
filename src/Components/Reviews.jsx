import React from "react";
import Marquee from "react-fast-marquee";
import cn from "classnames";

// client images
import client1 from "../assets/ClientImage/client1.webp";
import client2 from "../assets/ClientImage/client2.webp";
import client3 from "../assets/ClientImage/client3.webp";
import client4 from "../assets/ClientImage/client4.webp";
import client5 from "../assets/ClientImage/client5.webp";
import client6 from "../assets/ClientImage/client6.webp";
import client7 from "../assets/ClientImage/client7.jpg";
import client8 from "../assets/ClientImage/client8.webp";
import client9 from "../assets/ClientImage/client9.jpg";
import client10 from "../assets/ClientImage/client10.png";
import client11 from "../assets/ClientImage/client11.webp";
import client12 from "../assets/ClientImage/client12.webp"
import client14 from "../assets/ClientImage/client14.webp"

const reviews = [
  {
    name: "Saraobrien",
    username: "saraobrien578",
    body: "The final product turned out great and they were responsive to my edits.",
    img: client14,
  },
  {
    name: "Debirumph",
    username: "debirumph",
    body: "Imam H exceeded my expectations with his professional work on social media videos.",
    img: client2,
  },
  {
    name: "Riverpathak",
    username: "@riverpathak",
    body: "Imam was quick and concise, will 100% be working with him again. Highly fruitful collaboration experience",
    img: client12,
  },
  {
    name: "Coachriconasol",
    username: "@coachriconasol",
    body: "Imam always goes above and beyond. He nailed the style I was after and revisions were quick and easy.",
    img: client4,
  },
  {
    name: "Kofibamfo",
    username: "@kofibamfo",
    body: "Imam's direction and creativity brought the vision together. Highly fruitful collaboration experience.",
    img: client5,
  },
  {
    name: "Quar Brown",
    username: "@quarbrown",
    body: "Easy to work with, quick responses. Always eager to make needed changes.",
    img: client6,
  },
  {
    name: "Maxwell Lewis",
    username: "@maxwelllewis",
    body: "Initial delivery was 90% perfect. Excellent editing and professional revision handling throughout the process.",
    img: client7,
  },
  {
    name: "Mrmuf Fins",
    username: "@mrmuffins123",
    body: "Even with miscommunications from me, he delivered beyond my expectations. Truly excellent!",
    img: client8,
  },
  {
    name: "Coopflourens",
    username: "@coopflourens",
    body: "Speedy, proactive, and creative! Delivered nearly everything I wanted without direct instruction. Impressive work.",
    img: client9,
  },
];

const firstRow = reviews.slice(0, Math.floor(reviews.length / 2));
const secondRow = reviews.slice(Math.floor(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative max-w-[350px] h-[150px] md:h-[180px] overflow-hidden rounded-xl border border-TextColor/20 p-5 ml-6"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img className="rounded-full w-14 h-14" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-medium text-TextColor">
            {name}
          </figcaption>
          <p className=" text-xs md:text-sm font-medium text-SecondTextColor">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs md:text-sm">{body}</blockquote>
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
      className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden gap-6  "
    >
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
    </div>
  );
};

export default Reviews;
