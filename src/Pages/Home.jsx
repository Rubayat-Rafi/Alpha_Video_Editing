import React from 'react';
import Hero from '../Components/Hero';
import FAQs from '../Components/FAQs';



const Home = () => {
    return (
        <main className='min-h-screen'>
            <Hero></Hero>
            <FAQs></FAQs>
        </main>
    );
};

export default Home;