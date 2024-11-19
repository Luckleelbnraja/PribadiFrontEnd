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
      image: "/images/salad.png",
    },
    {
      name: "Steak Wagyu",
      category: "Main Course",
      price: 250000,
      image: "/images/steak.png",
    },
    {
      name: "Tiramisu",
      category: "Dessert",
      price: 45000,
      image: "/images/tiramisu.png",
    },
    {
      name: "Teh Hijau",
      category: "Minuman",
      price: 20000,
      image: "/images/green-tea.png",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Menu Kami</h2>

        {/* Kategori Menu */}
        <div className="flex justify-center space-x-4 mb-8">
          {menuCategories.map((category, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-lg ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Daftar Menu */}
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
