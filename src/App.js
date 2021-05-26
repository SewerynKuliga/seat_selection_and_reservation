import React from 'react';
import './App.css';
import PageOne from './PageOne';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PageTwo from './PageTwo';
import PageThree from './PageThree';

class App extends React.Component {
  /* tutaj mam mieć liczbę miejsc. */
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/confirm'>
              <PageThree />
            </Route>

            <Route exact path='/seats'>
              <PageTwo />
              {/* tutaj musze przekazać liczbe miejsc */}
            </Route>

            <Route exact path='/'>
              <PageOne />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
