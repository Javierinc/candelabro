// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFqDJgdxiimawLhJFNLKsr1aG6MQyrBJA",
  authDomain: "candelabroecommerce.firebaseapp.com",
  projectId: "candelabroecommerce",
  storageBucket: "candelabroecommerce.appspot.com",
  messagingSenderId: "541932937548",
  appId: "1:541932937548:web:ca03372653259dab5e2fe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)