import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useAuth } from '../../hooks/useAuth';
import { BsFillGeoAltFill } from "react-icons/bs";
import Locations from '../../components/Locations/Locations';
import { getData } from "../../Data/firebase"
import "./Home.css"


const Home = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error.message)

        }

    }

    const { isError, data, isLoading, error } = useQuery({
        queryKey: ['restaurantes'],
        queryFn: getData
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const getDataRes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(getDataRes);

    return (
        <div className=''>


            <div className='flex flex-col gap-2'>
                {
                    getDataRes.map(({ banner, id, schedule, stars }) => (
                        <Locations key={id} banner={banner} id={id} schedule={schedule} stars={stars} />

                    ))
                }



            </div>
            <div>




            </div>

        </div>
    )
}

export default Home
