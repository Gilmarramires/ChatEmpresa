import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCGW9By_WEM2SjAKi0_jkPRwoEk6ONMZg",
    authDomain: "chatmeu-d3677.firebaseapp.com",
    projectId: "chatmeu-d3677",
    storageBucket: "chatmeu-d3677.appspot.com",
    messagingSenderId: "599877086814",
    appId: "1:599877086814:web:95d0c08eb5527e065acecf"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app)

  