import firebase from "../node_modules/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7TutnqAYKJoIeaE9O1SKPep3eIlt5rz8",
  authDomain: "clone-by-shehzad.firebaseapp.com",
  projectId: "clone-by-shehzad",
  storageBucket: "clone-by-shehzad.appspot.com",
  messagingSenderId: "347376800247",
  appId: "1:347376800247:web:6797c838d7bb0c3d2f1ef2",
  measurementId: "G-EK2V116WWS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default firebase;



