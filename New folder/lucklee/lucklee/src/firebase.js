import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCy8KFJ9s7XLEIZ6cnKuz0tzbhqqqBLdg",
  authDomain: "lucklee-a0520.firebaseapp.com",
  projectId: "lucklee-a0520",
  storageBucket: "lucklee-a0520.firebasestorage.app",
  messagingSenderId: "626750328051",
  appId: "1:626750328051:web:6f8d237d3788a568a43b86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore, doc, getDoc, onSnapshot, updateDoc };
