import React from "react";
// App.js
import "./css/index.css";
// import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Hero from "./Hero";
import Education from "./Education";

const KomponenIndex = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default KomponenIndex;
