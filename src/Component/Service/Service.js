import React from 'react';
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    let navigate = useNavigate();
    const { id, courseName, courserDuration, img, pirce, discription } = service;

    const buyCourse = () => {
        navigate(`/buycourse/${id}`)
    }

    return (
        <div className='bg-[#76d5d9] '>
            <div className=''>
                <img className='h-72 w-96 flex' src={img} alt="" />
            </div>
            <div className='text-white px-4 py-2'>
                <p className='text-xl font-bold py-2'>{courseName}</p>
                <p className='text-lg fond-semibold'>{discription}</p>
                <p className=' text-lg py-2'>Course Duration: <span className='font-semibold'>{courserDuration}</span> </p>
                <p className='text-lg'>Price: $ <span className='text-2xl font-bold'>{pirce}</span> </p>
                <div className='flex justify-end '>
                    <button onClick={buyCourse} className='border-2 py-1 px-10 font-bold hover:bg-[#45a2a8]'>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default Service;