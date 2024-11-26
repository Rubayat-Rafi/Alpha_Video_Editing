import React from "react";
import { FaArrowRight } from "react-icons/fa";

const FAQs = () => {


  return (

    <div id="faq" className="max-w-[900px] mx-auto space-y-5 text-TextColor py-24">
      <div className="collapse collapse-plus bg-BgColor/50 border border-TextColor/20">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-base lg:text-lg font-medium">
          What video editing services do you offer?
        </div>
        <div className="collapse-content">
          <p className="text-xs md:text-sm text-SecondTextColor">
            I provide a range of video editing services, including color
            correction, sound design, transitions, motion graphics, and advanced
            editing for YouTube videos, commercials, short films, and more.
            Contact me to discuss your project!
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-BgColor/50 border border-TextColor/20">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-base lg:text-lg font-medium">
          How much do you charge for video editing?
        </div>
        <div className="collapse-content">
          <p className=" text-xs md:text-sm text-SecondTextColor">
            My pricing depends on the complexity and duration of your project. I
            offer affordable packages tailored to your needs. Feel free to
            request a quote via the Contact Page.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-BgColor/50 border border-TextColor/20">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-base lg:text-lg font-medium">
          What tools and software do you use for video editing?
        </div>
        <div className="collapse-content">
          <p className="text-xs md:text-sm text-SecondTextColor">
            I use industry-leading tools like Adobe Premiere Pro, After Effects,
            DaVinci Resolve, and Final Cut Pro to ensure high-quality edits that
            match your vision.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-BgColor/50 border border-TextColor/20">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-base lg:text-lg font-medium">
          Can you edit videos for social media platforms like Instagram,
          YouTube, or TikTok?
        </div>
        <div className="collapse-content">
          <p className="text-xs md:text-sm text-SecondTextColor">
            Absolutely! I specialize in creating engaging videos optimized for
            social media platforms, ensuring the right aspect ratio, resolution,
            and style for Instagram, YouTube, TikTok, and more.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-BgColor/50 border border-TextColor/20">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-base lg:text-lg font-medium">
          How long does it take to complete a video editing project?
        </div>
        <div className="collapse-content">
          <p className="text-xs md:text-sm text-SecondTextColor">
            The timeline varies based on the project’s complexity, but most
            videos are completed within 3-7 business days. For urgent projects,
            expedited services are available.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-BgColor/50 border border-TextColor/20">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-base lg:text-lg font-medium">
          Can you help with scriptwriting or storyboarding for my videos?
        </div>
        <div className="collapse-content">
          <p className="text-xs md:text-sm text-SecondTextColor">
            Yes, I can collaborate with you on scriptwriting, storyboarding, and
            planning to create a cohesive and impactful final product. Let’s
            bring your vision to life!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center py-6">
        <a target="_blank" href="https://tidycal.com/alphavideoedit2001/15-minute-meeting" className="flex items-center gap-2 bg-MainColor text-TextColor px-4 py-2 md:px-6 md:py-3 rounded-lg outline hover:outline-offset-4 outline-TextColor/5 font-semibold hover:outline-mainColor transition-all text-sm md:text-base">
          Book a 30-min call <FaArrowRight />

        </a>
      </div>
    </div>

  );
};

export default FAQs;
