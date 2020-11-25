import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBwquSMLNEMADHm0usHgJSAIwNtQ4a11R0",
  authDomain: "instagram-clone-87d3b.firebaseapp.com",
  databaseURL: "https://instagram-clone-87d3b.firebaseio.com",
  projectId: "instagram-clone-87d3b",
  storageBucket: "instagram-clone-87d3b.appspot.com",
  messagingSenderId: "617317029125",
  appId: "1:617317029125:web:50da4d8a7606094b60936c",
  measurementId: "G-MW9E9EG2BY",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
