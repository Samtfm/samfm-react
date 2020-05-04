import React from 'react';
import './Projects.css'
const Projects = () => {
  return  (
    <section className="Home-body">
      <h1>Imagery with instructions!</h1>
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
  )
}

export default Projects;
