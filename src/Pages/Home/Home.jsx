import React, { useContext } from 'react';
import "./Home.css"
import { AuthProvider } from "../../context/authContex"
import { useAuth } from '../../hooks/useAuth';


const Home = () => {



    return (
        <div className='bg-primary h-screen grid place-items-center'>
            <h1 className=' text-4xl font-extrabold'>Home</h1>

        </div>
    )
}

export default Home
