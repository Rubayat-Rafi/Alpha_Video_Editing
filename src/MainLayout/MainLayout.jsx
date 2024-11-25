import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <div className="sticky top-0 md:top-6 z-10">
      <Header></Header>
      </div>
      <div className="max-w-[1440px] mx-auto w-11/12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
