import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { capsule } from "../../../img/floaters/capsule_fire";
import "./style.css";

const handleAnimEnd = e => {
  const fire = e.target.childNodes[0].childNodes[1].childNodes[0].childNodes[0];
  e.target.classList.remove("capsule-enter");
  e.target.classList.add("bobbing");
  e.target.childNodes[1].classList.add("width-fade-in");
  fire.style.opacity = 0;
};

const IndividualCapsule = props => {
  const { author, content, date } = props.message;

  useEffect(() => {
    const capsule = document.querySelector(".individual-capsule");
    capsule.addEventListener("animationend", handleAnimEnd);

    return () => {
      capsule.removeEventListener("animationend", handleAnimEnd);
    };
  });

  return (
    <div className="individual-capsule_container">
      <div className="individual-capsule capsule-enter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 819.2 799.3"
          dangerouslySetInnerHTML={{ __html: capsule }}
        />
        <div className="individual-capsule_message">
          <h4 className="individual-capsule_message-author">{author}</h4>
          <p className="individual-capsule_message-content">{content}</p>
          <p className="individual-capsule_message-date">{date}</p>
        </div>
      </div>
    </div>
  );
};

IndividualCapsule.propTypes = {
  message: PropTypes.object.isRequired
};

export default IndividualCapsule;
