/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const functions = require('firebase-functions');
const admin = require("firebase-admin");
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chat-web-app-59a38-default-rtdb.firebaseio.com',
});

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });
