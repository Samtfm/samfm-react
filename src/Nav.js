import React from 'react';
import './Nav.css';
import {
  Link
} from "react-router-dom";

function Nav() {
  return (
      <nav class='Nav-links'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;
