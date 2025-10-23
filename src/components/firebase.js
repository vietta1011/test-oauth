// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAE7q9GzcsqH4aWWirc7cEq_jXl5tYdmg",
  authDomain: "test-oauth-22-10.firebaseapp.com",
  projectId: "test-oauth-22-10",
  storageBucket: "test-oauth-22-10.firebasestorage.app",
  messagingSenderId: "110677510589",
  appId: "1:110677510589:web:a512a36cbc496342caead4",
  measurementId: "G-3B94E7EKL6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
