import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import FacebookLogin from 'react-facebook-login';

const handleFacebookCallback = (response) => {
    if (response?.status === "unknown") {
        console.error('Sorry!', 'Something went wrong with facebook Login.');
        return;
    }
    console.log(response.data);
    
};

const Signup = () => {
    return (
        <>
            <section className='w-full h-[100vh] bg-violet-400 flex items-center justify-center'>
                <form action="/" method="post" className='bg-white rounded-2xl p-8 w-[35vw] flex flex-col gap-4'>
                    <h1 className='text-black text-3xl text-center font-semibold'>Register</h1>
                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="name" className='text-black text-lg font-semibold' >Name</label>
                        <div className="flex items-center gap-2 border border-gray-500
                        focus-within:border-blue-400 focus-within:shadow-3xl rounded-md px-4 py-2 w-full">
                            <FaRegUserCircle className='bg-black rounded-full text-2xl' />
                            <input type="text" id='name' name='name' placeholder='Enter your name' required
                                className='text-gray-700 text-lg w-full outline-none' />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="email" className='text-black text-lg font-semibold' >Email</label>
                        <div className="flex items-center gap-2 border border-gray-500 
                        focus-within:border-blue-400 focus-within:shadow-3xl rounded-md px-4 py-2 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 32 32" height={20}><g data-name="Layer 3" id="Layer_3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" /></g></svg>
                            <input type="email" id='email' name='email' placeholder='Enter your email' required
                                className='text-gray-700 text-lg w-full outline-none' />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="password" className='text-black text-lg font-semibold'>Password</label>
                        <div className="flex items-center gap-2 border border-gray-500
                        focus-within:border-blue-400 focus-within:shadow-3xl rounded-md px-4 py-2 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="-64 0 512 512" height={20}><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" /><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" /></svg>
                            <input type="password" id='password' name='password' placeholder='Enter password' required
                                className='outline-none text-gray-700 text-lg w-full' />
                        </div>
                    </div>

                    <input type="submit" value={"Sign Up"} className='font-semibold text-gray-300 hover:text-white
          bg-gray-700 hover:bg-gray-800 cursor-pointer py-3 rounded-lg' />

                    <div>
                        <p className='text-black text-center'>Already have an account ?
                            <Link to={"/sign-in"} className='text-blue-500 hover:underline'> Sign In</Link>
                        </p>
                    </div>

                    <div>
                        <p className='text-black text-center'>Or with</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-black flex items-center justify-center gap-4 border border-gray-600 py-2
            w-full rounded-lg cursor-pointer font-semibold hover:shadow-3xl">
                            <FcGoogle className='text-2xl' /> Google
                        </div>
                        <div className="text-black flex items-center justify-center gap-4 border border-gray-600 py-2
            w-full rounded-lg cursor-pointer font-semibold hover:shadow-3xl">
                            <FacebookLogin
                                appId="1495345085204186"
                                autoLoad={true}
                                textButton=""
                                size='small'
                                className="bg-none"
                                cssClass="my-facebook-button-class"
                                callback={handleFacebookCallback}
                                icon={<FaFacebook
                                    className='text-2xl text-blue-400 rounded-full bg-blue-700' />} /> Facebook
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Signup