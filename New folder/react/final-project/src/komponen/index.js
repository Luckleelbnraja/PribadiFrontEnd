import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Menu from "./Menu";
import Reservasi from "./Reservasi";
import Promo from "./Promo";
import Ulasan from "./Ulasan";
import Footer from "./Footer";
import "./css/index.css"; // Pastikan CSS diimpor dengan benar

const KomponenIndex = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Menu />
      <Reservasi />
      <Promo />
      <Ulasan />
      <Footer />
    </div>
  );
};

export default KomponenIndex;
