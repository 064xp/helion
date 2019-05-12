import firebase from "firebase";
import "firebase/firestore";
import config from "./firebaseConfig";
import { randomNumFromInterval, getUniqueRandomNums } from "./helperFunctions";

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

export const fetchRandomFloaters = async () => {
  let fetchedFloaters = [];
  const ammountOfFloaters = 5; //ammount of messsages we want to fetch
  let fetched = null;

  //get an array of unique random numbers from 0 to 2,147,483,647 (max 32 bit int, kind of arbitrary)
  const random = randomNumFromInterval(0, 2147483647);
  fetched = await floatersRef
    .where("random", "<=", random)
    .orderBy("random")
    .limit(ammountOfFloaters)
    .get();

  fetched.forEach(fetch => {
    fetchedFloaters.push(fetch.data());
    console.log(fetch.data());
  });

  return fetchedFloaters;
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
