import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Title from "./Title";

const Pricing = () => {
  return (
    <div id="pricing" className="pt-24 flex items-center justify-center flex-col">
      <div className="mb-8 lg:mb-24 lg:w-4/5 ">
        <Title
          heading={"Pricing"}
          title={"Use our world-class video editors to "}
          styleTitle={"grow faster."}
          paragraph={
            "No monthly retainers - pick your credits and use them anytime within 6 months"
          }
        ></Title>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* package 1 */}
        <div className="border border-TextColor/20 rounded-2xl px-8 py-10">
          <h3 className="text-3xl py-6 font-normal">Starter Plan</h3>
          <div className="border border-t border-TextColor/20"></div>
          <h1 className="text-5xl py-6 font-semibold">Price: $1500</h1>
          <div className="border border-TextColor/20 rounded-lg p-4">
            <button className="bg-TextColor/5 border border-TextColor/20 w-full py-3 rounded-md text-lg font-medium">
              Book a call
            </button>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-normal text-SecondTextColor mb-6">
              What’s included:
            </h4>
            <u className="list-none no-underline text-TextColor text-lg space-y-3">
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                12 video credits
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Unlimited revisions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Personalized video branding
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Average 1-2 days turnaround
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Dedicated account manager
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Easy credit-card payments
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Pause or cancel anytime
              </li>
            </u>
          </div>
        </div>

        {/* package 2 */}
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(252,252,250,0.05) 10%, rgba(118,94,255,1) 100%)",
            backgroundRepeat: "no-repeat",
          }}
          className="border border-TextColor/20 rounded-2xl px-8 py-10 lg:-mt-12"
        >
          <h3 className="text-3xl py-6 font-normal">Professional Plan</h3>
          <div className="border border-t border-TextColor/20"></div>
          <h1 className="text-5xl py-6 font-semibold">Price: $3000</h1>
          <div className="border border-TextColor/20 rounded-lg p-4">
            <button className="bg-TextColor/5 border border-TextColor/20 w-full py-3 rounded-md text-lg font-medium">
              Book a call
            </button>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-normal text-SecondTextColor mb-6">
              What’s included:
            </h4>
            <u className="list-none no-underline text-TextColor text-lg space-y-3">
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                25 video credits
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Unlimited revisions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Advanced motion graphics and effects
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Personalized video branding with custom animations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Average 1-day turnaround
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Priority support with a dedicated account manager
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Multi-platform optimization (YouTube, Instagram, TikTok)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Easy credit-card payments
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Pause or cancel anytime
              </li>
            </u>
          </div>
        </div>

        {/* package 3 */}
        <div className="border border-TextColor/20 rounded-2xl px-8 py-10">
          <h3 className="text-3xl py-6 font-normal">Premium Plan</h3>
          <div className="border border-t border-TextColor/20"></div>
          <h1 className="text-5xl py-6 font-semibold">Price: $5000</h1>
          <div className="border border-TextColor/20 rounded-lg p-4">
            <button className="bg-TextColor/5 border border-TextColor/20 w-full py-3 rounded-md text-lg font-medium">
              Book a call
            </button>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-normal text-SecondTextColor mb-6">
              What’s included:
            </h4>
            <u className="list-none no-underline text-TextColor text-lg space-y-3">
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                50 video credits
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Unlimited revisions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Full-service video production (concept to delivery)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Custom motion graphics, VFX, and sound design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Personalized branding package with intros/outros
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Same-day turnaround for urgent projects
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Dedicated creative director and account manager
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Easy credit-card payments
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">
                  <IoMdCheckmarkCircleOutline />
                </span>
                Pause or cancel anytime
              </li>
            </u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

// Premium Plan
// Price: $5000

// What’s included:

// 50 video credits
// Unlimited revisions
// Full-service video production (concept to delivery)
// Custom motion graphics, VFX, and sound design

// Personalized branding package with intros/outros
// Same-day turnaround for urgent projects
// Dedicated creative director and account manager
// Multi-platform optimization and SEO-friendly edits
// Easy credit-card payments
// Pause or cancel anytime
