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
          <h2 className="control-panel_selected-message_message-author">
            {message.author}
          </h2>
          <p className="control-panel_selected-message_message-date">
            {message.date}
          </p>
          <p className="control-panel_selected-message_message-content">
            {message.content}
          </p>
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
