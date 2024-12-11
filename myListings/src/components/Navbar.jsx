import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#readytorequest">14 Ready To Request Listings</a>
          <p style={{"color":"grey"}}>Explore Listings</p>
        </li>
        <li className="navbar-item"><a href="#dates">Dates Available</a></li>
        <li className="navbar-item"><a href="#primary-agent">Primary Agent</a></li>
        <li className="navbar-item"><a href="#partner-agent">Partner Agent</a></li>
        <li className="navbar-item"><a href="#generate-kit">Generate Kit</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
