export const setIsMobile = isMobile => {
  return {
    type: "SET_IS_MOBILE",
    payload: isMobile
  };
};

export const setSortBy = filter => {
  return {
    type: "SORT_BY",
    payload: filter
  };
};
