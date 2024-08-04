// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpi6Pje6xFij7NyLc7jjy62qVo927DXQA",
  authDomain: "inventory-management-9dc2a.firebaseapp.com",
  projectId: "inventory-management-9dc2a",
  storageBucket: "inventory-management-9dc2a.appspot.com",
  messagingSenderId: "1083874816118",
  appId: "1:1083874816118:web:12f145bdbce1a530706f57",
  measurementId: "G-682YGFC829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}