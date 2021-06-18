import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <PageOne />
        </Route>

        <Route exact path='/seats'>
          <PageTwo />
        </Route>

        <Route exact path='/confirm'>
          <PageThree />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;