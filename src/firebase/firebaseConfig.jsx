// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWh_QJrLcMvVCnNm721nAFzYnc4BmVf5w",
  authDomain: "e-commerce-apps-16e1a.firebaseapp.com",
  projectId: "e-commerce-apps-16e1a",
  storageBucket: "e-commerce-apps-16e1a.appspot.com",
  messagingSenderId: "526850805232",
  appId: "1:526850805232:web:41c17795133328209e2135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};