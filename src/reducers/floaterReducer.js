const initialState = {
  floaters: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_FLOATERS":
      return {
        ...state,
        floaters: action.payload
      };
    case "POST_FLOATER":
      return {
        ...state
      };
    default:
      return state;
  } //end of switch
}
