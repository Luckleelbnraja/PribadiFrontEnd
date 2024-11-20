import React from "react";

const Education = () => {
  return (
    <section id="pendidikan" className="education-section bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold mb-8 text-center">
          Pendidikan
        </h2>
        <div className="education-list max-w-2xl mx-auto space-y-6">
          <div className="education-item bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Universitas Klabat</h3>
            <p className="text-gray-600">Teknik Informatika</p>
            <p className="text-gray-500">FrontEnd</p>
          </div>
          <div className="education-item bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">SMA Advent Teladan</h3>
            <p className="text-gray-600">IPS</p>
            <p className="text-gray-500">Labuhan Batu Selatan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
