import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageOne from './Components/PageOne/PageOne';
import PageTwo from './Components/PageTwo/PageTwo';
import PageThree from './Components/PageThree/PageThree';
import { ReservationContext } from './Contexts/ReservationContext'

function App() {
  const [options, setOptions] = useState(1);
  const [checked, setChecked] = useState(false);
  const chosenSeats = []

  return (
    <Router>
      <Switch>
        <ReservationContext.Provider value={{ options, setOptions, checked, setChecked, chosenSeats }}>
          <Route exact path='/' component={PageOne} />
          <Route exact path='/seats' component={PageTwo} />
          <Route exact path='/confirm' component={PageThree} />
        </ReservationContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;