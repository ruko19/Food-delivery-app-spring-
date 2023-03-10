import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form'

import { useAuth } from '../../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import imgLogo from "../../assets/img/Logo.svg";



const Login = () => {
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
    const { login } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const onSubmit = async (data) => {
        setError("");
        try {

            await login(data.email, data.password)
            navigate('/home');

        } catch (error) {
            setError(error.message);


        }

    }

    return (

        <div className=' font-bold h-screen bg-primary grid place-items-center'>
            <div className=' w-4/5 rounded-lg shadow-2xl p-4 flex flex-col gap-8 bg-white'>
                <h2>Login</h2>

                {error && <p className='w-full'>{error}</p>}


                <figure className=''>
                    <img className='mx-auto w-14' src={imgLogo} alt="" />
                </figure>

                <form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex flex-col'>
                        <label htmlFor="Email">Email</label>
                        <input className='border-2 p-1 rounded-md outline-none' {...register('email', { required: true })} autoComplete='email' type="email" />
                        {
                            errors.email?.type === 'required' &&

                            <div>
                                <p className='text-red-700'>
                                    por favor escribe un email
                                </p>
                            </div>
                        }
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Password">Password</label>
                        <input className='border-2 p-1 rounded-md outline-none' {...register('password', { required: true })} type="password" autoComplete='new-password' />
                        {
                            errors.password?.type === 'required' &&

                            <div>
                                <p className='text-red-700'>
                                    por favor escribe una contrase??a
                                </p>
                            </div>
                        }
                    </div>

                    <button className='w-full mt-6 shadow-lg bg-primary p-2 rounded-lg' type='submit'>SIGN UP</button>
                </form>
                <p>Need an account ? <span className='underline'><Link to={"/register"} >Login</Link></span></p>
            </div>
        </div>



    )
}

export default Login