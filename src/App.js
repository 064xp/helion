import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import InputField from "./components/layout/InputField";
import FloaterDisplay from "./components/layout/FloaterDisplay";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FloaterDisplay />
          <InputField />
        </div>
      </Provider>
    );
  }
}

export default App;
