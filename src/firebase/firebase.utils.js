import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAErsAP_xS6ZNBVnUt1uY7QUE7Fq437i2Q",
    authDomain: "crown-clothing-6baa2.firebaseapp.com",
    databaseURL: "https://crown-clothing-6baa2.firebaseio.com",
    projectId: "crown-clothing-6baa2",
    storageBucket: "crown-clothing-6baa2.appspot.com",
    messagingSenderId: "301947669145",
    appId: "1:301947669145:web:53f641f126ff72b1d78608",
    measurementId: "G-69E498SH06"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
