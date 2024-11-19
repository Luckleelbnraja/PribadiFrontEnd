import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader"; // Import spinner

const Header = () => {
  const [isLoading, setIsLoading] = useState(true); // State untuk spinner

  // Simulasikan loading selesai
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Spinner hilang setelah 2 detik
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#promo", label: "Promo" },
    { href: "#menu", label: "Menu" },
    { href: "#reservasi", label: "Reservasi" },
    { href: "#ulasan", label: "Ulasan" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">EazyRestaurant</div>

        {/* Spinner saat halaman sedang loading */}
        {isLoading ? (
          <div className="flex justify-center items-center h-16">
            <ClipLoader color="#3498db" size={40} />
          </div>
        ) : (
          <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => alert("Menu toggle!")}
                className="text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
