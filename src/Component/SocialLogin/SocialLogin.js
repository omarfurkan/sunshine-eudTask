import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsGoogle } from 'react-icons/bs';
import auth from '../../firebase.init';
import { useNavigate, useLocation } from "react-router-dom";


const SocialLogin = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // console.log(user?.user?.displayName)
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
        <div className='text-center '>
            <button onClick={() => signInWithGoogle()} className='text-center border-2 w-full py-3 mt-4 text-white font-bold  flex items-center justify-center gap-4'><BsGoogle />Countinue with Google</button>
        </div>
    );
};

export default SocialLogin;