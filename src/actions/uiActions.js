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

export const setCurrentPage = currentPage => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: currentPage
  };
};
