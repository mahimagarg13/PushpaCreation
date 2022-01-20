import React from 'react'
import Category from './Category'
// import divide from "./Images/d.png"

export default function Shopbycategory() {
    return (
        <div className='outer-div bg category'>
            <h1>Shop by Category</h1>
            {/* <img src={divide} className="divider" alt="divider" /> */}

           <Category />

        </div>
    )
}
