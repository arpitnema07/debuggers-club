'use client'
import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import './aboutUs.css';

const AboutUs = () => {
    return (
      <>
      <Header/>
        <div className="about-us">
             <section className="content">
                <h2>About us</h2>

                <p>"Telling our inspiring story from the very beginning to our days"</p>

                <div className="success-story">
                    <h3>Behind the success</h3>                  
                    Established just a few years ago, we are a young and motivated company full of new ideas 
                    and energy. During the past years, we have accomplished a wide range of projects for various 
                    clients. We aim to supply top services and products, to all our customers and contribute 
                    to having a marketplace where every business has equal opportunities to grow.
                    
                </div>
             
                Chris Spring
                CEO & Founder        
                Picture goes here
                 
            </section>
        </div>

        <Footer/>
        </>
        );

};

export default AboutUs;
