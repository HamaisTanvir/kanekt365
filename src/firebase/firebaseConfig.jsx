// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import Firebase Auth module

const firebaseConfig = {
  apiKey: "AIzaSyAlQD4GQoaFUmFStKl9KI5JuqgpOw2b-HA",
  authDomain: "kanekt365auth.firebaseapp.com",
  projectId: "kanekt365auth",
  storageBucket: "kanekt365auth.appspot.com",
  messagingSenderId: "216510469153",
  appId: "1:216510469153:web:904c03b2311ad502ed7f60"
};

// Initialize Firebase and Firebase Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth };
