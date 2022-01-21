import React from 'react';
import vission from '../Home/Images/vission.jpg'
import mission from '../Home/Images/mission.jfif'
import Fade from 'react-reveal/Fade';

export default function Vissionmisson() {
  return <div >
    {/* <img src={About}  alt="bg" className='About-bg2'/> */}
    <div className='vissionmisson container'>
      <div className='aboutus-img'>
    <Fade left><img src={vission} alt='vission-img' className='vission-img' /></Fade>
      </div>
      <div id="vertical-line-vissionmisson"></div>

      <div className='aboutus-heading padding-top-20px' style={{alignSelf:"center"}}>
        <Fade right>
          <h1 classname="about-h1" style={{ fontFamily: "NYTMagSerifHeadlineWEB-Bold", fontWeight: "700", textTransform: "none", lineHeight: "40px", fontSize: "40px", color: "black" }}>
            Our Vission
          </h1>
          <p style={{ color: "gray" }}> Bring to the world a portfolio of exquisitely designed products from the heritage city Jaipur, that anticipate and satisfy people’s needs and desires.</p>
        </Fade>  </div>

    </div>
    <div id="hr-line"></div>
    <div className='vissionmisson container'>
      <div className='aboutus-heading padding-top-20px' style={{alignSelf:"center"}}>
     <Fade left><h1 classname="about-h1" style={{ fontFamily: "NYTMagSerifHeadlineWEB-Bold", fontWeight: "700", textTransform: "none", lineHeight: "40px", fontSize: "40px", color: "black" }}>
          Our Mission
        </h1>
        <p style={{ color: "gray" }}>  To enlighten and enrich women’s lives.
        </p>
        </Fade>
      </div>

      <div id="vertical-line-vissionmisson"></div>

      <div className='aboutus-img'>
    <Fade right><img src={mission} alt='mission-img' className='vission-img' /></Fade>
      </div>
    </div>
  </div>;
}
