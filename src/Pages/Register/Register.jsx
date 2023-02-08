import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form'
import "./Register.css"
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const [arrayData, setArraytData] = useState([])
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
    const { signup } = useAuth()
    const navigate = useNavigate()

    const onSubmit = async (data) => {

        try {
            setArraytData([...arrayData, data]);
            reset()
            await signup(data.email, data.password)
            navigate('/')

        } catch (error) {


        }



    }




    return (

        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <input {...register('email', { required: true })} autoComplete='email' type="email" placeholder='Ingrese Email' />
                {
                    errors.email?.type === 'required' &&

                    <div>
                        <p className='text-red-700'>
                            por favor escribe un email
                        </p>
                    </div>
                }
            </div>
            <div>
                <input {...register('password', { required: true })} type="password" autoComplete='new-password' placeholder='Ingrese Contraseña' />
                {
                    errors.password?.type === 'required' &&

                    <div>
                        <p className='text-red-700'>
                            por favor escribe una contraseña
                        </p>
                    </div>
                }
            </div>

            <button className='bg-orange-400 p-2 rounded-lg' type='submit'>Registrarse</button>
        </form>



    )
}

export default Register