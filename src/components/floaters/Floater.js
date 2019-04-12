import React from "react";
import PropTypes from "prop-types";
import { capsule } from "../../img/floaters/capsule_fire";
import "./floater.css";

class Floater extends React.Component {
  componentDidMount() {
    const floater = document.querySelector(`#capsule-${this.props.index}`);

    //opacity is set to 0 at the start, when the animation starts
    //(the delay is over), set it back to 1
    floater.addEventListener("animationstart", () => {
      floater.style.opacity = "1";
    });

    //animation end listener to stop the enter animation
    //and start the bobbing animation
    floater.addEventListener("animationend", () => {
      const fire = floater.childNodes[1].childNodes[0].childNodes[0];
      floater.classList.remove("capsule-enter");
      floater.classList.add("bobbing");
      fire.style.opacity = "0";
    });
  }

  render() {
    const { index, position } = this.props;
    return (
      <div>
        <svg
          className={`capsule-enter floater-img delay-${index}`}
          style={{ ...position }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 819.2 799.3"
          dangerouslySetInnerHTML={{ __html: capsule }}
          id={`capsule-${index}`}
        />
      </div>
    );
  }
}

export default Floater;
