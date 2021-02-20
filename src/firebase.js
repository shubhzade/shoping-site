// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBWNfJna543lQtQ2RQTc-KEhCse3qY1uBQ",
    authDomain: "shoping-site-58740.firebaseapp.com",
    projectId: "shoping-site-58740",
    storageBucket: "shoping-site-58740.appspot.com",
    messagingSenderId: "603652681767",
    appId: "1:603652681767:web:e114f25177eb372d6a1e02",
    measurementId: "G-SWW22TZSDX"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)

  const db=firebaseapp.firestore();
  const auth =firebase.auth();

  export {db ,auth};