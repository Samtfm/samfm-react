import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Nav'
import Gallery from './Gallery'
import Home from './Home'
import pictures from './pictures'

function App() {
  return (
    <Router>
      <Nav />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/projects">
            <div> Projects </div>
          </Route>
          <Route path="/gallery">
            <Gallery pictures={pictures}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
