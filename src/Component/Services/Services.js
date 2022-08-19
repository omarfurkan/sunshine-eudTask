import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('courseData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-[#d6f5fb]'>
            <div className='w-11/12 mx-auto'>
                <h1 className=' text-center text-[#45a2a8] text-4xl py-20 font-bold'>Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center tems-center md:gap-20 pb-28'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;