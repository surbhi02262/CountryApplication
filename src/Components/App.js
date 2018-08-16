import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import CountryDetails from "./CountryInfo/CountryDetails";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/country/:countryCode"
            component={CountryDetails}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
