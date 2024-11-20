import React from "react";

const Hero = () => {
  return (
    <section id="beranda" className="hero bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <img
          src="/luck.jpeg"
          alt="Foto Profil"
          className="rounded-full mx-auto mb-6 shadow-lg" /* Tambahkan efek bayangan */
        />
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Lumban Raja,Luck Lee
        </h1>{" "}
        {/* Warna teks lebih gelap */}
        <p className="text-xl text-gray-600">Web Developer | Designer</p>
      </div>
    </section>
  );
};

export default Hero;
