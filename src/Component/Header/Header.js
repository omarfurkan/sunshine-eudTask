import React from 'react';
import { Link } from "react-router-dom";
import { GoBook } from 'react-icons/go';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    // console.log(user?.auth?.currentUser?.email)
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    if (error) {
        return error.message;
    }


    return (
        <div className='bg-[#227db3] text-white font-semibold sticky top-0 z-50'>
            <div className=' md:w-11/12 mx-auto'>
                <div className='grid  md:grid-cols-2 justify-items-start h-16 items-center'>
                    <div >
                        <p className='flex items-center gap-2 md:gap-4 text-white md:text-4xl'><GoBook className='md:mt-2' /> eduTask</p>
                    </div>
                    <div className='flex gap-8'>
                        <Link to='/'> Home</Link>
                        <Link to='/about'> About</Link>

                        {
                            !user ?
                                <Link to='/login'> Login</Link> :


                                <p className='text-white flex gap-4'>
                                    <button onClick={logOut}>Sign Out</button>
                                    User: {user?.auth?.currentUser?.displayName}  </p>


                        }

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;