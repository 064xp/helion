export const setMobile = () => {
  return {
    type: "SET_MOBILE"
  };
};

export const setSortBy = filter => {
  return {
    type: "SORT_BY",
    payload: filter
  };
};
