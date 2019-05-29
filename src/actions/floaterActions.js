import { fetchFloaters, addFloater } from "../Firebase";

export const getFloaters = (
  sortBy,
  startAfter,
  reverse = false
) => async dispatch => {
  let fetched = await fetchFloaters(sortBy, startAfter);

  if (reverse) {
    fetched = fetched.reverse();
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
