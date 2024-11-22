import React from 'react';
import Hero from '../Components/Hero';
import FAQs from '../Components/FAQs';
import Client from '../Components/Client';
import Comparison from '../Components/Comparison';



const Home = () => {
    return (
        <main className='min-h-screen'>
            <Hero></Hero>
            <Client></Client>
            <Comparison></Comparison>
            <FAQs></FAQs>
        </main>
    );
};

export default Home;