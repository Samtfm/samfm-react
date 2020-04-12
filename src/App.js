import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Nav'

function App() {
  return (
    <Router>
      <Nav />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <div> About </div>
          </Route>
          <Route path="/gallery">
            <div> gallery </div>
          </Route>
          <Route path="/">
            <div> home </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
