import React, { Component } from "react";

import SearchField from "./SearchField";
import logo from "../img/Logo.png";
import ProfilePanel from "./ProfilePanel";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand">
        <div className="container">
          <SearchField />
          <div className="col-6 text-center">
            <img src={logo} alt="TechKids Logo" />
          </div>
          <ProfilePanel />
        </div>
      </div>
    );
  }
}

export default NavBar;
