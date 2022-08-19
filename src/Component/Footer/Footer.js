import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#227db3] text-white static bottom-0'>
            <div className='w-5/6 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12'>
                    <div>
                        <h1>logo</h1>
                    </div>
                    <div>
                        <h3 className='font-semibold py-2'>Services</h3>
                        <p className='pb-1'>Machine Learning</p>
                        <p className='pb-1'>Learn Python Programming</p>
                        <p className='pb-1'>JavaScript Course 2022</p>
                        <p className='pb-1'>C Programming for Beginners</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;