const Promo = () => {
  const promos = [
    {
      title: "Diskon Spesial Akhir Pekan",
      description: "Nikmati diskon 20% untuk reservasi akhir pekan",
      icon: (
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
          className="text-primary"
        >
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12a10 10 0 0 0-11-9.98"></path>
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m14.31 8.25 1.44-1.44 1.44 1.44"></path>
          <path d="m16.69 14.69-1.44 1.44-1.44-1.44"></path>
          <path d="m9.31 8.25-1.44-1.44-1.44 1.44"></path>
          <path d="m7.01 14.69 1.44 1.44 1.44-1.44"></path>
        </svg>
      ),
    },
    {
      title: "Promo Makan Berdua",
      description: "Beli 2 paket main course, gratis 1 dessert",
      icon: (
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
          className="text-primary"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="promo" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Promo Spesial</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {promos.map((promo, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-center"
            >
              <div className="mr-4">{promo.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="text-gray-600">{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promo;
