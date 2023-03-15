import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS08wwbw7oWyJAf92RZwYNB2Kv3rtSZxk",
  authDomain: "netflix-2beaa.firebaseapp.com",
  projectId: "netflix-2beaa",
  storageBucket: "netflix-2beaa.appspot.com",
  messagingSenderId: "112352144490",
  appId: "1:112352144490:web:f1109e4929b7f867ddae13",
  measurementId: "G-Q0SZWZTZMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)