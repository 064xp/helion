// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
//
// admin.initializeApp({
//   credential: admin.credential.applicationDefault()
// });
//
// var db = admin.firestore();
//
// //on create
// exports.onMessageSubmit = functions.firestore
//   .document("floaters/{floaterId}")
//   .onCreate((snap, context) => {
//     const newMessage = snap.data();
//     const docRef = admin
//       .firestore()
//       .doc(`/floaters/${context.params.floaterId}`);
//
//     console.log(context.params.floaterId);
//
//     return docRef.set({ time: Date.now(), date: getDate() }, { merge: true });
//   });
//
// //Return date in format Apr 02 2019
// const getDate = () => {
//   const date = new Date();
//   const output = date.toDateString().slice(4);
//
//   return output;
// };
