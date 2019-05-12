const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

var db = admin.firestore();

var counterRef = db.collection("stats");

//on create
exports.onMessageSubmit = functions.firestore
  .document("floaters/{floaterId}")
  .onCreate((snap, context) => {
    //sanitize
    //add current time and date from server
    //increase counter
    increaseCounter();
  });

//on delete
exports.onMessageDelete = functions.firestore
  .document("floaters/{floaterId}")
  .onDelete((snap, context) => {
    decreaseCounter();
  });

//Increases the counter for number of messages everytime a new message is sent
const increaseCounter = () => {
  //Reference to the 'counter' document
  const counterDoc = counterRef.doc("counter");

  counterDoc.get().then(val => {
    //get the current ammount of messages
    const messageCount = val.data().messageCount;

    //update it to itself with one added
    counterDoc.set({
      messageCount: messageCount + 1
    });
  });
};

const decreaseCounter = () => {
  //Reference to the 'counter' document
  const counterDoc = counterRef.doc("counter");

  counterDoc.get().then(val => {
    //get the current ammount of messages
    const messageCount = val.data().messageCount;

    //update it to itself with one subtracted
    counterDoc.set({
      messageCount: messageCount - 1
    });
  });
};
