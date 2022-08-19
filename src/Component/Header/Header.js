import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='bg-[#227db3] text-white font-semibold'>
            <div className=' md:w-11/12 mx-auto'>
                <div className='grid grid-cols-2 justify-items-start h-12 items-center'>
                    <div>logo</div>
                    <div>
                        <Link to='/'> Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;