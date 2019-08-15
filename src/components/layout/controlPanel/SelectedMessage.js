import React from "react";
import PropTypes from "prop-types";
import CircularButton from "../../misc/circularButton/CircularButton";

const SelectedMessage = props => {
  const { message, closePanel } = props;
  return (
    <div className="control-panel_selected-message">
      <CircularButton onClick={closePanel} />
      {message ? (
        <React.Fragment>
          <h2 className="control-panel_selected-message_message-author">
            {message.author}
          </h2>
          <p className="control-panel_selected-message_message-date">
            {message.date}
          </p>
          <p className="control-panel_selected-message_message-content">
            {message.content}
          </p>
        </React.Fragment>
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
