import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import ARG from '../assets/argent.jpg'


    function SignUp () {
        const [username, setUsername] = useState('');
        const [tel, setTel] = useState('');
        const [password, setPassword] = useState('');
        // const [confirmpassword, setConfirmpassword] = useState('');

        const handleUsernameChange = (value) =>{
            setUsername(value);
        }
        const handleTelChange = (value) =>{
            setTel(value);
        }
        const handlePasswordChange = (value) =>{
            setPassword(value);
        }
        // const handleConfirmpasswordChange = (value) =>{
        //     setConfirmpassword(value);
        // }
        const handleSave = () => {
            const data ={
                Username : username,
                Tel : tel,
                Password : password,
                // ConfirmPassword : confirmpassword
            };
            const url = 'http://localhost:5099/api/Client/Enregistrer';
            axios.post(url,data)
                .then((response) =>{
                    alert("Enregistrement avec succes ☺");
                }).catch((error) =>{
                    alert(error);
            })
        }

        var navigate = useNavigate()
        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block '>
                    <img className='w-full h-full object-cover ' src={ARG} alt=''/>
                </div>
                <div className='bg-gray-100  flex flex-col justify-center'>
                    <p className='font-bold text-3xl text-center mb-7 text-green-900'>KORA Transfert</p>
                    <p className='font-medium text-2xl text-center mb-5'>Administration</p>
                    <div className='shadow-md shadow-[#515252] mb-10 max-w-[400px] w-full mx-auto bg-white p-4'>
                        <p className='text-3xl font-bold text-center py-6'>Enregistrez-vous</p>
                        <div className='flex flex-col py-2'>
                            <label>Username</label>
                            <input onChange={(e) => handleUsernameChange(e.target.value)} className='border p-2' type='text'/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Téléphone</label>
                            <input onChange={(e) => handleTelChange(e.target.value)} className='border p-2' type='number' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input onChange={(e) => handlePasswordChange(e.target.value)} className='border p-2' type='password'/>
                        </div>
                        {/*<div className='flex flex-col py-2'>*/}
                        {/*    <label>Confirm Password</label>*/}
                        {/*    <input onChange={(e) => handleConfirmpasswordChange(e.target.value)} className='border p-2' type='password' />*/}
                        {/*</div>*/}
                        <button
                            className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'
                            onClick={() => handleSave()}>
                            M'enregistrer
                        </button>
                        <div className='flex justify-between'>
                            <p className='flex items-center'>
                                J'ai déjà un compte
                            </p>
                            <p className='p flex font-bold mr-5' onClick={() => navigate('/SignIn')}>
                                Me connecter
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default SignUp
