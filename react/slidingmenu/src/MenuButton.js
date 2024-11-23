import React from "react";
import "./MenuButton.css";

class MenuButton extends React.Component {
  render() {
    return (
      <button id="roundButton" onMouseDown={this.props.handleMouseDown}>
        Menu
      </button>
    );
  }
}

export default MenuButton;
