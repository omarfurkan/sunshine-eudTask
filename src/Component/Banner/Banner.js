import React from 'react';
import banner from '../../images/banner.png'
import { GoBook } from 'react-icons/go';

const Banner = () => {
    return (
        <div className='relative '>
            <div>
                <img className='w-screen' src={banner} alt="" />
            </div>
            <div className='absolute top-2 md:top-56 left-6 md:left-48 text-white'>
                <div className='flex gap-2 md:gap-4 text-[#227db3]'>
                    <div>
                        <GoBook className='md:text-9xl  mt-1 md:mt-0' />
                    </div>
                    <div>
                        <h1 className='tex-2xl  md:text-4xl font-bold mb-2'>eduTask</h1>
                        <p className='w-5/6 md:text-xl font-semibold mb-2 md:mb-4'>Learn from professional and build your skill in tech world</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;