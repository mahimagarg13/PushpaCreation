import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../Style.css";


// const images = [
//   'https://wpblog.zyro.com/wp-content/uploads/2020/06/handmade-pottery-ceramics.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNsZ0_ojYmKeAnX-QwgWWPKLAJKuLUXuh4gf_V6g3zqbQJP47mqlWZI1zc_Iki4dSTsE&usqp=CAU',
//   'https://gl-m.linker-cdn.net/article/2020/Feb/0342aa1030d4449920ee057b65037741.jpg',
//   'https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2021/Q4/Q4_Storefront_Flip/Q1_22_Post_Holiday_Flip/HM_Handmade_2022_HeaderDesktop.jpg',
//   'https://cdn.statically.io/img/authindia.com/wp-content/uploads/2017/12/Iron-Handicrafts-1-1600x900.jpg?quality=70&f=auto'
// ];

// const Hero = () => {
//   return (
//     <div className="slide-container">
/* <Fade scale={10} duration={2000} >
        {
          images.map((each, index) => <img key={index} style={{ width: "100%" }} className="hero-slides" src={each} autoPlay={1} alt='Carousel-img' />
          
          )

        }

      </Fade> */


const Hero = () => {
  const Images = [
    'https://wpblog.zyro.com/wp-content/uploads/2020/06/handmade-pottery-ceramics.jpg',
    // 'https://c0.wallpaperflare.com/preview/848/188/17/night-evening-dark-light.jpg',
    'https://images.unsplash.com/photo-1597393647769-d99d0fec3e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    'https://media.istockphoto.com/photos/woman-hands-knitting-crochet-hobby-crafts-things-top-view-horizontal-picture-id1060599978?k=20&m=1060599978&s=612x612&w=0&h=RSBwr92GYdo5uPD7fWVG7M8x04epafTRKKN5NZg29f8=',
    'https://images.unsplash.com/photo-1527383214149-cb7be04ae387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZG1hZGUlMjBiYWd8ZW58MHx8MHx8&w=1000&q=80',
// 'https://c1.wallpaperflare.com/preview/110/16/938/bracelet-gold-beads-jewellery.jpg'
'https://images.unsplash.com/photo-1568562764054-8783070ce2f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  ];

  return (
    <div>
      <h2>Fade Effect</h2>
      <div className="slide-container">
        <Fade duration={1500}>
          <div className="each-fade">
            <div>
              <img src={Images[0]} alt='slide-img-one' />
            </div>
  <p>Giving thanks to those who take the time to make something special.
 </p>
          </div>
          <div className="each-fade">
  <p>The artist who aims at perfection in everything achieves it in nothing.</p>
            <div>
              <img src={Images[1]} alt='hsfgh' />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={Images[2]} alt='hsfgh' />
            </div>
 <p>Love is making something by hand for someone you care about with the idea it will make them happy.</p>
          </div>
          <div className="each-fade">
   <p>There’s just something about handmade stuff that feel more special than otherwise.</p>
            <div>
              <img src={Images[3]} alt='hsfgh' />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={Images[4]} alt='hsfgh' />
            </div>
  <p>There’s just something about handmade stuff that feel more special than otherwise.</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};
//     </div>


//   )
// }
export default Hero;


