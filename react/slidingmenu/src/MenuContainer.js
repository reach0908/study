import React from "react";

import MenuButton from "./MenuButton";
import Menu from "./Menu";

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  render() {
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
      </div>
    );
  }
}

export default MenuContainer;
