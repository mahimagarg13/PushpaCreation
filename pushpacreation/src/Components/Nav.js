import React, { useEffect , useState } from 'react';
import "../Components/Nav.css";
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
// import logo from "../Navbar/logo.png";
function Nav() {
  const [showLinks, setShowLinks] = useState(false)
  const navBarShow = () => setShowLinks(false);
  // window.scrollTo(0, 0)
  useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
  return (
    <div className="Navbar">
      <div className="leftside"></div>
      <Link to="/">
        <img src="" className="hw" alt="Logo" />
      </Link>
      <div className="rightside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/#" onClick={navBarShow} ><span >Home</span></Link>
          <Link to="/aboutus/#" onClick={navBarShow}>About Us</Link>
          {/* <div className="dropdown"> */}
              <Link to="/products/#" className="dropbtn" onClick={navBarShow} >Products</Link>
            {/* <div className="dropdown-content"> */}
              {/* <Link to="">Service 1</Link> */}
              {/* <Link to="">Service 2</Link> */}
            {/* </div></div> */}
          {/* <Link to="/gallery/#" onClick={navBarShow} >Gallery</Link> */}
          {/* <Link to="/designer/#" onClick={navBarShow} >Designer</Link> */}
          <Link to="/contactus/#" onClick={navBarShow} >Contact Us</Link>
          <a href=" https://wa.me/8010810469" onClick={navBarShow} className="btnn" rel="noopener noreferrer" target="_blank">Enquiry Now</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)} className="margin-right" style={{backgroundColor:"transparent"}}>
          <TiThMenu style={{color:"black", fontSize: "22px"}} />
        </button>
      </div>
    </div>
  );
}
export default Nav;
