import React from 'react';
import "../Style.css";
import Fade from 'react-reveal/Fade';
export default function Points() {
    return (
        <div className='points-bg-img'>
            <div className='pointers'>
                <Fade left> <h6 style={{ color: "white" }}>Our Mission</h6>
                    <div id="vl-footer"></div>
                    <h1 style={{ color: "black", paddingTop: "20px" }}>Every purchase
                        has a purpose</h1>

                    <h6 style={{ color: "black" }}>Our Mission
                        Every purchase
                        has a purpose
                        We have direct partnerships with over 320 Indian artisans and over 2000 indirectly. As a social enterprise that seeks to offer a fair-trade platform,
                        our primary purpose is to support handicraft workers. With each purchase you make, you can help make a difference.</h6>
                </Fade>
            </div>
            <div className='points '>
                <div className='counter'>
                    <h1 className='numbers'>15+</h1>
                    <span style={{ fontSize: "1.4rem" }}>State</span>
                </div>
                <div className='counter'>
                    <h1 className='numbers'>3000+</h1>
                    <span style={{ fontSize: "1.4rem" }}>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}
