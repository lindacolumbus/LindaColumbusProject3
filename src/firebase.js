import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDQPp6NijfPbbXS37UaKztKVyuMHA2N-_w",
    authDomain: "taste-maker-app.firebaseapp.com",
    databaseURL: "https://taste-maker-app-default-rtdb.firebaseio.com",
    projectId: "taste-maker-app",
    storageBucket: "taste-maker-app.appspot.com",
    messagingSenderId: "431516107121",
    appId: "1:431516107121:web:e915ee2814e17dedc5f6d0"
};
firebase.initializeApp(config);

export default firebase;
