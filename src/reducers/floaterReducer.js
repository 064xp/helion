const initialState = {
  floaters: [],
  selectedFloater: null,
  firstVisible: null,
  lastVisible: null
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
    case "SET_FIRST_AND_LAST_VISIBLE":
      return {
        ...state,
        firstVisible: action.payload.firstVisible,
        lastVisible: action.payload.lastVisible
      };
    default:
      return state;
  } //end of switch
}
