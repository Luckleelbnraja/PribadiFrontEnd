import React from "react";

const Contact = () => {
  return (
    <section id="kontak" className="contact-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold mb-8 text-center">
          Kontak
        </h2>
        <div className="contact-card max-w-md mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="space-y-4">
              <div className="contact-item">
                <h3 className="font-bold mb-2">Email:</h3>
                <p className="text-gray-600">email@example.com</p>
              </div>
              <div className="contact-item">
                <h3 className="font-bold mb-2">Telepon:</h3>
                <p className="text-gray-600">+62 123 4567 8900</p>
              </div>
              <div className="contact-item">
                <h3 className="font-bold mb-2">Alamat:</h3>
                <p className="text-gray-600">
                  Jalan Contoh No. 123, Kota, Provinsi
                </p>
              </div>
              <div className="contact-item">
                <h3 className="font-bold mb-2">Media Sosial:</h3>
                <div className="social-links flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    LinkedIn
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    GitHub
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
