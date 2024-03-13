// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWFKJNH9yWSIyo-nhW6G9Xl2Ig4Bq9Vgw",
  authDomain: "online-auction-2dc97.firebaseapp.com",
  projectId: "online-auction-2dc97",
  storageBucket: "online-auction-2dc97.appspot.com",
  messagingSenderId: "468743150572",
  appId: "1:468743150572:web:18d2609b025a89f02d7ec9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()