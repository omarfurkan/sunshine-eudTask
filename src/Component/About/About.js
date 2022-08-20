import React from 'react';

const About = () => {
    const aboutImg = "https://img.freepik.com/free-vector/combination-circuit-head-shape-artificial-intelligence-moral-electronic-world-illustration_456031-123.jpg?w=1380&t=st=1660947591~exp=1660948191~hmac=58b99a47670e39e952efdacd5f9dfb9bb7e233cd086e93f2093ed13d018ea344"
    const aboutImg2 = "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=1380&t=st=1660947830~exp=1660948430~hmac=e710d7d9e803b87062e86f37ea5249edd60bcd8ea5dfa950110381ec03d1dbf8"


    return (
        <div className='bg-[#76d5d9]'>
            <div className='w-5/6 mx-auto'>
                <div className='grid md:grid-cols-2 text-white items-center'>
                    <div className=' py-8 md:py-48'>
                        <h3 className='text-4xl pb-4'>Why eduTask?</h3>
                        <p className='md:w-4/6 leading-relaxed text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, adipisci saepe. Fuga, amet, sit impedit dignissimos exercitationem pariatur, reprehenderit eveniet obcaecati quas aut quia omnis mollitia cupiditate ad blanditiis eaque. Illum obcaecati veritatis aliquam hic nisi nobis nihil rem, eaque est veniam sunt? Dicta, aspernatur. Reiciendis quidem expedita earum ex!</p>
                    </div>
                    <div className='relative pb-8'>
                        <div className='mt-6 block'>
                            <img className='w-[500px]' src={aboutImg} alt="" />
                        </div>
                        <div className='md:mt-6 float-right border-8 absolute top-12 md:top-10 right-0 md:right-36'>
                            <img className='w-40 md:w-[300px]' src={aboutImg2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;