import React from "react";

const Ulasan = () => {
  const reviews = [
    {
      name: "Budi Santoso",
      rating: 5,
      comment: "Makanannya luar biasa enak dan pelayanan yang ramah!",
    },
    {
      name: "Ani Wijaya",
      rating: 4,
      comment: "Suasana restoran yang nyaman dan menu yang beragam.",
    },
  ];

  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-yellow-400"
    >
      <path d="M12 .587l3.668 7.571L24 9.75l-6 5.847L19.335 24 12 20.021 4.665 24 6 15.597 0 9.75l8.332-1.592L12 .587z" />
    </svg>
  );

  return (
    <section id="ulasan" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Ulasan Pelanggan
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold mr-4">{review.name}</h3>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ulasan;
