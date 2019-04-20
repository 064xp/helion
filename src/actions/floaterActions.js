import { fetchFloaters, addFloater } from "../Firebase";

export const getFloaters = () => async dispatch => {
  const fetched = await fetchFloaters();
  dispatch({
    type: "GET_FLOATERS",
    payload: fetched
  });
};

export const postFloater = newFloater => async dispatch => {
  addFloater(newFloater);

  //fetch floaters again
  const fetched = await fetchFloaters();

  //placeholder until more functionality is needed
  dispatch({
    type: "POST_FLOATER",
    payload: newFloater
  });

  //update state with new fetched floaters
  dispatch({
    type: "GET_FLOATERS",
    payload: fetched
  });
};

export const selectFloater = floater => {
  return {
    type: "SELECT_FLOATER",
    payload: floater
  };
};
