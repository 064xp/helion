const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

var db = admin.firestore();

// //on create
// exports.onMessageSubmit = functions.firestore
//   .document("floaters/{floaterId}")
//   .onCreate((snap, context) => {
//     //sanitize
//     //add current time and date from server
//   });
