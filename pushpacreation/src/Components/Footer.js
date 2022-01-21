import React, { useEffect } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import Message from "./Icons/email.png"
import Fade from 'react-reveal/Fade';

import { MdOutlineMail } from "react-icons/md";
// import flogo from "../Navbar/logo.png";
// import tawkTo from "tawkto-react";
// const tawkToPropertyId = 'get_property_id_from_tawkto_dashboard'
// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey
// const tawkToKey = '61a80d989099530957f795da'
function Footer() {
    // window.scrollTo(0, 0)
    // useEffect(() => {
    //     tawkTo(tawkToPropertyId, tawkToKey)
    // }, [])
    useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
    return (
        <Fade bottom duration="1500">

        <div className="background-black">

<div className="flex-footer container connected">
    <div className="dd-flex">
    <div className="email-div">
        {/* <img src={Message} alt="message-icon" className="msg-icon"/> */}
        <MdOutlineMail className="msg-icon"/>
    </div>
    <div className="newsletter-text">
    <h5 style={{color:"rgb(117, 45, 65)"}}>Stay Connected</h5>
    <h6>Receive email updates on matters of craft and craftsmanship plus new product launches, discounts, and events.</h6>
        </div>
        </div>
    <div className="input-div">
    <form>
  <input type="email" id="email" name="email" placeholder="Your email address " className="newslettet-input"/>
  <input type="submit"  value="Subscribe" className="newsletter-button" />
</form>

</div>
</div>



                           <div className="d-flex footer">
                    <div className="one text-center ">
                        <img src="" className="h-w" alt="footer-logo" />
                        <p className="mar lnk"> </p>
                    </div>
                    <div className="two">
                        <h4 style={{color:"black"}}>Navigation</h4>
                        <p id="vl-footer"></p>
                        <div className="lnk">
                            {/* <FaAngleRight className="text-golden" /> */}
                            <a href="/#">Home</a><br />
                            {/* <FaAngleRight className="text-golden" />  */}
                            <Link to="/aboutus">About Us</Link><br />
                            <Link to="/products">Products</Link><br />
                            {/* <Link to="/gallery">Gallery</Link><br /> */}
                            <Link to="/contactus"> Contact Us</Link><br />
                            {/* <FaAngleRight className="text-golden" /> */}
                              {/* <Link to="/events">Events</Link><br /> */}
                            {/* <FaAngleRight className="text-golden" />  */}
                             {/* <Link to="/sponsers">Sponsers</Link><br /> */}
                        </div>
                    </div>
                    {/* <div className="lnk mt">
                        {/* <FaAngleRight className="text-golden" /> */}
                        {/* <FaAngleRight className="text-golden" /> */}
                          {/* <Link to="/auditions">Auditions</Link><br /> */}
                        {/* <FaAngleRight className="text-golden" /> */}
                        {/* <FaAngleRight className="text-golden" /> */}
                        {/* <Link to="/registration">Registration</Link><br /> */}
                    {/* </div> */}
                    <div className="three">
                        <h4 style={{color:"black"}}>Important Links</h4>
                        <p id="vl-footer"></p>
                        <div className="lnk">
                            {/* <FaAngleRight className="text-golden" /> */}
                            <Link to="/error">Rules & Regulation</Link><br />
                            {/* <FaAngleRight className="text-golden" /> */}
                            <Link to="/error">Terms & Conditions</Link><br />
                            {/* <FaAngleRight className="text-golden" /> */}
                            <Link to="/faq">FAQ</Link><br />
                        </div></div>
                </div>
        </div>
        </Fade>
    );
}
export default Footer;