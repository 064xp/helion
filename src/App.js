import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import Notifications from "./components/layout/notifications/Notifications.js";
import "./App.css";
import InputField from "./components/layout/InputField";
import FloaterDisplay from "./components/layout/FloaterDisplay";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Notifications />
          <FloaterDisplay />
          <InputField />
        </div>
      </Provider>
    );
  }
}

export default App;
