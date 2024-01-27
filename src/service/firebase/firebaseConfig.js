import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjjDdy2OIfI8fyC-wxVos3uUiiw8ZBqE4",
  authDomain: "ecommerce-c1d37.firebaseapp.com",
  projectId: "ecommerce-c1d37",
  storageBucket: "ecommerce-c1d37.appspot.com",
  messagingSenderId: "735238093581",
  appId: "1:735238093581:web:86434522a838979ded4e44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
