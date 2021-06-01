import React from 'react';
import './App.css';
import PageOne from './PageOne';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PageTwo from './PageTwo';
import PageThree from './PageThree';

class App extends React.Component {
  state = {
    options: this.props.options
  }


  render() {
    return (
      <Router>
        <Switch>

          <Route exact path='/confirm'>
            <PageThree />
          </Route>

          <Route exact path='/seats'>
            <PageTwo />
          </Route>

          <Route exact path='/'>
            <PageOne />
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default App;
