// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-9DpzAzSrEu2p2fkxMpZlL6hpJ8iy3MA",
  authDomain: "kelompokreact.firebaseapp.com",
  projectId: "kelompokreact",
  storageBucket: "kelompokreact.firebasestorage.app",
  messagingSenderId: "493635367745",
  appId: "1:493635367745:web:0795d1a1ae0fc2611f67c0",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue, push }; // Pastikan ini adalah named exports
