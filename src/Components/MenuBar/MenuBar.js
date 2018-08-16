import React, { Component } from "react";

class MenuBar extends Component {
  render() {
    const { menuItems } = this.props;
    return (
      <ul className="menu-item-container">
        {menuItems.map((menuItem, index) => (
          <li key={index}>{menuItem.title}</li>
        ))}
      </ul>
    );
  }
}

export default MenuBar;
