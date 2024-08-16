
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIsDvAzZ-yYIW4MdIkzai86IH0ZVC7eaE",
  authDomain: "flashcardsaas-2ddea.firebaseapp.com",
  projectId: "flashcardsaas-2ddea",
  storageBucket: "flashcardsaas-2ddea.appspot.com",
  messagingSenderId: "933651792988",
  appId: "1:933651792988:web:6778ace93a72d3b9d91299",
  measurementId: "G-WHDZFSQTJ7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;