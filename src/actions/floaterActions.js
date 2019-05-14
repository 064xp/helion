import { fetchNewFloaters, addFloater } from "../Firebase";

export const getFloaters = sortBy => async dispatch => {
  let fetched = null;

  if (sortBy === "new") {
    fetched = await fetchNewFloaters();
  } else if (sortBy === "old") {
    //...
  }

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
