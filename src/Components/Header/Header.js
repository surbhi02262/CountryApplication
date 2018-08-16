import React, { Component } from "react";
import { menuBar } from "./../Constant";
import MenuBar from "./../MenuBar/MenuBar";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <MenuBar menuItems={menuBar} />
      </div>
    );
  }
}

export default Header;
