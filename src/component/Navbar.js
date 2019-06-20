import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img
          src="https://cdn.pixabay.com/photo/2016/12/13/14/56/stars-1904262_960_720.png"
          className="App-logo "
        />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Tours
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
