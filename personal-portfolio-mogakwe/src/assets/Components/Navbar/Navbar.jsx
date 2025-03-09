import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Kevin</h2>
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Project</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="button">
        <button>Hire Me</button>
      </div>
    </div>
  );
}

export default Navbar;
