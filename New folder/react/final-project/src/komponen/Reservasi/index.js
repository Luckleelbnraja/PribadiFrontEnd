import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../../firebase";
import ClipLoader from "react-spinners/ClipLoader"; // Import spinner

const Reservasi = () => {
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [isLoading, setIsLoading] = useState(false); // State untuk loading spinner

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Tampilkan spinner
    try {
      const reservationsRef = ref(database, "reservations");
      await push(reservationsRef, reservationData);

      console.log("Reservation submitted successfully:", reservationData);

      // Reset form setelah sukses
      setReservationData({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: 1,
      });

      alert("Reservasi berhasil dikirim!");
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Terjadi kesalahan saat mengirim reservasi.");
    } finally {
      setIsLoading(false); // Sembunyikan spinner
    }
  };

  return (
    <section id="reservasi" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Reservasi Meja</h2>

        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <ClipLoader color="#3498db" size={50} />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block mb-2">Nama Lengkap</label>
              <input
                type="text"
                required
                value={reservationData.name}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    name: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                required
                value={reservationData.email}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    email: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Masukkan email Anda"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2">Tanggal</label>
                <input
                  type="date"
                  required
                  value={reservationData.date}
                  onChange={(e) =>
                    setReservationData({
                      ...reservationData,
                      date: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-2">Waktu</label>
                <input
                  type="time"
                  required
                  value={reservationData.time}
                  onChange={(e) =>
                    setReservationData({
                      ...reservationData,
                      time: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Jumlah Tamu</label>
              <input
                type="number"
                min="1"
                max="10"
                required
                value={reservationData.guests}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    guests: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              Konfirmasi Reservasi
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Reservasi;
