import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCTNNyETsmCfpuOT19zh3bbNfaHP5wfBu4",
  authDomain: "fire-i18n-editor.firebaseapp.com",
  projectId: "fire-i18n-editor",
  storageBucket: "fire-i18n-editor.appspot.com",
  messagingSenderId: "527562845190",
  appId: "1:527562845190:web:956b1575813844e0cde787",
  measurementId: "G-QS2VTRB7ZC",
};

const fireApp = firebase.initializeApp(config);
const fireAuth = fireApp.auth();
const fireStore = fireApp.firestore();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

if (window.location.hostname === "localhost") {
  fireAuth.useEmulator("http://localhost:9099");
  fireStore.useEmulator("localhost", 8080);
}

export { firebase, fireApp, fireAuth, fireStore, serverTimestamp };
