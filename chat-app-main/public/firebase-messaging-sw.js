/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: "AIzaSyCXy9gYzsI2RynmebtmEVoe-mfke32aU1w",
    authDomain: "chat-web-app-59a38.firebaseapp.com",
    databaseURL: "https://chat-web-app-59a38-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-59a38",
    storageBucket: "chat-web-app-59a38.appspot.com",
    messagingSenderId: "102079512712",
    appId: "1:102079512712:web:e31060f8c5450e8b435f3d"
});

firebase.messaging();
