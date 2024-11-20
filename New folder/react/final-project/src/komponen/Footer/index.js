import React from "react";

const Footer = () => {
  const MapPinIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-1 h-1 text-primary" // Ukuran kecil standar
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2.25c3.45 0 6.25 2.8 6.25 6.25 0 4.98-6.25 11.25-6.25 11.25S5.75 13.48 5.75 8.5c0-3.45 2.8-6.25 6.25-6.25z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
      />
    </svg>
  );

  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-primary" // Ukuran kecil standar
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 4.5l2.623-.525a2.25 2.25 0 012.57 1.29l1.134 2.642a2.25 2.25 0 01-.574 2.654l-.882.764a14.978 14.978 0 007.227 7.227l.764-.882a2.25 2.25 0 012.654-.574l2.642 1.134a2.25 2.25 0 011.29 2.57l-.525 2.623a1.875 1.875 0 01-1.875 1.625C7.473 21 3 16.527 3 10.875 3 9 3.75 4.5 2.25 4.5z"
      />
    </svg>
  );

  const MailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-primary" // Ukuran kecil standar
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 8.25v9a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-9M3 6.75L12 12l9-5.25M21 6H3"
      />
    </svg>
  );

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 shadow-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Kontak */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary pb-2">
              Kontak Kami
            </h3>
            <div className="space-y-4">
              <div className="flex items-center hover:text-primary transition-colors duration-300 group">
                <MapPinIcon />
                <span className="ml-3 group-hover:translate-x-1 transition-transform">
                  Jl. Restoran No. 123, Kota
                </span>
              </div>
              <div className="flex items-center hover:text-primary transition-colors duration-300 group">
                <PhoneIcon />
                <span className="ml-3 group-hover:translate-x-1 transition-transform">
                  +62 822-1234-5678
                </span>
              </div>
              <div className="flex items-center hover:text-primary transition-colors duration-300 group">
                <MailIcon />
                <span className="ml-3 group-hover:translate-x-1 transition-transform">
                  info@restoran.com
                </span>
              </div>
            </div>
          </div>

          {/* Jam Operasional */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary pb-2">
              Jam Operasional
            </h3>
            <div className="space-y-2 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
              <p className="flex justify-between hover:bg-gray-700 p-2 rounded transition-colors">
                <span>Senin - Jumat:</span>
                <span className="font-semibold">11:00 - 22:00</span>
              </p>
              <p className="flex justify-between hover:bg-gray-700 p-2 rounded transition-colors">
                <span>Sabtu - Minggu:</span>
                <span className="font-semibold">10:00 - 23:00</span>
              </p>
            </div>
          </div>

          {/* Media Sosial */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary pb-2">
              Ikuti Kami
            </h3>
            <div className="flex flex-col space-y-3 mt-4">
              <a
                href="https://www.instagram.com"
                className="text-white hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
              >
                <span className="w-5 h-5 bg-white/10 rounded-full p-1 group-hover:bg-white/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-1 h-1"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808s-.012 2.783-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808s.012-2.783.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.024-.047 1.379-.06 3.808-.06zM12.315 5.25a7.065 7.065 0 017.065 7.065 7.065 7.065 0 01-7.065 7.065 7.065 7.065 0 01-7.065-7.065 7.065 7.065 0 017.065-7.065zM12.315 7.5a4.815 4.815 0 100 9.63 4.815 4.815 0 000-9.63zM7.5 7.5h9v3H7.5V7.5z" />
                  </svg>
                </span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
