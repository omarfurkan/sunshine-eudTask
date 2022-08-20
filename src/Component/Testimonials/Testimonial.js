import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = ({ review }) => {
    // console.log(props.review.reviewSay)
    const { reviewSay } = review
    return (
        <div className=' bg-[#76d5d9] py-12  md:py-36 px-8 md:px-16 md:text-2xl text-white font-bold relative'>
            <p>{reviewSay}</p>
            <p className='absolute bottom-4 right-4'><FaQuoteLeft className=' text-4xl md:text-6xl text-[#45a2a8]' /></p>
        </div>
    );
};

export default Testimonial;