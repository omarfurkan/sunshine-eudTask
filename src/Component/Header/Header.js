import React from 'react';
import { Link } from "react-router-dom";
import { GoBook } from 'react-icons/go';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    if (loading) {
        return (
            <div>
                <p>Initialising User...</p>
            </div>
        );
    }


    return (
        <div className='bg-[#227db3] text-white font-semibold sticky top-0 z-50'>
            <div className=' md:w-11/12 mx-auto'>
                <div className='grid grid-cols-2 justify-items-start h-16 items-center'>
                    <div >
                        <p className='flex items-center gap-4 text-white text-4xl'><GoBook className='mt-2' /> eduTask</p>
                    </div>
                    <div className='flex gap-8'>
                        <Link to='/'> Home</Link>
                        <Link to='/about'> About</Link>

                        {
                            !user ?
                                <Link to='/login'> Login</Link> :
                                <button onClick={logOut}>Sign Out</button>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;