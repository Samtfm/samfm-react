import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="Home">
      <section className="Home-heading-block">
        <h1>Hi! You've reached <span class='accent'>SamFM</span></h1>
        <p>Artist, Software Developer, Friend</p>
      </section>
      <section className="Home-body">
        <h1>Would you like to explore some of my projects? You can...</h1>
        <ul class="links">
          <li>
            <p>
              <span>...trade with </span>
              <a target="blank" href="http://eggs-nihilo.herokuapp.com/">
                friendly sewer inhabitants
              </a>
              <span> (mobile friendly)</span>
            </p>
          </li>
          <li>
            <p>
              <span>...play with a </span>
              <a target="blank" href="https://samtfm.github.io/in-other-words/">
                magical fridge thesaurus
              </a>
            </p>
          </li>
          <li>
            <p>
              <span>...burn food over a </span>
              <a target="blank" href="http://ludumdare.com/compo/ludum-dare-36/?action=preview&uid=113483">
                rustic campfire
              </a>
            </p>
          </li>
          <li>
            <p>
              <span>...play an artsy set of </span>
              <a target="blank" href="https://samtfm.itch.io/hoppers/">
                moody not-games
              </a>
            </p>
          </li>
        </ul>
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
