import React from 'react';
import Hero from '../shared/Hero';
import Testimonials from '../shared/Testimonials';
import AboutAkhaura from '../shared/AboutAkhaura';
import Notice from '../shared/Notice';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutAkhaura />
            <Notice />
            <Testimonials />
        </>
    );
};

export default Home;