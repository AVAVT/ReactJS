import React, { Component } from "react";

import SearchField from "./SearchField";
import logo from "../img/Logo.png";
import ProfilePanel from "./ProfilePanel";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand">
        <div className="container">
          <SearchField onSearchChanged={this.props.onSearchChanged} />
          <div className="col-6 text-center">
            <Link to="/">
              <img src={logo} alt="TechKids Logo" />
            </Link>
          </div>
          <ProfilePanel
            username={this.props.username}
            onLogin={this.props.onLogin}
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
