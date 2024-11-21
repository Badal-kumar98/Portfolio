import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeAK7QUo2uDUZPOS63kWMHUGAvMp78RHU",
  authDomain: "portfolio-13202.firebaseapp.com",
  projectId: "portfolio-13202",
  storageBucket: "portfolio-13202.firebasestorage.app",
  messagingSenderId: "241153918538",
  appId: "1:241153918538:web:9994883818acb56f3688b3"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth };