import React from 'react';
import { GoBook } from 'react-icons/go';
import { Link } from "react-router-dom";
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(name, email, password, confirmPassword)

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='bg-[#d6f5fb] h-screen'>
            <div className='w-5/6 mx-auto pt-20'>
                <div className='grid grid-cols-2 items-center'>
                    <div>
                        <p className=' text-[#45a2a8] text-9xl'><GoBook /> </p>
                    </div>
                    <div className='bg-[#45a2a8] py-20 w-5/6 mx-auto'>
                        <div className='w-5/6 mx-auto'>
                            <p className='text-center text-whitemx-auto text-white font-bold text-xl'>Sign Up with Eamil</p>
                            <form className='' onSubmit={handleSubmit}>
                                <input className=' bg-[#76d5d9] py-3 mx-auto  mt-2 w-full pl-8  placeholder-white outline-0' type="text" name='name' placeholder='Name' />
                                <br />
                                <input className=' bg-[#76d5d9] py-3 mx-auto  mt-2 w-full pl-8  placeholder-white outline-0' type="email" name="email" id="" placeholder='Email' />
                                <br />
                                <input className=' bg-[#76d5d9] py-3 mx-auto  mt-2 w-full pl-8 placeholder-white outline-0' type="password" name="password" id="" placeholder='Password' />
                                <br />
                                <input className=' bg-[#76d5d9] py-3 mx-auto  mt-2 w-full pl-8  placeholder-white outline-0' type="password" name="confirmPassword" id="" placeholder='Confirm Password' />
                                <br />
                                <input className=' bg-[#76d5d9] font-bold text-white py-3 mx-auto  mt-2 w-full pl-8  hover:bg-[#227db3]' type="submit" value="Sign Up" />
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