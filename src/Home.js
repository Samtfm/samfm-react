import React from 'react';
import './Home.css';
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <section className="Home">
      <section className="Home-heading-block">
        <h1>Hi! You've reached <span class='accent'>SamFM</span></h1>
        <p>Artist, Software Developer, Friend</p>
      </section>
      <section>


        <Link to="/gallery">
          <div className="Home-flag">
            <img src={'https://placekitten.com/650/450'}/>
            <h1>PAINTINGS</h1>
          </div>
        </Link>
        <Link to="/projects">
          <div className="Home-flag">
            <img src={'https://placekitten.com/800/500'}/>
            <h1>GAMES</h1>
          </div>
        </Link>
      </section>
      <a
        className="Home-contact-button"
        href="mailto:sfmemail@gmail.com"
      >
        contact me!
      </a>
    </section>
  );
}

export default Home;
