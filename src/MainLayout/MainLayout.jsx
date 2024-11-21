import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (

        <div className='max-w-[1440px] mx-auto w-11/12'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;