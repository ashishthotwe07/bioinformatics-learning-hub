// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNU6PncT5psAc4y5z9mie-FhNhGvz0bIk",
  authDomain: "bioinfo-academy.firebaseapp.com",
  projectId: "bioinfo-academy",
  storageBucket: "bioinfo-academy.firebasestorage.app",
  messagingSenderId: "431925848394",
  appId: "1:431925848394:web:b9c95c50e994c853a8b9b3",
  measurementId: "G-SPTEC8CF78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
