
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCW0b3cvKixQhLlluuegL7Ov4Ea_g7paS0",
  authDomain: "tosif-universe-786.firebaseapp.com",
  projectId: "tosif-universe-786",
  storageBucket: "tosif-universe-786.appspot.com",
  messagingSenderId: "809372077838",
  appId: "1:809372077838:web:c3afcc8014a2438cca515f",
  measurementId: "G-85TWMK32WY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};