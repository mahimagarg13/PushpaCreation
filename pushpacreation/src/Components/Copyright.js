import React, { useEffect } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import "./Footer.css"
export default function Copyright() {
    useEffect(
        () => {
            window.scrollTo(0, 0);
        },
        []
    );
    return (
        <div style={{ backgroundColor: " #d3ab9e", padding: "0px 0px 20px 0px" }} >
            <div id="vl-footer-section"></div>
            <div className='d-flex flex-column text-center' >
                <div style={{ color: "black", fontSize: "1.6rem" }}>
                    <a href='https://www.facebook.com/' rel="noopener noreferrer" target="_blank"><FaFacebookF style={{ margin: "10px" }} className='hover' /></a>
                    <a href="https://wa.me/+91-" rel="noopener noreferrer" target="_blank"><IoLogoWhatsapp style={{ margin: "10px" }} className='hover' /></a>
                    <a href="https://instagram.com/" rel="noopener noreferrer" target="_blank"><FiInstagram style={{ margin: "10px" }} className='hover' />
                    </a>
                </div>
                <div style={{ fontSize: "0.8rem", color: "#fffbff" }}>© 2022 Pushpa Creation. All Rights Reserved.
                    <h6 style={{ paddingTop: "10px" }}>
                        Developed & Maintained by <a className="aa" href="https://www.cloudencyclopedia.com" rel="noopener noreferrer" target="_blank"><span style={{ color: "black", textDecoration: "none" }}>Cloud Encyclopedia</span></a> IT Solutions
                    </h6> </div>
            </div>
        </div>
    )
}
