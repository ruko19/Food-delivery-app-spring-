import React, { useContext } from 'react';
import "./Home.css"
import { AuthProvider } from "../../context/authContex"
import { useAuth } from '../../hooks/useAuth';
import { Login } from '../Login';


const Home = () => {
    const { user, logOut } = useAuth()
    console.log(user)
    const handleLogOut = async () => {
        try {
            await logOut();


        } catch (error) {
            console.log(error.message)

        }

    }


    return (
        <div className='bg-primary h-screen grid place-items-center'>
            <h1 className=' text-4xl font-extrabold'>Home</h1>
            <button onClick={handleLogOut}>Log out</button>

        </div>
    )
}

export default Home
