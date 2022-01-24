import React from 'react';
import "../Style.css";
import aboutimg from "../Home/Images/About1.jpg"
import Fade from 'react-reveal/Fade';
export default function Abouthero() {
    return (
        <div className='aboutus-page container' >
            <div className='aboutus-heading'>
                <Fade bottom>
                    <h1 className="about-h1" style={{ fontFamily: "NYTMagSerifHeadlineWEB-Bold", fontWeight: "700", textTransform: "none", lineHeight: "40px", fontSize: "40px", color: "black", paddingTop: "10px" }}>
                        About Us
                    </h1>
                    <p style={{ color: "gray", paddingTop: "15px" }}>Pushpa creation  some of the finest handicrafts in India from the ateliers of master artisans across the length and breadth of the country. The eponymous ‘maestros’ of Craft Maestros are master craftspeople who have tirelessly and painstakingly mastered ancient techniques and skills over years to hone their talent. Of the 91 master crafts persons associated with us, three are Padmashree awardees, 11 are Shilp Guru, 66 National Award winners and 11 the most renowned artisans in their field.<br /> <br />Each design that you buy from us represents a story – of craftsmanship perfected over centuries and preserved for generations to come. From Kutch weaves to Kilim rugs, from Thewa to Meenakari, from papier-mâché to terracotta pottery, there are currently 31 handicraft forms that we nurture, with many more being added steadily to our list.<br /> <br /> We offer the guarantee of authenticity and premium quality on each product as we deal directly and only with master craftspeople rather than intermediaries; our products are therefore available at price points that work for our community of artisans and for you.</p>
                </Fade>
            </div>
            <div id="vertical-line"></div>
            <Fade right>
                <div className='aboutus-img'>
                    <img src={aboutimg} alt='About-us-img' className='about-hero-image' />
                </div>
            </Fade>
        </div>
    )
}
