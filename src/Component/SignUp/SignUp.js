import React, { useEffect } from 'react';
import { GoBook } from 'react-icons/go';
import { Link, useNavigate, useLocation } from "react-router-dom";
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(name, email, password, confirmPassword)

        if (password === confirmPassword) {

            return createUserWithEmailAndPassword(email, password)
        }


        if (loading) {
            return <p>Loading...</p>;
        }
    }
    useEffect(() => {
        if (user) {
            return navigate(from, { replace: true });
        }
    }, [navigate, user, from])
    return (
        <div className='bg-[#d6f5fb] h-screen'>
            <div className='md:w-5/6 mx-auto pt-8 md:pt-20'>
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


                    <div className='bg-[#45a2a8] py-8 md:py-20 w-5/6 mx-auto'>
                        <div className='w-5/6 mx-auto'>
                            <p className='text-center text-whitemx-auto text-white font-bold text-xl'>Sign Up with Eamil</p>
                            <form className='' onSubmit={handleSubmit}>
                                <input className=' bg-[#76d5d9] py-3 mx-auto  mt-2 w-full pl-8  placeholder-white outline-0' type="text" name='name' placeholder='Name' required />
                                <br />
                                <input className=' bg-[#76d5d9] py-3 mx-auto  mt-2 w-full pl-8  placeholder-white outline-0' type="email" name="email" id="123" placeholder='Email' required />
                                <br />
                                <input className=' bg-[#76d5d9] py-3 mx-auto  mt-2 w-full pl-8 placeholder-white outline-0' type="password" name="password" id="456" placeholder='Password' required />
                                <br />
                                <input className=' bg-[#76d5d9] py-3 mx-auto  mt-2 w-full pl-8  placeholder-white outline-0' type="password" name="confirmPassword" id="789" placeholder='Confirm Password' required />
                                <br />

                                <input className=' bg-[#76d5d9] font-bold text-white py-3 mx-auto  mt-2 w-full   hover:bg-[#227db3]' type="submit" value="Sign Up" />
                            </form>
                            <div className='grid grid-cols-3 items-center justify-items-center mt-8'>
                                <hr className='w-full' />
                                <p className='text-white'>Or</p>
                                <hr className='w-full' />
                            </div>
                            <SocialLogin />
                            <p className='text-white mt-4'>Have an account? <Link to='/login' className='font-bold underline'>Login</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;