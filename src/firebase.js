// jshint esversion:6
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCpyFdYnZ604D9Z0_euqP8xZmJeHHY9s3s",
    authDomain: "facebook-messanger-clone-e1bd7.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-e1bd7-default-rtdb.firebaseio.com",
    projectId: "facebook-messanger-clone-e1bd7",
    storageBucket: "facebook-messanger-clone-e1bd7.appspot.com",
    messagingSenderId: "177952272939",
    appId: "1:177952272939:web:9eb7c6a2414df8fa6eb06e",
    measurementId: "G-Y9QG38ESF9"
});

const db = firebaseApp.firestore();

export default db;