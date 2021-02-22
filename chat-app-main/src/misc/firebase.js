import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
    apiKey: "AIzaSyCXy9gYzsI2RynmebtmEVoe-mfke32aU1w",
    authDomain: "chat-web-app-59a38.firebaseapp.com",
    databaseURL: "https://chat-web-app-59a38-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-59a38",
    storageBucket: "chat-web-app-59a38.appspot.com",
    messagingSenderId: "102079512712",
    appId: "1:102079512712:web:e31060f8c5450e8b435f3d"
  };


export const fcmVapidKey =
'BNhG6fph3h2vowpgxTHc9qI6n_-t2DNpZdl_lWpl3JqZZhk2MhwcYnXMxwYtrow0QogpxXuH52f8BbwRYJaANak';

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('asia-south1');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

  if (messaging) {
    messaging.onMessage(({ notification }) => {
      const { title, body } = notification;
      Toast.info({ title, description: body, duration: 0 });
    });
  }
  
  if (isLocalhost) {
    functions.useEmulator('localhost', 5001);
  }