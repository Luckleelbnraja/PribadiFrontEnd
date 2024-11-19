import React, { useState } from "react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const menuCategories = [
    "All",
    "Appetizer",
    "Main Course",
    "Dessert",
    "Minuman",
  ];

  const menuItems = [
    {
      name: "Salad Segar",
      category: "Appetizer",
      price: 35000,
      image: "../salad.png",
    },
    {
      name: "Steak Wagyu",
      category: "Main Course",
      price: 250000,
      image: "../steak.png",
    },
    {
      name: "Tiramisu",
      category: "Dessert",
      price: 45000,
      image: "../tiramisu.png",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
<<<<<<< HEAD
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Menu Restoran</h2>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 space-x-4">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
=======
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
            <h3>Makanan Spesial 3</h3>
            <p>Spaghetti Bolognese</p>
            <p>Rp 90.000</p>
          </div>
          <div className="menu-item">
            <img src="/makanan4.png" alt="Makanan 4" />
            <h3>Makanan Spesial 4</h3>
            <p>The Royal Feast</p>
            <p>Rp 100.000</p>
          </div>
          <div className="menu-item">
            <img src="/makanan5.png" alt="Makanan 5" />
            <h3>Makanan Spesial 4</h3>
            <p>Filet Mignon Royale</p>
            <p>Rp 200.000</p>
          </div>
>>>>>>> 060780e85d6633b82c7a20169a3c330925d04956
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-primary font-semibold">
                  Rp {item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
