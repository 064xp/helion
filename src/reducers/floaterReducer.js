const initialState = {
  floaters: [],
  selectedFloater: null,
  counter: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_FLOATERS":
      return {
        ...state,
        floaters: action.payload
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
