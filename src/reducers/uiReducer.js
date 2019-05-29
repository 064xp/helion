const initialState = {
  isMobile: false,
  sortBy: "Newest",
  currentPage: 1
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
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
}
