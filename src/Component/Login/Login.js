import React, { useEffect } from 'react';
import { GoBook } from 'react-icons/go';
import SocialLogin from '../SocialLogin/SocialLogin';
import {
    Link, useNavigate, useLocation
} from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    useEffect(() => {
        if (user) {
            return navigate(from, { replace: true });
        }
    }, [navigate, user, from])

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }


    return (
        <div className='bg-[#d6f5fb] h-screen'>
            <div className='md:w-5/6 mx-auto pt-20'>
                <div className='grid md:grid-cols-2 items-center'>
                    <div className='flex gap-2 md:gap-4 text-[#227db3]'>
                        <div>
                            <GoBook className='md:text-9xl  mt-1 md:mt-0' />
                        </div>
                        <div>
                            <h1 className='tex-2xl  md:text-4xl font-bold mb-2'>eduTask</h1>
                            <p className='w-5/6 md:text-xl font-semibold mb-2 md:mb-4'>Learn from professional and build your skill in tech world</p>
                        </div>
                    </div>


                    <div className='bg-[#45a2a8] py-12 md:py-20 w-5/6 mx-auto'>
                        <div className='w-5/6 mx-auto'>
                            <p className='text-center text-whitemx-auto text-white font-bold text-xl'>Login with Eamil</p>
                            <form className='' onSubmit={handleSubmit}>

                                <input className=' bg-[#76d5d9] py-3 mx-auto  mt-2 w-full pl-8  placeholder-white outline-0' type="email" name="email" id="123" placeholder='Email' />
                                <br />
                                <input className=' bg-[#76d5d9] py-3 mx-auto  mt-2 w-full pl-8 placeholder-white outline-0' type="password" name="password" id="456" placeholder='Password' />
                                <br />

                                <input className=' bg-[#76d5d9] font-bold text-white py-3 mx-auto  mt-2 w-full  hover:bg-[#227db3]' type="submit" value="Login" />

                            </form>
                            <div className='grid grid-cols-3 items-center justify-items-center mt-8'>
                                <hr className='w-full' />
                                <p className='text-white'>Or</p>
                                <hr className='w-full' />
                            </div>
                            <SocialLogin />
                            <p className='text-white mt-4'>Dont have an account? <Link to='/signup' className='font-bold underline'>Sign up</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;