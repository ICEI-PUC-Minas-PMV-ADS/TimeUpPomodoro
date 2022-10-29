// Import the functions you need from the SDKs you need
import firebase  from "firebase/app";
import { initializeApp } from 'firebase/app';

import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
 if(!firebase.getApps.length){
  firebase.initializeApp(firebaseConfig);
 }
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;