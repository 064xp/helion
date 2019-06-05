const initialState = {
  isMobile: false,
  sortBy: "Newest"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_MOBILE":
      return {
        ...state,
        isMobile: true
      };
    case "SORT_BY":
      return {
        ...state,
        sortBy: action.payload
      };
    default:
      return state;
  }
}
