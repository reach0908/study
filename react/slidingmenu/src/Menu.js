import React from "react";
import "./Menu.css";

class Menu extends React.Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div
        id="flyoutmenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
        <h2>
          <a href="/" />
          Home
        </h2>
        <h2>
          <a href="/" />
          Profile
        </h2>
        <h2>
          <a href="/" />
          Contact
        </h2>
        <h2>
          <a href="/" />
          About
        </h2>
      </div>
    );
  }
}

export default Menu;
