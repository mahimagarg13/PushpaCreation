import React from 'react';
import {FaFacebookF} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io";
import {FiInstagram} from "react-icons/fi";
import {IoMdCall} from "react-icons/io"
import {MdEmail} from "react-icons/md"
import contact from "../Home/Images/FINAL_CONTACT.jpg"
import "../Style.css"
export default function Contacthero() {
  return <div>
       <div style={{    background:"#ebd8d0"  }} className='padding-top-100'>
      <div className='contactus-page container'>
          <div className='contact-left-div'>
          <h1 className="contact-h1" style={{fontFamily: "NYTMagSerifHeadlineWEB-Bold", fontWeight:"700" ,textTransform: "none",    lineHeight: "40px" ,fontSize:"50px", color:"rgb(117, 45, 65)"}}>
    Contact US
</h1>       
<p className='contact-p'>We’d love to help you with an order, for general customer service enquiries or product questions. The best time to reach us is 
    <br/> Mon - Sat 9.00 am - 6:00 pm (Indian Standard Time).</p>

<h6>EMAIL</h6>
<p><a href="mailto:pushpacreations4@gmail.com" rel="noopener noreferrer" target="_blank" className='a'><MdEmail className="contact-icon" />pushpacreations4@gmail.com</a></p>

<h6>FOR CALL</h6>
<p><a href="tel:+91-8010810469" rel="noopener noreferrer" target="_blank" className='a'><IoMdCall className="contact-icon" />+91-8010810469</a></p>
<div style={{ fontSize:"1.6rem"}}>
<a href='https://www.facebook.com/'  rel="noopener noreferrer" target="_blank"><FaFacebookF style={{margin:"10px"}} className='hover-icon'  /></a>
<a href="https://wa.me/+91-" rel="noopener noreferrer" target="_blank"><IoLogoWhatsapp style={{margin:"10px"}} className='hover-icon'/></a>
<a href="https://instagram.com/" rel="noopener noreferrer" target="_blank"><FiInstagram style={{margin:"10px"}} className='hover-icon'/>
</a>
</div>
   </div>
          <div className='contact-right-div'>
              <img src={contact} alt='contact-us-image' className='contact-img' />
          </div>
      </div>
    
  </div>
  </div>;
}
