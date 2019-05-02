export const setMobile = () => {
  return {
    type: "SET_MOBILE"
  };
};

export const sortBy = filter => {
  return {
    type: "SORT_BY",
    payload: filter
  };
};
