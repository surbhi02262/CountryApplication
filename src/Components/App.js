import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
