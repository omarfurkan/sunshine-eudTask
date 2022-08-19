import React from 'react';
import banner from '../../images/banner.png'

const Banner = () => {
    return (
        <div className='relative '>
            <div>
                <img className='w-screen' src={banner} alt="" />
            </div>
            <div className='absolute md:top-56  md:left-48 text-white'>
                <h1 className='text-4xl font-bold mb-2'>eduTask</h1>
                <p className='w-5/6 text-xl font-semibold mb-4'>Learn from professional and build your skill in tech world</p>
                <button className='border-2 py-1 px-2 font-bold'>button</button>
            </div>
        </div>
    );
};

export default Banner;