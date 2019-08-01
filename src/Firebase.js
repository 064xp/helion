import firebase from "firebase";
import "firebase/firestore";
import config from "./firebaseConfig";
import { makeQuery, getDocData, sendNotification } from "./helperFunctions";

firebase.initializeApp(config);
export const db = firebase.firestore();
const floatersRef = db.collection("floaters");

//fetch new messages
export const fetchFloaters = async (sortBy, startAfter) => {
  let newFloaters = [];
  let query = null;
  let fetched = null;

  //construct query from parameters
  query = makeQuery(sortBy, startAfter, floatersRef);
  //fetch from db
  fetched = await query.get();

  //get the data from fetched documents (array)
  newFloaters = getDocData(fetched);

  //if there are no more floaters in the db, return null
  if (newFloaters.length === 0) {
    return null;
  }
  //set first and last visible in the store for use in pagination
  // dispatchFirstAndLast(fetched);

  //return newFloater Array
  return newFloaters;
};

//post a new floater to the DB
export const addFloater = newFloater => {
  floatersRef
    .add(newFloater)
    .then(() => {
      sendNotification("Message Sent!", "sucess", "MESSAGE_POST_SUCESS");
    })
    .catch(err => {
      sendNotification(
        "An error ocurred while sending message, please try again later",
        "warning"
      );
    });
};
