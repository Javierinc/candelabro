// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC-DqTnGKaBmZratY9elXM6NrNzYnG_Kg",
  authDomain: "candelabro-eed1b.firebaseapp.com",
  projectId: "candelabro-eed1b",
  storageBucket: "candelabro-eed1b.appspot.com",
  messagingSenderId: "884319192056",
  appId: "1:884319192056:web:982c5e829662a700328c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)