import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAm8yHcLkKX3ZCsBTZm8l9Z3CH003NVl_w",
    authDomain: "timetableapp-db051.firebaseapp.com",
    projectId: "timetableapp-db051",
    storageBucket: "timetableapp-db051.appspot.com",
    messagingSenderId: "688258219443",
    appId: "1:688258219443:web:4e0a79b3af52ca31e7dfc6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase