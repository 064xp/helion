import React from "react";
import { useSelector } from "react-redux";
import { launchPositions } from "./positions";
import "./launchContainer.css";
import Capsule from "../../../img/floaters/capsule_fire.svg";

const FloaterLaunchContainer = props => {
  const notifications = useSelector(state => state.notification.notifications);
  return (
    <React.Fragment>
      {notifications.map((notification, index) => {
        if (notification.type === "MESSAGE_POST_SUCESS") {
          return (
            <div
              className="launch-capsule-container"
              key={index}
              style={launchPositions[index]}
            >
              <img
                className="launch-capsule vibrate-1"
                src={Capsule}
                alt="capsule"
              />
            </div>
          );
        } else {
          return null;
        }
      })}
    </React.Fragment>
  );
};

export default FloaterLaunchContainer;
