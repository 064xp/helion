import firebase from "firebase";
import "firebase/firestore";
import config from "./firebaseConfig";
import { randomNumFromInterval } from "./helperFunctions";

firebase.initializeApp(config);
export const db = firebase.firestore();
const floatersRef = db.collection("floaters");

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

  return newFloaters;
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
