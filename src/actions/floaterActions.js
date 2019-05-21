import { fetchFloaters, addFloater } from "../Firebase";

export const getFloaters = sortBy => async dispatch => {
  let fetched = await fetchFloaters(sortBy);

  dispatch({
    type: "GET_FLOATERS",
    payload: fetched
  });
};

export const postFloater = newFloater => async dispatch => {
  addFloater(newFloater);

  //placeholder until more functionality is needed
  dispatch({
    type: "POST_FLOATER",
    payload: newFloater
  });
};

export const selectFloater = floater => {
  return {
    type: "SELECT_FLOATER",
    payload: floater
  };
};
