import React from "react";
import PropTypes from "prop-types";
import "./cButton.css";

const CircularButton = props => {
  return (
    <button
      className={`btn-circle-close ${props.className}`}
      onClick={props.onClick}
    />
  );
};

CircularButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default CircularButton;
