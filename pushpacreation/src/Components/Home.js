import React, { useEffect } from 'react';
import Benifits from '../Pages/Home/Benifits'
import Hero from "../Pages/Home/Hero"
import Homeabout from '../Pages/Home/Homeabout'
import Points from '../Pages/Home/Points'
import Shopbycategory from '../Pages/Home/Shopbycategory'
import "../Pages/Style.css"
export default function Home() {
    useEffect(
        () => {
            window.scrollTo(0, 0);
        },
        []
    );
    return (
        <div className='padding-top-50px'>
            <Hero />
            <Benifits />
            <Homeabout />
            <Shopbycategory />
            <Points />
            <a href="https://api.whatsapp.com/send?phone=8010810469&text=Hi%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-whatsapp my-float"></i>
            </a>
        </div>
    )
}
