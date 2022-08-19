import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div >
            <Banner />
            <Services />
            <About />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;