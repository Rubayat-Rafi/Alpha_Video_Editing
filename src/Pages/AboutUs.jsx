import React, { useEffect } from "react";
import myProfile from "../assets/ProfileImage/Imam.jpg";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const {pathname} = useLocation()
  useEffect(()=>{
    const root =  document.getElementById('root');
    root.scrollIntoView()
  },[pathname]);



  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true, // Ensures animations happen only once
    });
  }, []);



  return (

      <div data-aos="fade-up" className="max-w-[1440px] mx-auto w-11/12 flex items-start flex-col-reverse lg:flex-row gap-8 py-16 md:py-28  min-h-[calc(100vh-496px)]">
        <div className="lg:w-1/2 space-y-4">
          <p className="text-SecondTextColor font-normal text-base lg:text-xl">
            <span className="text-MainColor font-semibold ">AlphaVideoEdit.com</span> is powered by  Imam Hasan Turzo, a seasoned video
            editor passionate about delivering impactful, high-quality videos
            that elevate your brand’s reach and audience engagement. With
            expertise in long-form content editing, short-form social media
            videos, and creative promotional editing,  Imam Hasan Turzo has
            successfully helped numerous creators, educators, and businesses
            tell their unique stories through exceptional visuals.
          </p>
          <p className="text-SecondTextColor font-normal text-base lg:text-xl">At <span className="text-MainColor font-semibold">AlphaVideoEdit.com</span>, we combine creativity, precision, and innovation to transform raw footage into polished masterpieces. Whether you’re a content creator looking to grow your audience, an educator aiming to engage students, or a business owner seeking to stand out online, we craft videos tailored to your goals.</p>
        </div>
        <div className="lg:w-1/2">
          <img className="w-full rounded-2xl shadow-lg shadow-MainColor" src={myProfile} alt="" />
        </div>
      </div>
  );
};

export default AboutUs;
