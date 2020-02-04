import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/screen1'>
          <Screen1 />
        </Route>
        <Route path='/screen2'>
          <Screen2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
