import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FBAPIKEY1,
  authDomain: process.env.REACT_APP_FBAUTHDOMAIN1,
  databaseURL: process.env.REACT_APP_FBDATABASEURL1,
  storageBucket: process.env.REACT_APP_FBSTORAGEBUCKET1,
  messagingSenderId: process.env.REACT_APP_FBMESSAGINGSENDERID1
  };

firebase.initializeApp(config);

export default firebase;
