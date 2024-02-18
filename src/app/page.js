"use client";
import React, { createContext } from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default page;
