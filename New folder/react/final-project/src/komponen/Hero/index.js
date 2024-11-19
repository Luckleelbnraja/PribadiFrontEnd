import React from "react";

const Hero = () => {
  const BookOpenIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 4.5h-.5a2 2 0 00-2 2v11a2 2 0 002 2h.5a2 2 0 012-2v-11a2 2 0 00-2-2zM6.75 4.5a2 2 0 012-2h6.5a2 2 0 012 2M6.75 4.5v13M17.25 4.5h.5a2 2 0 012 2v11a2 2 0 01-2 2h-.5a2 2 0 01-2-2v-11a2 2 0 012-2zM17.25 4.5a2 2 0 00-2-2h-6.5M17.25 4.5v13"
      />
    </svg>
  );

  return (
    <section
      id="home"
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/path-to-restaurant-background.jpg")',
      }}
    >
      <div className="container mx-auto px-4 z-10 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Nikmati Hidangan Terbaik
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Pengalaman kuliner yang istimewa menanti Anda. Reservasi meja
          sekarang!
        </p>
        <a
          href="#reservasi"
          className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors inline-flex items-center"
        >
          <BookOpenIcon className="mr-2" /> Reservasi Sekarang
        </a>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default Hero;
