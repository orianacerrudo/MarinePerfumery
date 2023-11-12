import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQSqxSpcfpud5dbt98BVJhgTv6dPwt5VE",
  authDomain: "proyecto-final-a0442.firebaseapp.com",
  projectId: "proyecto-final-a0442",
  storageBucket: "proyecto-final-a0442.appspot.com",
  messagingSenderId: "957607797658",
  appId: "1:957607797658:web:05ac7ad652d73e6c045023"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)