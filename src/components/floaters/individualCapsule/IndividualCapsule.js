import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const IndividualCapsule = props => {
  const { author, content, date } = props.message;

  return (
    <div>
      <h3>Author: {author}</h3>
      <h3>Message: {content}</h3>
      <h3>Date: {date}</h3>
    </div>
  );
};

IndividualCapsule.propTypes = {
  message: PropTypes.object.isRequired
};

export default IndividualCapsule;
