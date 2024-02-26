import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdBMXNzguKk7jASUt8a2DtIclAfa28OCc",
    authDomain: "olx-clone-7515f.firebaseapp.com",
    projectId: "olx-clone-7515f",
    storageBucket: "olx-clone-7515f.appspot.com",
    messagingSenderId: "587117805848",
    appId: "1:587117805848:web:d3cf3063db5613ed545e6d",
    measurementId: "G-B6804N06P0"
};

export default firebase.initializeApp(firebaseConfig)