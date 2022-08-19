import React from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviews = [
        { reviewSay: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequatur aperiam soluta temporibus nulla maiores corporis, id sint dignissimos quam." },
        { reviewSay: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequatur aperiam soluta temporibus nulla maiores corporis, id sint dignissimos quam." },
        { reviewSay: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequatur aperiam soluta temporibus nulla maiores corporis, id sint dignissimos quam." }

    ]
    return (
        <div className='bg-[#d6f5fb]'>
            <div className='w-5/6 mx-auto pb-36 pt-32'>
                <h3 className='text-center pb-20 text-4xl font-bold text-[#45a2a8]'>Student Testimonials</h3>
                <div className=' flex justify-center gap-8'>
                    {
                        reviews.map((review, index) => <Testimonial
                            key={index}
                            review={review}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;