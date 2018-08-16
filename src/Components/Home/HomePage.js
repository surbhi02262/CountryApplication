import React, { Component } from "react";
import Header from "./../Header/Header";
import CountryList from "./../CountryInfo/CountryList";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <CountryList />
      </div>
    );
  }
}

export default HomePage;
