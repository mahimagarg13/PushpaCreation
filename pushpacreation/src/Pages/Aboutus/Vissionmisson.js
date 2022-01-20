import React from 'react';
import vission from '../Home/Images/vission.jpg'
import mission from '../Home/Images/mission.jfif'
export default function Vissionmisson() {
  return <div >
      {/* <img src={About}  alt="bg" className='About-bg2'/> */}
         <div className='vissionmisson container'>
         <div className='aboutus-img'>
<img src={vission} alt='vission-img' className='vission-img'/>
            </div>
            <div id="vertical-line-vissionmisson"></div>

            <div className='aboutus-heading padding-top-20px'>
<h1 classname="about-h1" style={{fontFamily: "NYTMagSerifHeadlineWEB-Bold", fontWeight:"700" ,textTransform: "none",    lineHeight: "40px" ,fontSize:"40px", color:"rgb(117, 45, 65)"}}>
Our Vission
</h1>
<p style={{color:"gray"}}>: Bring to the world a portfolio of exquisitely designed products from the heritage city Jaipur, that anticipate and satisfy people’s needs and desires.</p>
            </div>
          
        </div>
        <div id="hr-line"></div>
         <div className='vissionmisson container'>
                   <div className='aboutus-heading padding-top-20px'>
<h1 classname="about-h1" style={{fontFamily: "NYTMagSerifHeadlineWEB-Bold", fontWeight:"700" ,textTransform: "none",    lineHeight: "40px" ,fontSize:"40px", color:"rgb(117, 45, 65)"}}>
Our Mission
</h1>
<p style={{color:"gray"}}>:  To enlighten and enrich women’s lives.
</p>
            </div>
          
              <div id="vertical-line-vissionmisson"></div>

        <div className='aboutus-img'>
<img src={mission} alt='mission-img' className='vission-img'/>
            </div>
  </div>
  </div>;
}
