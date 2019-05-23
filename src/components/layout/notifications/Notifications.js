import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./notifications.css";
import Notification from "./Notification";
import {
  addNotification,
  removeNotification
} from "../../../actions/notificationActions";

class Notifications extends React.Component {
  render() {
    return (
      <div id="notifications-top-container">
        {this.props.notifications.map((notification, index) => (
          <Notification
            notification={notification}
            removeNotification={this.props.removeNotification}
            key={index}
          />
        ))}
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.array,
  addNotification: PropTypes.func.isRequired,
  removeNotification: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    notifications: state.notification.notifications
  };
};

export default connect(
  mapStateToProps,
  { addNotification, removeNotification }
)(Notifications);
