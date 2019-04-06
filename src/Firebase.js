import firebase from "firebase";
import "firebase/firestore";
import config from "./firebaseConfig";

firebase.initializeApp(config);
export const db = firebase.firestore();
let floatersRef = db.collection("floaters");

//firebase call functions
export const fetchFloaters = async () => {
  let newFloaters = [];
  const fetched = await floatersRef.get();

  fetched.forEach(doc => {
    //call the data() function on the documents returned to retrieve the data
    newFloaters.push(doc.data());
  });

  return newFloaters;
};

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
