import store from "./store";
import { setFirstAndLastVisible } from "./actions/floaterActions";
import { addNotification } from "./actions/notificationActions";

export const randomNumFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const sendNotification = (notification, color) => {
  //dispatch a notification from outside of a react component
  store.dispatch(addNotification(notification, color));
};

/* Firebase Helper Functions */

export const makeQuery = (sortBy, startAfter, docRef) => {
  //constructs a firebase query depending on what we want to sort by
  //and if we are paginating (where to start after)
  let query = null;
  //Make query according to what we're sorting
  switch (sortBy.toUpperCase()) {
    case "NEWEST":
      query = docRef.orderBy("time", "desc").limit(5);
      break;
    case "OLDEST":
      query = docRef.orderBy("time").limit(5);
      break;
    default:
      return;
  }

  // If we are paging, add startAfter to query
  if (startAfter) {
    query = query.startAfter(startAfter);
  }

  return query;
};

export const getDocData = documents => {
  //calls .data() on each document fetched and pushes it to an Array.
  //returns array with documents as objects
  let docsData = [];
  //get data from each doc and push into newFloaters array
  documents.forEach(doc => {
    docsData.push(doc.data());
  });

  return docsData;
};

export const dispatchFirstAndLast = floaterArray => {
  const firstVisible = floaterArray[0].time;
  const lastVisible = floaterArray[floaterArray.length - 1].time;

  const firstAndLast = {
    firstVisible: firstVisible,
    lastVisible: lastVisible
  };

  store.dispatch(setFirstAndLastVisible(firstAndLast));
};
