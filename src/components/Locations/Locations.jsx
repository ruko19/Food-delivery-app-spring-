import React from 'react'
import IMGR1 from "../../assets/img/r-1.jpg"

const Locations = () => {
    return (

        <div>
            <div className='flex gap-3 w-full'>
                <figure>
                    <img className='block w-32' src={IMGR1} alt="" />
                </figure>
                <div id="info_location">
                    <h2 className='font-bold'>Pardes Restaurant</h2>
                    <p>puntaje</p>
                    <span className='text-xl font-light'>Work time 09:30 - 23:00</span>
                    <p>Before you <span>4$</span></p>

                </div>


            </div>
        </div>

    )
}

export default Locations