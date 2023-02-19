import React, { useEffect, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query } from 'firebase/firestore';
import { db } from '../../Data/firebase';
import { useParams } from 'react-router-dom';
import { getDataRes } from '../../Data/firebase';


const RestaurantPage = () => {


    const { idRes } = useParams();
    // console.log(idRes);

    const getDataRestaurant = () => {

        const query = collection(db, "restaurantes/BigotesPizza");
        const [docs, loading, error, snapshot] = useCollectionData(query);
        const dataRestaurant = docs;

        // console.log(dataRes);
    }
    getDataRestaurant();

    const getDataMenu = (id) => {
        const query2 = collection(db, `restaurantes/${id}/menu`,)
        const [docs, loading, error, snapshot] = useCollectionData(query2);
        const dataMenu = docs




    }

    getDataMenu(idRes);




    return (
        <div className='bg-primary h-screen grid place-items-center'>
            <div>


            </div>
        </div>
    )
}

export default RestaurantPage