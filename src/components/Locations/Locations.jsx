import { Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import IMGR1 from "../../assets/img/r-1.jpg"


const Locations = ({ banner, id, schedule, stars }) => {

    return (

        <div>
            <div className='flex gap-3 w-full border border-amber-300 rounded-lg'>
                <Link to={'/restaurant'}>
                    <figure>
                        <img className=' block w-32 rounded-lg shadow-xl' src={banner} alt="" />
                    </figure>
                </Link>
                <div id="info_location">
                    <h2 className='font-bold'>{id}</h2>
                    <Rating name="half-rating-read" defaultValue={stars} precision={0.5} readOnly />

                    <p className='text-md font-light'>{schedule}</p>


                </div>


            </div>
        </div>

    )
}

export default Locations