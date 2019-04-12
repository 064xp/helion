import React from "react";
import PropTypes from "prop-types";
import capsule from "../../img/floaters/capsule_fire.svg";
import "./floater.css";

class Floater extends React.Component {
  render() {
    return (
      <div>
        <img className="floater-img" src={capsule} alt="A Floater" />
        <h1>Floater</h1>
      </div>
    );
  }
}

export default Floater;
