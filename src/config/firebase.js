import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCgGZFpV5fFo1noaYC-GId34h69i6HzAFk",
    authDomain: "olmc-c6c2a.firebaseapp.com",
    databaseURL: "https://olmc-c6c2a.firebaseio.com",
    projectId: "olmc-c6c2a",
    storageBucket: "olmc-c6c2a.appspot.com",
    messagingSenderId: "623720846397"
};
var fire = firebase.initializeApp(config);
export default fire;