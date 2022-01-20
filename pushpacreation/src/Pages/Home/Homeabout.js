import React from 'react'
import "../Style.css"
// import divider from "./Images/d.png"

export default function Homeabout() {
    return (
        <div className='Home-about-bg'>
        <div className='Home-about '>
            <h1 className="heading" >HANDCRAFTED IN INDIA</h1>
            {/* <img src={divider} className="divider" alt="divider" /> */}
            <p className='about-paragrapgh'>Pushpa Creation is an online craft brand started in 2013 with a vision to promote Indian handicrafts globally & help small artisans based in different parts of India earn a living out of it. Amazing Traditional Indian Handicrafts You will Love. 
</p>
        </div>
        <div className='about'>
<img className='home-about-img' src="https://cdn.shopify.com/s/files/1/2675/7366/files/Bulk_banner_image_527x606_8ddbf518-edf0-4a22-aee6-829ce2aaf82d_530x610.png?v=1611559483" alt="bg-img"/>
        </div>
        </div>
    )
}
