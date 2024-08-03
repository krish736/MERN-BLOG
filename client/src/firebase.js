// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a24b0.firebaseapp.com",
  projectId: "mern-blog-a24b0",
  storageBucket: "mern-blog-a24b0.appspot.com",
  messagingSenderId: "1008424877073",
  appId: "1:1008424877073:web:c1c46142ba038e2df585b0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
