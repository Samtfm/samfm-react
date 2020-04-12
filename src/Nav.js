import React from 'react';
import './Nav.css';
import {
  Link
} from "react-router-dom";

function Nav() {
  return (
      <nav>
        <ul class='Nav-links'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;
