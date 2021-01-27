import firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_-ljlOB8qpxNNiltQ7miZ3Cg4hlv-RW8",
    authDomain: "udemy-ninja-smoothies-ff27e.firebaseapp.com",
    projectId: "udemy-ninja-smoothies-ff27e",
    storageBucket: "udemy-ninja-smoothies-ff27e.appspot.com",
    messagingSenderId: "180817198076",
    appId: "1:180817198076:web:8e9ac63a2b8b25c14ad079",
    measurementId: "G-B36TX57DYY"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timeStampInSnapshots: true })
firebase.analytics();

export default firebaseApp.firestore();