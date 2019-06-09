import React from "react";
import PropTypes from "prop-types";
import CircularButton from "../../misc/circularButton/CircularButton";

const SelectedMessage = props => {
  const { message, closePanel } = props;
  return (
    <div className="control-panel_selected-message">
      <CircularButton onClick={closePanel} />
      {message ? (
        <div>
          <h2>{message.author}</h2>
          <p>{message.content}</p>
        </div>
      ) : (
        <div className="control-panel_no-message"> No message selected...</div>
      )}
    </div>
  );
};

SelectedMessage.propTypes = {
  message: PropTypes.object
};

export default SelectedMessage;
