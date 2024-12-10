import React, { useEffect, useRef } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up">

      <div className="sticky top-0 lg:top-6 z-20">
        <Header />
      </div>

      <main>
          <Outlet />
      </main>
      <Footer />
 
    </div>
  );
};

export default MainLayout;
