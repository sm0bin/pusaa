import React from 'react';
import Hero from '../shared/Hero';
import Testimonials from '../shared/Testimonials';
import AboutAkhaura from '../shared/AboutAkhaura';
import Notice from '../shared/Notice';

const Home = () => {
    return (
        <>
            <Hero />
            <div className='space-y-32 my-32 max-w-7xl mx-2 md:mx-auto '>
                <Notice />
                <AboutAkhaura />
                <Testimonials />
            </div>
        </>
    );
};

export default Home;