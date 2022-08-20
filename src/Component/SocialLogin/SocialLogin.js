import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsGoogle } from 'react-icons/bs';
import auth from '../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='text-center '>
            <button onClick={() => signInWithGoogle()} className='text-center border-2 w-full py-3 mt-4 text-white font-bold  flex items-center justify-center gap-4'><BsGoogle />Countinue with Google</button>
        </div>
    );
};

export default SocialLogin;