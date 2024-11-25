import React, { useEffect } from 'react';
import Hero from '../Components/Hero';
import FAQs from '../Components/FAQs';
import Client from '../Components/Client';
import Comparison from '../Components/Comparison';
import Services from '../Components/Services';
import Brands from '../Components/Brands';
import Pricing from '../Components/Pricing';
import ShortForm from '../Components/ShortForm';
import LongForm from '../Components/LongForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Review from '../Components/Review';
import Talk from '../Components/Talk';


const Home = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,  
        });
      }, []);


    return (
        <main data-aos="fade-up" className='min-h-screen z-0'>
            <Hero></Hero>
            <Brands></Brands>
            <ShortForm></ShortForm>
            <LongForm></LongForm>
            <Client></Client>
            <Services></Services>
            <Comparison></Comparison>
            <Pricing></Pricing>
            <Review></Review>
            <Talk></Talk>
            <FAQs></FAQs>
        </main>
    );
};

export default Home;