import React from "react";
import PropTypes from "prop-types";

const SelectedMessage = props => {
  const { message, closePanel } = props;
  return (
    <div className="control-panel_selected-message">
      <div
        className="btn-circle-close control-panel_selected-message_btn-close"
        onClick={closePanel}
      >
        <p>x</p>
      </div>
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
