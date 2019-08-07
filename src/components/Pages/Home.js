import React, { Component } from "react";
import Background from "../layout/background/Background";
import Notifications from "../layout/notifications/Notifications.js";
import InputField from "../layout/inputField/InputField";
import FloaterDisplay from "..//layout/FloaterDisplay";
import ControlPanel from "../layout/controlPanel/ControlPanel";
import SortButtons from "../layout/sortButtons/SortButtons";
import FloaterLaunchContainer from "../floaters/FloaterLaunchContainer/FloaterLaunchContainer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <Notifications />
        <SortButtons />
        <FloaterLaunchContainer />
        <FloaterDisplay />
        <ControlPanel />
        <InputField />
      </React.Fragment>
    );
  }
}

export default Home;
