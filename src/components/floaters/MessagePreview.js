import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Preview = props => {
  return (
    <div
      style={{ ...props.style }}
      className={classNames("floater_message-preview", {
        "preview-show": props.show
      })}
    >
      <h4>{props.message.author}</h4>
      <p>
        {props.message.content.slice(0, 15)}
        {props.message.content.length >= 16 ? "..." : null}
      </p>
      <p className="floater_message-preview-date">{props.message.date}</p>
      {props.isMobile ? (
        <p className="floater_message-preview-mobile-instruction">
          Tap again to view full message
        </p>
      ) : null}
    </div>
  );
};

Preview.propTypes = {
  message: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  style: PropTypes.object
};

export default Preview;
