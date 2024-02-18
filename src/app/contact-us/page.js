'use client'
import React from 'react';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";




const ContactForm = () => {
  return (
<> <Header/>
    <div className="container">
      
      <div className="contact-info">
        <h2>Contact us</h2>
        <p>ADDRESS:</p>
        <p>Indore, Madhaya Pradesh</p>
        <p>PHONE:</p>
        <p>+91 9770518282</p>
        <p>EMAIL:</p>
        <a href="mailto:swatikanathe09@gmail.com">swatikanathe09@gmail.com</a>
      </div>

      <div className="form-container">
        <h2>Contact Form #10</h2>
        <form action="#">
          Get in touch
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          Subject
          {/* You can replace this with a dropdown or another input type as needed */}
          {/* For simplicity, I'm using an input field here */}
          {/* You can also add validation as needed */}
          {/* This is just a basic example */}
          {/* You can expand on this as needed for your specific use case */}
          <input type="text" placeholder="Subject" required />
          Message
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    <Footer/>
</>
  );
};

export default ContactForm ;

