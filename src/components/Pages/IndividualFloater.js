import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import { getFloaterById } from "../../Firebase";
import { convertUnixToDate } from "../../helperFunctions";
import Background from "../layout/background/Background";
import LoadingSpinner from "../layout/loadingSpinner/Spinner";
import IndividualCapsule from "../floaters/individualCapsule/IndividualCapsule";

const IndividualFloater = props => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  getFloaterById(id).then(fetched => {
    let fetchedWithDate = {
      ...fetched,
      date: convertUnixToDate(fetched.time).toDateString()
    };
    dispatch({ type: "SELECT_FLOATER", payload: fetchedWithDate });
  });

  const selectedFloater = useSelector(
    state => state.floater.selectedFloater,
    shallowEqual
  );

  return (
    <div>
      <Background />
      <Link to="/">Go back</Link>
      {selectedFloater ? (
        <IndividualCapsule message={selectedFloater} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default IndividualFloater;
