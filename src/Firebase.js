import firebase from "firebase";
import "firebase/firestore";
import config from "./firebaseConfig";

firebase.initializeApp(config);
export const db = firebase.firestore();
const floatersRef = db.collection("floaters");

export const fetchFloaters = async sortBy => {
  let newFloaters = [];
  let fetched = null;

  if (sortBy === "Newest") {
    fetched = await floatersRef
      .orderBy("time", "desc")
      .limit(5)
      .get();
  } else if (sortBy === "Oldest") {
    fetched = await floatersRef
      .orderBy("time")
      .limit(5)
      .get();
  }

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
