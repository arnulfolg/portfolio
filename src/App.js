import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/header/Header'
import Home from './components/views/home/Home'
import Education from './components/views/education/Education'

function App() {

  return (
    <Router>
      <section className="App">
          <Header></Header>
          <main className="main">
              <Switch>
                  <Route path="/education">
                      <Education />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
                  <Route path="/projects">
                      {/* <Home /> */}
                  </Route>
              </Switch>
          </main>
      </section>
    </Router>

  );
}

export default App
