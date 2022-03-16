import React, {useState, useParams} from 'react';
import Search from './components/Search';
import Display from './components/Display';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Search/>
        <Switch>
          <Route exact path="/:category/:id">
            <Display/>
          </Route>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
