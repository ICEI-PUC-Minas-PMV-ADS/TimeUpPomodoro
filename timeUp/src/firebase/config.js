
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA7yFQpI5NjBMirkBRo8zYvOPrfXax4_14",
  authDomain: "timeupsoluctions.firebaseapp.com",
  databaseURL: "https://timeupsoluctions-default-rtdb.firebaseio.com",
  projectId: "timeupsoluctions",
  storageBucket: "timeupsoluctions.appspot.com",
  messagingSenderId: "557105788897",
  appId: "1:557105788897:web:82e24ab98b3feb8af384a0",
  measurementId: "G-D0DYPT3DQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);