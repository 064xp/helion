import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import Background from "./components/layout/background/Background";
import Notifications from "./components/layout/notifications/Notifications.js";
import "./App.css";
import InputField from "./components/layout/inputField/InputField";
import FloaterDisplay from "./components/layout/FloaterDisplay";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Background />
          <Notifications />
          <FloaterDisplay />
          <InputField />
        </div>
      </Provider>
    );
  }
}

export default App;
