import React from "react";

const Promo = () => {
  // Data ulasan
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
    <div>
      {/* Section Promo */}
      <section id="promo" className="promo-section">
        <h2>Promo Spesial</h2>
        <p>
          Dapatkan diskon 10% untuk reservasi lebih dari 5 orang!{" "}
          <strong>Promo berlaku sampai 31 Desember.</strong>
        </p>
      </section>

      {/* Section Ulasan */}
      <section id="ulasan" className="ulasan-section">
        <h2>Ulasan Pelanggan</h2>
        <div className="reviews">
          {reviews.map((review) => (
            <div key={review.id} className="review">
              <p>
                "{review.text}" - {review.author}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Promo;
