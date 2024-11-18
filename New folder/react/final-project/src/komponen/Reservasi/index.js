import React from "react";

const Reservasi = () => {
  return (
    <div className="reservasi-container">
      <section id="reservasi" className="reservasi-section">
        <h2 className="reservasi-title">Reservasi Meja</h2>
        <p className="reservasi-description">
          Pesan meja Anda di restoran kami untuk pengalaman bersantap mewah.
          Silakan isi formulir di bawah ini.
        </p>
        <form className="reservasi-form">
          <div className="form-group">
            <label htmlFor="nama" className="form-label">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="form-input"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tanggal" className="form-label">
              Tanggal Reservasi
            </label>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="waktu" className="form-label">
              Waktu Reservasi
            </label>
            <input
              type="time"
              id="waktu"
              name="waktu"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="jumlah" className="form-label">
              Jumlah Orang
            </label>
            <input
              type="number"
              id="jumlah"
              name="jumlah"
              className="form-input"
              min="1"
              placeholder="Masukkan jumlah orang"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Masukkan email Anda"
              required
            />
          </div>

          <button type="submit" className="reservasi-button">
            Pesan Meja
          </button>
        </form>
      </section>
    </div>
  );
};

export default Reservasi;
