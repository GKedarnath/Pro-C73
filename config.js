import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBgQaNVo3n0UVdaZk2TkkMxrA1KUjhfg6E",
  authDomain: "let-s-ride-3f0a2.firebaseapp.com",
  databaseURL: "https://let-s-ride-3f0a2-default-rtdb.firebaseio.com",
  projectId: "let-s-ride-3f0a2",
  storageBucket: "let-s-ride-3f0a2.appspot.com",
  messagingSenderId: "527688188873",
  appId: "1:527688188873:web:9378aa940e539ce91a1e18"
};
// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
