/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const functions = require('firebase-functions');
const admin = require("firebase-admin");
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chat-web-app-59a38-default-rtdb.firebaseio.com',
});

// import functions that you want to use
// and then export from index.js
const { sendFcm } = require('./src/fcm');
exports.sendFcm = sendFcm;

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });
