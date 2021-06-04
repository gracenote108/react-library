import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <NavLink to="/" className="display-6 nav-font">
              Nirav's Library
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
