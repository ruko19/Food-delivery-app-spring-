import React from 'react'
import IMGR1 from "../../assets/img/r-1.jpg"

const Locations = ({ banner, id, schedule, stars }) => {
    return (

        <div>
            <div className='flex gap-3 w-full'>
                <figure>
                    <img className='block w-32' src={banner} alt="" />
                </figure>
                <div id="info_location">
                    <h2 className='font-bold'>{id}</h2>
                    <p>{stars}</p>
                    <span className='text-xl font-light'>{schedule}</span>
                    <p>Before you <span>4$</span></p>

                </div>


            </div>
        </div>

    )
}

export default Locations