import { fetchFloaters, addFloater } from "../Firebase";
import { dispatchFirstAndLast } from "../helperFunctions";

export const getFloaters = (
  sortBy,
  startAfter,
  reverseArrayBeforeDispatch
) => async dispatch => {
  let fetched = await fetchFloaters(sortBy, startAfter);

  if (reverseArrayBeforeDispatch) {
    fetched = fetched.reverse();
  }

  //set first and last visible in the store for use in pagination
  try {
    dispatchFirstAndLast(fetched);
  } catch {
    //if it fails, could be network error, or no more messages in the DB
    //return and prevent from dispatching nothing
    return;
  }

  dispatch({
    type: "GET_FLOATERS",
    payload: fetched
  });
};

export const postFloater = newFloater => async dispatch => {
  addFloater(newFloater);

  //placeholder until more functionality is needed
};

export const selectFloater = floater => {
  return {
    type: "SELECT_FLOATER",
    payload: floater
  };
};

export const setFirstAndLastVisible = firstAndLast => {
  return {
    type: "SET_FIRST_AND_LAST_VISIBLE",
    payload: firstAndLast
  };
};
