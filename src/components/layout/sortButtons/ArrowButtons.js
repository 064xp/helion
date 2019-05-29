import React from "react";
import PropTypes from "prop-types";
import "./arrowButtons.css";
import ArrowSvg from "../../../img/icons/play-solid.svg";

const ArrowButtons = props => {
  return (
    <div className="arrow-buttons_container">
      <button
        className="arrow-buttons_button"
        title="Previous Page"
        onClick={props.onArrowClick.bind(this, "PREVIOUS")}
      >
        <img src={ArrowSvg} alt="Previous Page" />
      </button>
      <span className="arrow-buttons_current-page">{props.currentPage}</span>
      <button
        className="arrow-buttons_button"
        title="Next Page"
        onClick={props.onArrowClick.bind(this, "NEXT")}
      >
        <img src={ArrowSvg} alt="Next Page" />
      </button>
    </div>
  );
};

ArrowButtons.propTypes = {
  onArrowClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default ArrowButtons;
