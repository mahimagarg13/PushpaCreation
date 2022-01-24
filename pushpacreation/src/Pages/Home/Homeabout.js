import React from 'react'
import "../Style.css"
import elephant from "../Home/Images/Bulk_banner.png"
// import divider from "./Images/d.png"
import Fade from 'react-reveal/Fade';
export default function Homeabout() {
    return (
        <div className='Home-about-bg'>
            <div className='Home-about '>
                <Fade left>
                    <h1 className="heading" >HANDCRAFTED IN INDIA</h1>
                    {/* <img src={divider} className="divider" alt="divider" /> */}
                    <p className='about-paragrapgh'>Pushpa Creation is an online craft brand started in 2013 with a vision to promote Indian handicrafts globally & help small artisans based in different parts of India earn a living out of it. Amazing Traditional Indian Handicrafts You will Love.
                    </p>            </Fade>

            </div>
            <div className='about'>
                <Fade right>
                    <img className='home-about-img' src={elephant} alt="bg-img" />
                </Fade>
            </div>
        </div>
    )
}
