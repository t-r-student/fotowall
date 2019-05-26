import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyASyjzUovVn1rIOWEl0awyn_0KJaXFzhQ4",
    authDomain: "photowall-5a91d.firebaseapp.com",
    databaseURL: "https://photowall-5a91d.firebaseio.com",
    projectId: "photowall-5a91d",
    storageBucket: "photowall-5a91d.appspot.com",
    messagingSenderId: "575446363749",
    appId: "1:575446363749:web:48908719c2eda847"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const database = firebase.database();

  export {database}