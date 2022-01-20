import React from 'react'
import { FaShippingFast } from "react-icons/fa"
import { BsPatchCheckFill } from "react-icons/bs"
import { BsChatSquareTextFill } from "react-icons/bs"
export default function Benifits() {
    return (
        <div className='benefits'>
            <div className='benefits-text'>
                <div className='benefits-icon'><FaShippingFast/></div><div className='benefits-headings'> World Wide Shipping</div>
                </div>
                <div id="vl"></div>
                <div className='benefits-text'>
                    <div className='benefits-icon'><BsChatSquareTextFill/></div><div className='benefits-headings'> 24*7 Customer Support</div>
                    </div>
                    <div id="vl"></div>

                    <div className='benefits-text'><div className='benefits-icon'><BsPatchCheckFill  /></div><div className='benefits-headings'> 100% Guarantee
                    </div>
                                </div>
                </div>
                )
}
