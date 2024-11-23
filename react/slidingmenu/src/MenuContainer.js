import React from "react";

class MenuContainer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>Click on a menu item to see the content</p>
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuContainer;
