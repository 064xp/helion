import React from "react";
import PropTypes from "prop-types";

const SelectedMessage = props => {
  const { message } = props;
  return (
    <div>
      {message ? (
        <div className="control-panel_selected-message">
          <h2>{message.author}</h2>
          <p>{message.content}</p>
        </div>
      ) : null}
    </div>
  );
};

SelectedMessage.propTypes = {
  message: PropTypes.object
};

export default SelectedMessage;
