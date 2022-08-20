import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = (props) => {

    const { _id, courseName, courserDuration, img, pirce, discription } = props.service;

    const { id } = useParams();



    return (
        <div>
            {
                id == _id &&
                <div className='grid  md:grid-cols-2 gap-4 items-center justify-items-center'>
                    <div>
                        <img className='w-[500px]' src={img} alt="" />
                    </div>
                    <div className='bg-[#76d5d9] py-12 px-8 text-white'>
                        <p className='text-xl font-bold mt-2'>{courseName}</p>
                        <p className='text-lg mt-2'>Duration: {courserDuration}</p>
                        <p className='text-lg mt-2'>{discription}</p>
                        <p>Price: $ <span className='font-bold text-xl'>{pirce}</span></p>
                    </div>
                </div>
            }
        </div>
    );
};

export default CourseDetail;