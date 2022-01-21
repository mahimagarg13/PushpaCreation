import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Fade from 'react-reveal/Fade';
import "../Style.css"

export default function Formcontactus() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const onSubmitForm = async (e) => {
    // e.preventDefault();
    try {
      const data = { name, phone, country, email, message };

      axios
        .post("/contact", data)
        //   .then(setShow(true));
        .then(alert("Submit"));
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };
  return <div className='contact-form container'>
    <div className='form'>
      <Fade bottom><h1 className="contact-h1" style={{ fontFamily: "NYTMagSerifHeadlineWEB-Bold", fontWeight: "700", textTransform: "none", lineHeight: "40px", fontSize: "48px", color: "rgb(117, 45, 65)" }}>
        Let's connect
      </h1>
      </Fade>
      <form onSubmit={onSubmitForm} style={{ textAlign: "left", display: "contents" }}>
        <label>
          <input
            type="name" id="formcontrol"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required="required"
          />
        </label><br />
        <label>
          <input
            type="Eamil" id="formcontrol"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required="required"
          />
        </label><br />
        <label>
          <input
            id="formcontrol"
            type="phone"
            placeholder="Phone"
            required="required"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </label><br />
        <label>
          <input
            id="formcontrol"
            type="Country"
            placeholder="Country"
            required="required"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
        </label><br />
        <label>
          <input
            id="formcontrol"
            type="text"
            placeholder="Tell us about your request"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required="required"
          />
        </label><br />
        <Button id="contactus-btn" type="submit" size="lg">
          Send Message </Button>{' '}
      </form>
    </div>
    <div className='gmap'>
      <iframe title="Clink Girls Hostel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.922666781825!2d77.35420001401265!3d23.282259512416992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c674811726391%3A0xab330187d1efe937!2sClink%20Girls%20%26%20Working%20Women%20Hostel!5e0!3m2!1sen!2sin!4v1642069768165!5m2!1sen!2sin" width="100%" height="100%" loading="lazy"></iframe>

    </div>
  </div>
    ;
}
