import React from 'react'
import ARG from '../assets/argent.jpg'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
     var navigate= useNavigate()
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={ARG} alt="" />
    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8' action="">
            <p className='text-3xl font-bold text-center p-4'>Connectez-vous</p>
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input name='email' className='border relative bg-gray-100 p-2' type="email" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input name='password' className='border relative bg-gray-100 p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' onClick={() => navigate('/Dashboard')}>Me connecter</button>
            <p className='text-center font-bold mt-8' onClick={() => navigate('/')}>
                Votre première fois? Enregistrez-vous
            </p>
        </form>
    </div>
    </div>
  )
}

export default SignIn