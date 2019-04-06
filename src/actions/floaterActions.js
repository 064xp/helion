import { db } from "../Firebase";

let floatersRef = db.collection("floaters");

export const getFloaters = () => async dispatch => {
  //get a reference to all of  the documents in the 'floaters' collection
  let newFloaters = [];

  floatersRef
    .get()
    .then(querySnapshot => {
      //for each, push it to the floaters array in the state
      querySnapshot.forEach(doc => {
        //call the data() function on the documents returned to retrieve the data
        newFloaters.push(doc.data());
      });
    })
    .then(() => {
      //after putting the floaters into the array, dispatch them
      dispatch({
        type: "GET_FLOATERS",
        payload: newFloaters
      });
    });
};

export const postFloater = newFloater => dispatch => {
  floatersRef
    .add(newFloater)
    .then(docRef => {
      alert("message sent!");
    })
    .catch(err => {
      alert("Something ocurred while sending message, please try again later");
    });

  //placeholder until more functionality is needed
  dispatch({
    type: "POST_FLOATER",
    payload: newFloater
  });
};
