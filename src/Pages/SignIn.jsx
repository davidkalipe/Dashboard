import React from 'react'
import ARG from '../assets/argent.jpg'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
     var navigate= useNavigate()
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={ARG} alt="" />
    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8' action="">
            <p className='text-3xl font-bold text-center p-4'>Connectez-vous</p>
            <div className='flex justify-between py-8'>
                <p id='icon' className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2'/> Facebook</p>
                <p id='icon' className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2'/> Google</p>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input name='email' className='border relative bg-gray-100 p-2' type="email" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input name='password' className='border relative bg-gray-100 p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' onClick={() => navigate('/Dashboard')}>Me connecter</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
            <p className='text-center mt-8'>Not a member? Sign up now</p>
        </form>
    </div>
    </div>
  )
}

export default SignIn