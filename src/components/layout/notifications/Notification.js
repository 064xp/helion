import React from "react";
import PropTypes from "prop-types";

class Notification extends React.Component {
  componentDidMount() {
    const { removeNotification, notification } = this.props;
    const currentNotification = document.querySelector(`#${notification.id}`);

    setTimeout(() => {
      //after a certain time, animate a slide out
      currentNotification.classList.add("hide-notification");
      //allow some time for the animation to finish
      //then remove the notification
      setTimeout(() => {
        removeNotification(notification.id);
      }, 400);
    }, 2000);
  }

  render() {
    const { text, color, id } = this.props.notification;
    return (
      <div id={id} className={`notification-text notification-color-${color}`}>
        <p>{text}</p>
      </div>
    );
  }
}

Notification.propTypes = {
  notification: PropTypes.object,
  removeNotification: PropTypes.func.isRequired
};

export default Notification;
