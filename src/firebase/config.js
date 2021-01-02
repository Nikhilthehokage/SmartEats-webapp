import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCVNkLo_VoKDR-XxsXoZ6d1OFrFIf_mhgE",
  authDomain: "tanjiro-7ba93.firebaseapp.com",
  databaseURL: "https://tanjiro-7ba93.firebaseio.com",
  projectId: "tanjiro-7ba93",
  storageBucket: "tanjiro-7ba93.appspot.com",
  messagingSenderId: "563584224918",
  appId: "1:563584224918:web:c1019dcc8b6a07a7b8fcb7",
  measurementId: "G-0S3GL4CSBV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
