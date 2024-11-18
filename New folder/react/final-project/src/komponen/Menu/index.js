import React from "react";

const Menu = () => {
  return (
    <div>
      <section id="menu">
        <h2>Menu Kami</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="/makanan1.png" alt="Makanan 1" />
            <h3>Makanan Spesial 1</h3>
            <p>Deskripsi singkat tentang makanan.</p>
            <p>Rp 50.000</p>
          </div>
          <div className="menu-item">
            <img src="/makanan2.png" alt="Makanan 2" />
            <h3>Makanan Spesial 2</h3>
            <p>Deskripsi singkat tentang makanan.</p>
            <p>Rp 65.000</p>
          </div>
          <div className="menu-item">
            <img src="/makanan3.png" alt="Makanan 3" />
            <h3>Makanan Spesial 2</h3>
            <p>Quick & Easy Spaghetti Bolognese</p>
            <p>Rp 90.000</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
