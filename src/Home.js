import React from 'react';
import './Home.css';
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <section className="Home">
      <section className="Home-heading-block">
        <h1>Hi! You've reached <span class='accent'>Sam</span></h1>
        <p>Artist, Software Developer, Friend</p>
      </section>
      <section>


        <Link to="/gallery">
          <div className="Home-flag">
            <img src={'https://i.imgur.com/9ognnhx.jpg'}/>
            <h1>PAINTINGS</h1>
          </div>
        </Link>
        <Link to="/projects">
          <div className="Home-flag">
            <img src={'http://ludumdare.com/compo/wp-content/compo2//570486/113483-shot0-1472518702.png-eq-900-500.jpg'}/>
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
