import React from "react";
import "./MenuButton.css";

class MenuButton extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    console.log("Rendering MenuButton");
    return (
      <button
        id="roundButton"
        onMouseDown={this.props.handleMouseDown}
      ></button>
    );
  }
}

export default MenuButton;
