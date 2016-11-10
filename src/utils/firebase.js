import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCJ9LFNjhqZC7862W_w4b-o4RVyTjNk7j8",
    authDomain: "growl-46ecf.firebaseapp.com",
    databaseURL: "https://growl-46ecf.firebaseio.com",
    storageBucket: "growl-46ecf.appspot.com",
    messagingSenderId: "296409813010"
  };

firebase.initializeApp(config);

export default firebase;
