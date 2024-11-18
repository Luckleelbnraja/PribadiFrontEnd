import React from "react";

const Ulasan = () => {
  const reviews = [
    {
      id: 1,
      text: "Pengalaman makan yang luar biasa. Makanan enak dan pelayanan cepat!",
      author: "Andi",
    },
    {
      id: 2,
      text: "Tempat yang nyaman untuk acara keluarga. Reservasi online sangat mudah!",
      author: "Budi",
    },
  ];

  return (
    <div className="ulasan-container">
      <section id="ulasan">
        <h2>Ulasan Pelanggan</h2>
        <div className="reviews">
          {reviews.map((review) => (
            <div key={review.id} className="review">
              <p>
                &quot;{review.text}&quot; - {review.author}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ulasan;
