import firebase from "firebase";
import "firebase/firestore";
import config from "./firebaseConfig";
import { getRandomUniqueNums } from "./helperFunctions";

firebase.initializeApp(config);
export const db = firebase.firestore();
const floatersRef = db.collection("floaters");
const counterRef = db.collection("stats");

//fetch floaters sorted by newest
export const fetchNewFloaters = async () => {
  let newFloaters = [];
  const fetched = await floatersRef
    .orderBy("time")
    .limit(5)
    .get();

  fetched.forEach(doc => {
    //call the data() function on the documents returned to retrieve the data
    newFloaters.push(doc.data());
  });

  fetchRandomFloaters();

  return newFloaters;
};

//fetch random floaters
export const fetchRandomFloaters = async () => {
  let counter = await counterRef.doc("counter").get();
  counter = counter.data().messageCount;
  // const ammountOfFloaters = 5;
};

//post a new floater to the DB
export const addFloater = newFloater => {
  floatersRef
    .add(newFloater)
    .then(() => {
      alert("message sent!");
    })
    .catch(err => {
      alert("Something ocurred while sending message, please try again later");
    });
};
