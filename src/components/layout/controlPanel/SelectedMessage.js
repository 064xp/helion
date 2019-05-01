import React from "react";
import PropTypes from "prop-types";

const SelectedMessage = props => {
  const { message } = props;
  return (
    <div className="control-panel_selected-message">
      {message ? (
        <div>
          <h2>{message.author}</h2>
          <p>{message.content}</p>
        </div>
      ) : <div className="control-panel_no-message"> No message selected...</div>}
    </div>
  );
};

SelectedMessage.propTypes = {
  message: PropTypes.object
};

export default SelectedMessage;
