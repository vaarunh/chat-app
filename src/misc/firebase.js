
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';

const config = {
    apiKey: "AIzaSyCXy9gYzsI2RynmebtmEVoe-mfke32aU1w",
    authDomain: "chat-web-app-59a38.firebaseapp.com",
    databaseURL: "https://chat-web-app-59a38-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-59a38",
    storageBucket: "chat-web-app-59a38.appspot.com",
    messagingSenderId: "102079512712",
    appId: "1:102079512712:web:e31060f8c5450e8b435f3d"
  };

  const app = firebase.initializeApp(config);
  export const auth = app.auth();
  export const database = app.database();
  export const storage = app.storage();
  export const functions = app.functions('europe-west3');
  

