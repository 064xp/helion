const initialState = {
  floaters: [],
  selectedFloater: null
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
    case "SELECT_FLOATER":
      return {
        ...state,
        selectedFloater: action.payload
      };
    default:
      return state;
  } //end of switch
}
