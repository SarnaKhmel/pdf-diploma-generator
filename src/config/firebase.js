import firebase from "firebase/app";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAjlHrkWhW3LeIGGSDkasmoOeBhxXtms7U",
  authDomain: "pdf-diploma-generator.firebaseapp.com",
  databaseURL: "https://pdf-diploma-generator.firebaseio.com",
  projectId: "pdf-diploma-generator",
  storageBucket: "pdf-diploma-generator.appspot.com",
  messagingSenderId: "22936894029"
};

firebase.initializeApp(config);