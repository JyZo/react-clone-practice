// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: 'AIzaSyAycfmlGJm4hJXj4ZjKogrTQxLBQ8yFbDo',
  authDomain: 'clone-85b97.firebaseapp.com',
  projectId: 'clone-85b97',
  storageBucket: 'clone-85b97.appspot.com',
  messagingSenderId: '577878797488',
  appId: '1:577878797488:web:1b4114a2e192e553925f75',
  measurementId: 'G-PVCT5F1GW6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };
