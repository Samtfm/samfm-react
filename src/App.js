import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Nav'
import Gallery from './Gallery'
import Projects from './Projects'
import Home from './Home'
import pictures from './pictures'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/gallery">
          <Gallery pictures={pictures}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
