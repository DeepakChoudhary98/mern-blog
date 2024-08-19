// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5e1f8.firebaseapp.com",
  projectId: "mern-blog-5e1f8",
  storageBucket: "mern-blog-5e1f8.appspot.com",
  messagingSenderId: "724056258214",
  appId: "1:724056258214:web:0ac5f897b5461e2393e667"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

