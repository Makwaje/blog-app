// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-50603.firebaseapp.com",
  projectId: "blog-50603",
  storageBucket: "blog-50603.appspot.com",
  messagingSenderId: "416796646818",
  appId: "1:416796646818:web:6e8469970a411c0a9f26fb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
