import React from 'react';
import {useNavigate} from 'react-router-dom'
import ARG from '../assets/argent.jpg'

    /*constructor() {
        super()
        this.state = {
            Username: '',
            Email: '',
            Password: '',
            ConfirmPassword: '',
            UsernameFlag: false,
            EmailFlag: false,
            PasswordFlag: false,
            ConfirmPasswordFlag: false,

        }
    }

    handleValues = e => {
        const {name, value} = e.target
        this.setState(
            {[name]: value},
            console.log('name:', name, 'value:', value),
        );
    }

    CheckValidity() {
        console.log('loading...')
        this.setState({
            UsernameFlag: false,
            EmailFlag: false,
            PasswordFlag: false,
            ConfirmPasswordFlag: false
        })

        if (this.state.Username === '') {
            this.setState({UsernameFlag: true})
        }
        if (this.state.Email === '') {
            this.setState({EmailFlag: true})
        }
        if (this.state.Password === '') {
            this.setState({PasswordFlag: true})
        }
        if (this.state.ConfirmPassword === '') {
            this.setState({ConfirmPasswordFlag: true})
        }
    }*/

    /*handleSubmit = (e) => {
        this.CheckValidity()
        if (
            this.state.Username != '' &&
            this.state.Email != '' &&
            this.state.Password != '' &&
            this.state.ConfirmPassword != ''
        ) {
            console.log('Acceptable')
            let data = {
                username: this.state.Username,
                email: this.state.Email,
                password: this.state.Password,
                ConfirmPassword: this.state.ConfirmPassword
            }

            authService
                .SignUp(data).then((data)=>{
                console.log('data: ',data)
            }).catch((error) =>{
                console.log('Error : ',error)
            })
        } else {
            console.log('Not acceptable')
        }
    }*/

    const SignUp = () => {
        var navigate = useNavigate()
        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block'>
                    <img className='w-full h-full object-cover' src={ARG} alt=''/>
                </div>
                <div className='bg-gray-100  flex flex-col justify-center'>
                    <p className='font-bold text-3xl text-center mb-10 text-green-900'>Web Transfert</p>
                    <div className='shadow-md shadow-[#515252] mb-10 max-w-[400px] w-full mx-auto bg-white p-4'>
                        <p className='text-3xl font-bold text-center py-6'>Enregistrez-vous</p>
                        <div className='flex flex-col py-2'>
                            <label>Username</label>
                            <input
                                   name='Username' className='border p-2' type='text'/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Email</label>
                            <input name='Email' className='border p-2' type='email' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input name='Password' className='border p-2' type='password'/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Confirm Password</label>
                            <input name='ConfirmPassword' className='border p-2' type='password' />
                        </div>
                        <button
                            type='button'
                            className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'
                            onClick="">
                            M'enregistrer
                        </button>
                        <div className='flex justify-between'>
                            <p className='flex items-center'>
                                <input className='mr-2' type='checkbox'/>Me rappeler
                            </p>
                            <p className='p flex font-bold mr-5' onClick={() => navigate('/SignIn')}>
                                Creer un compte
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default SignUp
