// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtZkkJolCf--Zn00_clyYj8nkVweYNRUQ",
  authDomain: "astro-react-d3081.firebaseapp.com",
  projectId: "astro-react-d3081",
  storageBucket: "astro-react-d3081.appspot.com",
  messagingSenderId: "904662185938",
  appId: "1:904662185938:web:4e4c5fc3d0cb1c121cfa0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)