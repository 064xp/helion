import React from "react";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div>
      <h1>Sorry we couldn't find that...</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NotFound;
