import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import FAQs from "../Components/FAQs";
import Client from "../Components/Client";
import Comparison from "../Components/Comparison";
import Services from "../Components/Services";
import Brands from "../Components/Brands";
import Pricing from "../Components/Pricing";
import ShortForm from "../Components/ShortForm";
import LongForm from "../Components/LongForm";
import AOS from "aos";
import "aos/dist/aos.css";
import Review from "../Components/Review";
import Talk from "../Components/Talk";
import Intro from "../Components/Intro";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main data-aos="fade-up" className="min-h-screen z-0">
      <Hero />

      <Intro></Intro>

      <Brands />

      <LongForm />

      <ShortForm />

      <Client />

      <Services />

      <Comparison />

      <Pricing />

      <Review />

      <Talk />

      <FAQs />
    </main>
  );
};

export default Home;
