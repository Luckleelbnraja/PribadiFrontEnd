// src/components/EditableTitle.js
import React, { useState, useEffect } from "react";
import { firestore, doc, onSnapshot, updateDoc } from "../firebase/firebase"; // Import Firestore

const EditableTitle = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [editMode, setEditMode] = useState(false);

  // Mengambil title dan subtitle dari Firestore secara real-time
  useEffect(() => {
    const titleRef = doc(firestore, "settings", "title");
    const subtitleRef = doc(firestore, "settings", "subtitle");

    // Listener untuk perubahan title
    const unsubscribeTitle = onSnapshot(titleRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        setTitle(docSnapshot.data().content);
      }
    });

    // Listener untuk perubahan subtitle
    const unsubscribeSubtitle = onSnapshot(subtitleRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        setSubtitle(docSnapshot.data().content);
      }
    });

    // Bersihkan listener ketika komponen tidak digunakan
    return () => {
      unsubscribeTitle();
      unsubscribeSubtitle();
    };
  }, []);

  // Fungsi untuk menyimpan perubahan title atau subtitle ke Firestore
  const handleSave = async () => {
    try {
      const titleRef = doc(firestore, "settings", "title");
      const subtitleRef = doc(firestore, "settings", "subtitle");

      // Update title
      await updateDoc(titleRef, { content: title });
      // Update subtitle
      await updateDoc(subtitleRef, { content: subtitle });

      setEditMode(false); // Keluar dari mode edit setelah disimpan
    } catch (err) {
      console.error("Error updating data:", err);
    }
  };

  return (
    <div>
      <h1>
        {editMode ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          title
        )}
      </h1>

      <h2>
        {editMode ? (
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        ) : (
          subtitle
        )}
      </h2>

      {editMode ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit</button>
      )}
    </div>
  );
};

export default EditableTitle;
