import React, { useContext, useState, } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuth } from '../../hooks/useAuth';
import Locations from '../../components/Locations/Locations';
import "./Home.css"
import { collection } from 'firebase/firestore';
import { db } from '../../Data/firebase';


const Home = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error.message)

        }
    }


    const query = collection(db, "restaurantes")
    const [docs, loading, error, snapshot] = useCollectionData(query);
    console.log(docs);
    if (loading) return 'Loading ...'


    return (
        <div className=''>


            <div className='flex flex-col gap-2 p-3'>

                {
                    docs.map(({ name, banner, schedule, stars }) => (
                        <Locations
                            key={Math.random()}
                            banner={banner}
                            id={name}
                            schedule={schedule}
                            stars={stars} />
                    ))

                }




            </div>


        </div>
    )
}

export default Home
