import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <nav className="z-depth-0">
        <div className="nav-wrapper">
          <Link
            to="/"
            className="left brand-logo"
            style={{ left: "0px", color: "black" }}
          >
            <div>
              <span>Yo - The URL Shortener  </span>
              <img src="https://i.imgur.com/r8aUQau.png" height="32" width="32" alt="yo-logo"/>
            </div>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
