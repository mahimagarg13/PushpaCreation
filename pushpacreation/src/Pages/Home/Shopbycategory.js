import React from 'react'
import Category from './Category'
// import divide from "./Images/d.png"
import Fade from 'react-reveal/Fade';

export default function Shopbycategory() {
    return (
        <div className='outer-div bg category'>
                <Fade bottom>
    <h1 className='text-center'>Shop by Category</h1>
    </Fade>
            {/* <img src={divide} className="divider" alt="divider" /> */}

           <Category />

        </div>
    )
}
