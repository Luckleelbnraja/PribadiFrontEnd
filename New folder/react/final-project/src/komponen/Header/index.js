import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#menu" className="nav-link">
            Menu
          </a>
          <a href="#reservasi" className="nav-link">
            Reservasi
          </a>
          <a href="#ulasan" className="nav-link">
            Ulasan
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="nav-links mobile-nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#menu" className="nav-link">
            Menu
          </a>
          <a href="#reservasi" className="nav-link">
            Reservasi
          </a>
          <a href="#ulasan" className="nav-link">
            Ulasan
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
