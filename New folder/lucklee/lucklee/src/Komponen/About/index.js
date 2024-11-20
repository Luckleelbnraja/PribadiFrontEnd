import React from "react";

const About = () => {
  return (
    <section id="tentang" className="about-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold mb-8 text-center">
          Tentang Saya
        </h2>
        <div className="content-container max-w-2xl mx-auto">
          <p className="about-description text-gray-600 mb-4">
            Saya adalah seorang pengembang web yang bersemangat dalam
            menciptakan solusi digital yang inovatif. Dengan pengalaman dalam
            berbagai teknologi web modern, saya selalu berusaha memberikan hasil
            terbaik dalam setiap proyek.
          </p>
          <div className="skills-hobbies grid grid-cols-2 gap-4 mt-8">
            <div className="skills">
              <h3 className="section-subtitle font-bold mb-2">Keahlian:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="hobbies">
              <h3 className="section-subtitle font-bold mb-2">Hobi:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Coding</li>
                <li>Membaca</li>
                <li>Traveling</li>
                <li>Fotografi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
