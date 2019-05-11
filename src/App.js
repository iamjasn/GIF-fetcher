import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom'

import Home from './containers/Home/Home';
import Results from './containers/Results/Results';
import './App.css';

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/results" component={Results} />
  </Router>
)

export default App;
