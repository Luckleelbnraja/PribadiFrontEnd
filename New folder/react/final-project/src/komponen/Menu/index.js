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
