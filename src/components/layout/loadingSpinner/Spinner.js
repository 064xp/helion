import React from "react";
import "./spinner.css";

const Spinner = props => {
  return (
    <div className="loading-spinner_container">
      <div className="spinner-cirlce spinner-outer_circle"></div>
      <div className="spinner-cirlce spinner-inner_circle"></div>
    </div>
  );
};

export default Spinner;
